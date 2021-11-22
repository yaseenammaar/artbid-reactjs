import React, { useState, useEffect } from 'react';
import '../../styles/global.scss';
import { Alert } from "react";

import image from '../../assets/images/hero_splash.jpg';
import useItemData from "../../hooks/useItemData";
import { Icon, Button } from "react-atomize";

import {Link} from "react-router-dom";



function Art(props) {

    const [status, setStatus] = useState(3);
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
    } = useItemData("3nHukkxHoGuJ1PeJFWDk")


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

                                <img className="art-image" src={"https://architectureofthegames.net/wp-content/uploads/2019/07/16_Medal-case.2.jpg"} />

                                <div className="bid-data">

                                    <div className="priceandbidders">
                                        <p className="base-price">Base Price: ₹ {/*itemState.itemData.basePrice*/4564}</p>
                                        <p className="total-bidders">Total Bidders: {/*itemState.bidData.bidCount*/3}</p>
                                        {status===1?<p className="total-bidders">Ending In: 5 Hours</p>:null}

                                        {status===3?<p className="total-bidders">You Won the bid "Message Seller"</p>:null}
                                        
                                    </div>

                                    <div className="highest-bid">
                                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8Q5lww2ra6mEz4A_eioTgtItHVSa_ib9iw&usqp=CAU"} />

                                        &emsp;
                                        
                                        <div className="highest-by">
                                                <p>HIGHEST BID</p>
                                                <p>By <a href="#"> Roy </a></p>
                                        </div>
                                            &emsp;
                                            <h3 className="current-bid"> ₹ 1,00,000</h3>

                                        {/* <h3 className="current-bid"> Rs {itemState.bidData.addedPriceCount + itemState.itemData.basePrice}</h3> */}
                                    </div>
                                </div>

                            </div>
                            {/* ########## Image Container End ############### */}

                            <div className="bid-data-cont">
                                <a href="#" className="artist-name"> Artist </a>
                                <h2 className="item-name"> Beautiful Shit Just like Shitjhdjkshdjkashdjkhsjakhd{//itemState.itemData.title
                                } </h2>
                                <p className="item-bio">Smells Better than cannabies{
                                //itemState.itemData.description
                            }</p>

                                <div className="bid-history">


                                    <div className="one-bid">
                                        <img className="bidder-dp" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFazuw1KpmDA4PvyxRN6LRask2lReyQrV2U-Re6Duo8dR8P5HPAzlgyun3nWskrCP12Q&usqp=CAU"}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p><Link
                                                    to={{
                                                        pathname: "/artist",
                                                        hash: "#",
                                                        state: { fromDashboard: false }
                                                    }}
                                                >Omar</Link></p>
                                            <h6>Bidded ₹ 10,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlAQsGyVA16xGSo56P6Mk1-VaX6H6q3d4TA&usqp=CAU"}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p> 
                                                <Link
                                                    to={{
                                                        pathname: "/artist",
                                                        hash: "#",
                                                        state: { fromDashboard: false }
                                                    }}
                                                >Ammaar</Link>
                                            </p>
                                            <h6>Bidded ₹ 20,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU"}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p><Link
                                                    to={{
                                                        pathname: "/artist",
                                                        hash: "#",
                                                        state: { fromDashboard: false }
                                                    }}
                                                >Shubham</Link></p>
                                            <h6>Bidded ₹ 80,000</h6>
                                        </div>    
                                    </div>

                                    <div className="one-bid">
                                        <img className="bidder-dp" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8Q5lww2ra6mEz4A_eioTgtItHVSa_ib9iw&usqp=CAU"}  />
                                        &emsp;
                                        <div className="nameandbid">
                                            <p>
                                                <Link
                                                    to={{
                                                        pathname: "/artist",
                                                        hash: "#",
                                                        state: { fromDashboard: false }
                                                    }}
                                                >Roy</Link>
                                            </p>
                                            <h6>Bidded ₹ 1,00,000</h6>
                                        </div>    
                                    </div>

                                    
                                  

                                </div>
                                {/* <Button
                                            h="2.5rem"
                                            w="15rem"
                                            bg="warning700"
                                            hoverBg="warning600"
                                            rounded="circle"
                                            m={{ r: "1rem" }}
                                            shadow="2"
                                            hoverShadow="4"
                                            onPress = {() => {
                                                    console.log("test")
                                                    setStatus(3)
                                                }}
                                        >
                                            You Won the Bid? Tap here
                                        </Button>

                                        <Button
                                            h="2.5rem"
                                            w="15rem"
                                            bg="danger700"
                                            hoverBg="danger600"
                                            rounded="circle"
                                            m={{ r: "1rem" }}
                                            shadow="2"
                                            hoverShadow="4"
                                            onPress = {() => {
                                                    console.log("test")
                                                    setStatus(2)
                                                }
                                            }
                                        >
                                            You Lost the Bid? Tap here
                                        </Button> */}
                                        {status===1?<div className="messageandbid">
                                    
                                            {/* <input placeholder="+ Your Amount" /> */}
                                            {/* <Button
                                                h="2.5rem"
                                                w="2.5rem"
                                                bg="warning700"
                                                hoverBg="warning600"
                                                rounded="circle"
                                                m={{ r: "1rem" }}
                                                shadow="2"
                                                hoverShadow="4"
                                            >
                                                <Icon name="Search" size="20px" color="white" />
                                            </Button>
                                            */}

                                            
                                            
                                             <div className="buttons">
                                             
                                                 {/* <button className="b-btn active">Bid</button> */}
                                                {/*<button className="b-btn ">Message</button> */}

                                                 {/* <label className="switch">
                                                  <input type="checkbox" id="togBtn" />
                                                <div className="slider round">
                                                    <span className="on">Bid</span>
                                                    <span className="off">Message</span>
                                                 </div>
                                                </label>  */}
                                            </div> 

                                        </div>:null}
                                

                            </div>

                        </div>

                    </div>

            </section>
        </>
    )
}

export default Art;
