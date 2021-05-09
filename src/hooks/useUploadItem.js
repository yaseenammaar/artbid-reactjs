import {useEffect, useState} from "react";
import Firebase from "../Firebase"
import runUploadItemsApi from "../api/runUploadItemsApi";
import imageCompression from 'browser-image-compression';
import FileType from 'file-type'

const useUploadItem = () => {
    const [uploadState, setUploadState] = useState({
        uploadProgress: 0,
        done: false,
        isUploading: false,
        error: null
    })
    const [detailsProgress, setDetailsProgress] = useState(0)
    const [featuredImageProgress, setFeaturedImageProgress] = useState(0)
    const [supportingImageProgress, setSupportingImageProgress] = useState([])

    useEffect(() => {
        let sum = Math.floor(detailsProgress) + Math.floor(featuredImageProgress)
        for(let i = 0; i < supportingImageProgress.length; i++) {
            sum += Math.floor(supportingImageProgress[i])
        }

        const totalProgress = Math.floor(sum / (supportingImageProgress.length + 2))
        setUploadState({...uploadState, uploadProgress: totalProgress})

    }, [detailsProgress, featuredImageProgress, supportingImageProgress])

    const uploadFile = (progressCallBack, file, fileRef) => {
        return new Promise((resolve, reject) => {
            const uploadTask = fileRef.put(file)
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    progressCallBack(progress)

                    switch (snapshot.state) {
                        case Firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case Firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                    reject(error)
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        resolve(downloadURL)
                    });
                }
            );
        })
    }

    const getCompressedImage = async(file, progressCallback) => {
        const buffer = Buffer.from(await file.arrayBuffer())
        const type = await FileType.fromBuffer(buffer)

        if(type.mime === "image/jpeg" || type.mime === "image/png" || type.mime === "image/webp") {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                onProgress: progressCallback
            }
            return await imageCompression(file, options)
        }
        else {
            progressCallback(50)
            return file
        }


    }


    const uploadFeaturedImage = async (file, docId) => {
        const compressedFile = await getCompressedImage(file, (progress) => {
            const intProgress = Math.floor(progress)
            setFeaturedImageProgress(Math.floor((intProgress / 100) * 50))
        })
        const extension = compressedFile.name.split('.').pop()
        const fileName = `FEATURED_IMAGE_${docId}.${extension}`
        const fileRef = Firebase.storage().ref(`/items/${docId}/${fileName}`)

        return await uploadFile((progress) => {
            const intProgress = Math.floor(progress)
            const progressIn50 = Math.floor((intProgress / 100) * 50)
            setFeaturedImageProgress(50 + progressIn50)
        }, compressedFile, fileRef)
    }

    const uploadSupportingImages = async (files, docId) => {
        let urlArray = []
        for(let i = 0; i < files.length; i++) {
            const compressedFile = await getCompressedImage(files[i], (progress) => {
                const intProgress = Math.floor(progress)
                let currImageProgress = supportingImageProgress
                currImageProgress[i] = Math.floor((intProgress / 100) * 50)
                setSupportingImageProgress(currImageProgress)
            })
            const extension = compressedFile.name.split('.').pop()
            const fileName = `SUPPORTING_IMAGE_${i}_${docId}.${extension}`
            const fileRef = Firebase.storage().ref(`/items/${docId}/${fileName}`)

            const url = await uploadFile((progress) => {
                const intProgress = Math.floor(progress)
                let currImageProgress = supportingImageProgress
                const progressIn50 = Math.floor((intProgress / 100) * 50)
                currImageProgress[i] = progressIn50 + 50
                setSupportingImageProgress(currImageProgress)

            }, compressedFile, fileRef)
            urlArray.push(url)
        }
        return urlArray
    }

    const uploadItemData = async (itemData) => {
        try {
            setUploadState({...uploadState, isUploading: true, done: false})

            const itemDocRef = Firebase.firestore().collection("items").doc()
            const docId = itemDocRef.id
            itemData.supportingImages.forEach((value, index) => {
                setSupportingImageProgress([...supportingImageProgress, 0])
            })
            const featuredImageUrl = await uploadFeaturedImage(itemData.featuredImage, docId)
            const supportingImagesUrlArray = await uploadSupportingImages(itemData.supportingImages, docId)
            const data = await runUploadItemsApi({
                title: itemData.title,
                description: itemData.description,
                category: itemData.category,
                featuredImage: featuredImageUrl,
                supportingImages: supportingImagesUrlArray,
                basePrice: itemData.basePrice,
                newDocId: docId,
                closingTimestamp: Firebase.firestore.Timestamp.fromDate(itemData.closingDate)

            })
            setDetailsProgress(100)
            setUploadState({...uploadState, isUploading: false, done: true})
            return data

        }
        catch (e) {
            console.error("upload stopped with an error:", e)
            setUploadState({uploadProgress: 0, isUploading: false, done: false, error: e.message})
            throw new Error(e)
        }

    }

    return {
        uploadState,
        uploadItemData
    }
};

export default useUploadItem