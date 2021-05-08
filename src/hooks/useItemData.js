import {useEffect, useState} from "react";
import Firebase from "../Firebase"
import useItemBidCountListener from "./useItemBidCountListener";

const useItemData = (itemId) => {

    const { bidData } = useItemBidCountListener(itemId)
    const [itemData, setItemData] = useState({
        data: null,
        error: null,
        fetched: false
    })

    useEffect(() => {
        const itemDocRef = Firebase.firestore().collection("items").doc(itemId)
        const unsubscribe = itemDocRef.onSnapshot((snapshot) => {

            if (!snapshot.exists) {
                setItemData({
                   data: null,
                   error: "item not found",
                   fetched: true,
                    ...itemData,
                })

                return
            }

            setItemData({
                data: snapshot.data(),
                error: null,
                fetched: true,
                ...itemData,
            })


        }, (error) => {

            setItemData({
                data: null,
                error: error.message,
                fetched: true,
                ...itemData,
            })

        }, null);

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