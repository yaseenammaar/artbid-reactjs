

import React, { useState, useEffect } from 'react';
import image from '../../assets/images/hero_splash.jpg';
import '../../styles/global.scss'
import OneCard from '../../components/molecules/artist/one-card';
import {useHistory, useLocation} from "react-router-dom";
import getSpecificItem from "../../api/getSpecificItem";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Art(props) {

    let history = useHistory()
    let query = useQuery()
    const itemId = query.get("itemId")
    console.log("itemId", itemId)

    const [product, setProduct] =
        useState({
            loading : false,
            data : null,
            error: false
        })

    /*useEffect(() => {
        (async () => {

            if(itemId != null) {
                setProduct({
                    loading: true,
                    data: product.data,
                    error: product.error
                })
                const res = await getSpecificItem(itemId)
                console.log("result :", res)

                if(!res.data.isError) {
                    setProduct({
                        loading: false,
                        data: res.data.itemRes,
                        error: false
                    })
                }
                else {
                    setProduct({
                        loading: false,
                        data: res.data.error,
                        error: true,
                    })
                }

            }
            else {
            }
        })();

        return () => {

        }
    }, []);*/

    function Product() {
        return (
            <section id="art-page">
                 <div className="container  h-100">
                    <div className="row h-100">

                        <div className="col-md-6 image-button">
                            <img src={"https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg"} className="w-100"/>
                            <div className="d-flex align-items-between justify-content-between mt-2">
                                <div>
                                    <p className="m-0 current-value"> CURRENT Bid</p>
                                    <h2> ₹ 2000</h2>
                                </div>
                                <button className="btn btn-primary shadow-lg">BID</button>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-center justify-content-center data">
                            <div>
                                <a href="" className="m-0"><p className="m-0"> Artist </p> </a>
                                <h2> Yaseen Ammaar </h2>
                                <p> No Description. </p>
                            </div>
                        </div>

                    </div>
                </div> 
            </section>
        );
    }

    function Trending() {
        return (
            <section id="trending" className="card-collection">
                <div className="container">


                    <div className="d-flex justify-content-between align-items-center collection-title">
                        <h2 className="m-0"> SIMILAR </h2>
                        <a className="m-0" href="#">See All</a>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <OneCard url="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg" name="Apple macbook and ipad" category="Gadgets" artist="John" bp="14,777"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg" name="Apple macbook and ipad" category="Gadgets" artist="John" bp="14,777"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg" name="Apple macbook and ipad" category="Gadgets" artist="John" bp="14,777"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg" name="Apple macbook and ipad" category="Gadgets" artist="John" bp="14,777"/>
                        </div>
                    </div>

                </div>
            </section>
        );
    }


    return (
        <>
            {
                product.loading ?
                    <div>loading the item</div>
                    :
                    <>
                        {
                            product.error ?
                                <div>Oops ! I have got some error. Try Again</div>
                                :
                                <>
                                    <Product />
                                    <Trending />
                                </>

                        }
                    </>

            }
        </>
    )
}

export default Art;