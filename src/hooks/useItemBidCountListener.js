import {useEffect, useState} from "react";
import Firebase from "../Firebase"

const useItemBidCountListener = (itemId) => {
    const [bidCountData, setBidCountData] = useState({
        bidCount: 0,
        addedPriceCount: 0,
        error: null,
        initialCallCompleted: false
    })

    useEffect(() => {
        const bidShardRef = Firebase.firestore().collection("items").doc(itemId).collection("bid_shards")
        const unsubscribe = bidShardRef.onSnapshot((snapshots) => {

            if (snapshots.empty) {
                setBidCountData({
                    bidCount: 0,
                    addedPriceCount: 0,
                    initialCallCompleted: true,
                    ...bidCountData
                })

                return
            }

            let countSum = 0
            let priceCount = 0
            snapshots.forEach((doc) => {
                const docData = doc.data()
                countSum += docData["bidCount"]
                priceCount += docData["addedPriceCount"]
            });

            setBidCountData({
                ...bidCountData,
                initialCallCompleted: true,
                bidCount: countSum,
                addedPriceCount: priceCount
            })


        }, (error) => {

            setBidCountData({
                error: error.message,
                ...bidCountData
            })

        });

        return () => {
            unsubscribe()
        }

    }, [])

    return {
        bidData: bidCountData
    }
};

export default useItemBidCountListener