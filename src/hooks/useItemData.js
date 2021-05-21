import React, {useEffect, useState} from "react";
import useItemBidCountListener from "./useItemBidCountListener";
import getSpecificItem from "../api/getSpecificItem";

const useItemData = (itemId) => {

    const [itemDataError, setItemDataError] = useState(null)
    const [loadedItem, setLoadedItem] = useState(false)

    const {bidCountData} = useItemBidCountListener(itemId)
    const [itemState, setItemState] = useState({
        itemData: null,
        bidData: bidCountData,
        error: null,
        loading: true
    })

    // to update bidData
    useEffect(() => {
        console.log("bidData changed...", bidCountData)
        setItemState({
            ...itemState,
            bidData: bidCountData,
        })
    }, [bidCountData])

    //to update error
    useEffect(() => {
        if(bidCountData.error != null || itemDataError != null) {
            setItemState({
                ...itemState,
                error: itemDataError != null? itemDataError : bidCountData.error,
            })
        }
    }, [bidCountData.error, itemDataError])

    // to update loading state
    useEffect(() => {
        console.log("loading data changed", loadedItem, bidCountData.initialCallCompleted)
        if(loadedItem && bidCountData.initialCallCompleted) {
            setItemState({
                ...itemState,
                loading : false,
            })
        }

    }, [loadedItem, bidCountData.initialCallCompleted])

    // to get itemData
    useEffect(() => {

        (async () => {
            const data = await getSpecificItem(itemId)
            console.log("itemData : ", data)
            if(data.isError) {
                setItemDataError(data.error)
            }
            else {
                setItemState({
                    ...itemState,
                    itemData: data.itemRes.docData,
                })
            }

            setLoadedItem(true)
        })();

    }, [])

    return {
        itemState
    }
};

export default useItemData