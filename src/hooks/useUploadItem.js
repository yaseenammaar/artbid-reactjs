import {useState} from "react";


const useUploadItem = () => {
    const [uploadProgress, setUploadProgress] = useState(0)

    const uploadItemData = (itemData) => {

    }

    return {
        uploadProgress,
        uploadItemData
    }
};

export default useUploadItem