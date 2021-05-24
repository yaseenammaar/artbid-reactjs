import React, { useState, useEffect } from 'react';
import '../../styles/global.scss';
import image from '../../assets/images/hero_splash.jpg';
import useItemData from "../../hooks/useItemData";


function Art(props) {
    /**
     * itemState: {
            itemData,
            bidData,
            error,
            loading
     * }
     */
    const {
        itemState
    } = useItemData("SkW0dzclygVubNk7lDKF")


    if(itemState.loading) {
        return <div>loading....</div>
    }

    return (
        <>
            <section id="art-page">

                    <div className="container">

                        <div className="art-row">

                            {/* ############## Image Container ############ */}
                            <div className="image-cont">

                                <img className="art-image" src={itemState.itemData.featuredImage} />

                                <div className="bid-data">

                                    <div className="priceandbidders">
                                        <p className="base-price">Base Price: Rs {itemState.itemData.basePrice}</p>
                                        <p className="total-bidders">Total Bidders: {itemState.bidData.bidCount}</p>
                                    </div>

                                    <div className="highest-bid">
                                        <img src={image} />

                                        &emsp;
                                        
                                        <div className="highest-by">
                                                <p>HIGHEST BID</p>
                                                <p>By <a href="#"> Omar </a></p>
                                        </div>
                                            &emsp;
                                        <h3 className="current-bid"> Rs {itemState.bidData.addedPriceCount + itemState.itemData.basePrice}</h3>
                                    </div>
                                </div>

                            </div>
                            {/* ########## Image Container End ############### */}

                            <div className="bid-data-cont">
                                <a href="#" className="artist-name"> Artist </a>
                                <h2 className="item-name"> {itemState.itemData.title} </h2>
                                <p className="item-bio">{itemState.itemData.description}</p>

                                <div className="bid-history">


                                    <div className="one-bid">
                                        <img className="bidder-dp" src={image}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>Omar <span className="type">Bid</span></p>
                                            <h6>Bidded INR 1,00,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={image}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>Omar <span className="type">Bid</span></p>
                                            <h6>Bidded INR 1,00,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={image}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>Omar <span className="type">Bid</span></p>
                                            <h6>Bidded INR 1,00,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={image}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>Omar <span className="type">Bid</span></p>
                                            <h6>Bidded INR 1,00,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={image}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>Omar <span className="type">Bid</span></p>
                                            <h6>Bidded INR 1,00,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={image}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>Omar <span className="type">Bid</span></p>
                                            <h6 className="bid">Bidded INR 1,00,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={image}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>Omar <span className="type">Message</span></p>
                                            <h6 className="message">I am the best</h6>
                                        </div>    
                                    </div>
                                  

                                </div>

                                <div className="messageandbid">
                                    
                                        <input placeholder="+ Your Amount" />
                                        <div className="buttons">
                                            {/* <button className="b-btn active">Bid</button>
                                            <button className="b-btn ">Message</button> */}

                                            <label className="switch">
                                              <input type="checkbox" id="togBtn" />
                                            <div className="slider round">
                                                <span className="on">Bid</span>
                                                <span className="off">Message</span>
                                             </div>
                                            </label>
                                        </div>

                                </div>

                            </div>

                        </div>

                    </div>

            </section>
        </>
    )
}

export default Art;