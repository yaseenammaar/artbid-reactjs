import React, { useState, useEffect } from 'react';
import image from '../../assets/images/hero_splash.jpg';
import '../styles/global.scss';


function OneArtist() {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <div className="one-artist text-center">
                <img src={image} className="artist-image rounded-circle shadow-lg mb-2" />
                <h4 className="mt-2"> Artist Name </h4>
            </div>
        </>
    )
}

export default OneArtist;