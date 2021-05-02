import React, { useState, useEffect } from 'react';
import  '../styles/global.scss';
import image from '../assets/images/hero_splash.jpg';

function Art(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <section id="art-page">

                    <div className="container">

                        <div className="art-row">

                            {/* ############## Image Container ############ */}
                            <div className="image-cont">

                                <img className="art-image" src={image} />

                                <div className="bid-data">

                                    <div className="priceandbidders">
                                        <p className="base-price">Base Price: 49$</p>
                                        <p className="total-bidders">Total Bidders: 91</p>
                                    </div>

                                    <div className="highest-bid">
                                        <img src={image} />

                                        &emsp;
                                        
                                        <div className="highest-by">
                                                <p>HIGHEST BID</p>
                                                <p>By <a href="#"> Omar </a></p>
                                        </div>
                                            &emsp;
                                        <h3 className="current-bid"> $1,00,000</h3>
                                    </div>
                                </div>

                            </div>
                            {/* ########## Image Container End ############### */}

                            <div className="bid-data-cont">
                                <a href="#" className="artist-name"> Artist </a>
                                <h2 className="item-name"> Item Name </h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

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
                                        <button className="b-btn bid">Bid</button>
                                        <button className="b-btn message">Message</button>
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