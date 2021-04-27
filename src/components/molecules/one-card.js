import React, { useState, useEffect } from 'react';
import image from '../../assets/images/hero_splash.jpg';
import '../styles/global.scss'

function OneCard(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <div className="one-card card">
                <div className="img-container">
                  <a href="#">  <img src={props.url} /> </a>
                </div>

                <div className="content-container p-md-3 p-2">
                    <span className="category"> {props.category} </span>
                    <h4 className="item-name"> {props.name} </h4>
                    <p className="artist-name m-0"> by <b> {props.artist} </b> </p>
                </div>

                <div className="h-line"> </div>

                <div className="d-flex justify-content-between px-md-3 px-2 py-1">

                    <div className="time-left d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
                        &nbsp;<p className="m-0"> 1hr left </p>
                    </div>

                    <h2 className="bid-price m-0 d-flex align-items-center">₹ {props.bp}</h2>
                </div>                
        
            </div>
        </>
    )
}

export default OneCard;