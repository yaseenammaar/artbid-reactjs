import React, { useState, useEffect } from 'react';
import image from '../../assets/images/hero_splash.jpg';
import '../styles/global.scss'


function Art(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <section id="art-page">
                <div className="container  h-100">
                    <div className="row h-100">

                        <div className="col-md-6 image-button">
                            <img src={image} className="w-100"/>
                            <div className="d-flex align-items-between justify-content-between mt-2">
                                <div>
                                    <p className="m-0 current-value"> CURRENT VALUE</p>
                                    <h2> ₹ 199</h2>
                                </div>
                                <button className="btn btn-primary shadow-lg">BID</button>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-center justify-content-center data">
                            <div>
                            <a href="" className="m-0"><p className="m-0"> Artist </p> </a>
                            <h2> Item Name </h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Art;