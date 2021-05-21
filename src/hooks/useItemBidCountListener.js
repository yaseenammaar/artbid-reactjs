import React, {useEffect, useState} from "react";
import Firebase from "../Firebase"

const useItemBidCountListener = (itemId) => {
    const [bidCountData, setBidCountData] = useState({
        bidCount: 0,
        addedPriceCount: 0,
        error: null,
        initialCallCompleted: false
    })

    const changeCountData = (data) => {
        setBidCountData(prevState => {
            return {
                ...prevState,
                ...data,
            }
        })
    }

    useEffect(() => {
        const bidShardRef = Firebase.firestore().collection("items").doc(itemId).collection("bid_shards")
        const unsubscribe = bidShardRef.onSnapshot((snapshots) => {
            console.log("count snapshot called...", snapshots.empty)
            if (snapshots.empty) {
                changeCountData({
                    bidCount: 0,
                    addedPriceCount: 0,
                    initialCallCompleted: true,
                })

                console.log("at last, bid data is :", bidCountData)
                return
            }

            let countSum = 0
            let priceCount = 0
            snapshots.forEach((doc) => {
                const docData = doc.data()
                countSum += docData["bidCount"]
                priceCount += docData["addedPriceCount"]
            });

            changeCountData({
                initialCallCompleted: true,
                bidCount: countSum,
                addedPriceCount: priceCount,
            })

            console.log("at last, bid data is :", bidCountData)


        }, (error) => {
            console.error("error occurres during bid count fetch", error)
            changeCountData({
                error: error.message,
            })

        });

        return () => {
            unsubscribe()
        }

    }, [])

    return {
        bidCountData
    }
};

export default useItemBidCountListener