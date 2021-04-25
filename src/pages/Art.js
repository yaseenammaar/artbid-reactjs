import React, { useState, useEffect } from 'react';
import image from '../assets/images/hero_splash.jpg';
import '../components/styles/global.scss'
import OneCard from '../components/molecules/one-card';
import {useHistory, useLocation} from "react-router-dom";
import getSpecificItem from "../logics/apiCalls/getSpecificItem";

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
            loading : true,
            data : null,
            error: false
        })

    useEffect(() => {
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
                history.goBack()
            }
        })();

        return () => {

        }
    }, []);

    function Product() {
        return (
            <section id="art-page">
                <div className="container  h-100">
                    <div className="row h-100">

                        <div className="col-md-6 image-button">
                            <img src={product.data.docData.featured_image} className="w-100"/>
                            <div className="d-flex align-items-between justify-content-between mt-2">
                                <div>
                                    <p className="m-0 current-value"> CURRENT VALUE</p>
                                    <h2> ₹ {product.data.docData.base_price}</h2>
                                </div>
                                <button className="btn btn-primary shadow-lg">BID</button>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-center justify-content-center data">
                            <div>
                                <a href="" className="m-0"><p className="m-0"> Artist </p> </a>
                                <h2> {product.data.docData.title} </h2>
                                <p> {product.data.docData.description} </p>
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
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard/>
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