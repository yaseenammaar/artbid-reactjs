import {useEffect, useState} from "react";
import useItemBidCountListener from "./useItemBidCountListener";
import getSpecificItem from "../api/getSpecificItem";

const useItemData = (itemId) => {

    const [itemDataError, setItemDataError] = useState(null)
    const [loadedItem, setLoadedItem] = useState(false)

    const {bidData} = useItemBidCountListener(itemId)
    const [itemState, setItemState] = useState({
        itemData: null,
        bidData: bidData,
        error: null,
        loading: true
    })

    // to update bidData
    useEffect(() => {
        setItemState({
            bidData: bidData,
            ...itemState
        })
    }, [bidData])

    //to update error
    useEffect(() => {
        if(bidData.error != null || itemDataError != null) {
            setItemState({
                error: itemDataError != null? itemDataError : bidData.error,
                ...itemState
            })
        }
    }, [])

    // to update loading state
    useEffect(() => {

        if(loadedItem && bidData.initialCallCompleted) {
            setItemState({
                loading : false,
                ...itemState
            })
        }

    }, [loadedItem, bidData.initialCallCompleted])

    // to get itemData
    useEffect(() => {

        (async () => {
            const data = await getSpecificItem(itemId)
            if(data.isError) {
                setItemDataError(data.error)
            }
            else {
                setItemState({
                    itemData: data.itemRes,
                    ...itemState
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