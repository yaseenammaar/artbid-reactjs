import {useEffect, useState} from "react";
import Firebase from "../Firebase"
import useItemBidCountListener from "./useItemBidCountListener";
import getSpecificItem from "../api/getSpecificItem";

const useItemData = (itemId) => {

    const [loadedCountListener, setLoadedCountListener] = useState(false)
    const [loadedItem, setLoadedItem] = useState(false)

    const {bidData} = useItemBidCountListener(itemId)
    const [itemData, setItemData] = useState({
        data: null,
        error: null,
        loading: true
    })

    useEffect(() => {

        if(loadedCountListener && loadedItem) {
            setItemData({
                loading : false,
                ...itemData
            })
        }

    }, [loadedCountListener, loadedItem])

    useEffect(() => {
            const itemDocRef = Firebase.firestore().collection("items").doc(itemId)
            const unsubscribe = itemDocRef.onSnapshot((snapshot) => {

                if(!loadedCountListener) {
                    setLoadedCountListener(true)
                }

                if (!snapshot.exists) {
                    setItemData({
                        data: null,
                        error: "item not found",
                        ...itemData,
                    })

                    return
                }

                setItemData({
                    data: snapshot.data(),
                    error: null,
                    ...itemData,
                })


            }, (error) => {

                setItemData({
                    data: null,
                    error: error.message,
                    ...itemData,
                })

            }, null);


        (async () => {
            const data = await getSpecificItem(itemId)
            if(data.isError) {
                setItemData({
                    data: null,
                    error: data.error,
                    ...itemData,
                })
            }
            else {
                setItemData({
                    data: data.itemRes,
                    ...itemData
                })
            }

            setLoadedItem(true)
        })();


        return () => {
            unsubscribe()
        }

    }, [])

    return {
        bidData,
        itemData
    }
};

export default useItemData