import React from "react";
import OneArtist from "../../molecules/artist/one-artist";

function TopArtist(props) {
    return (
        <>
            <section id="top-artist" className="card-collection">

                <div className="d-flex justify-content-between align-items-center collection-title container">
                    <h2 className="m-0"> SELLERS </h2>
                    <a className="m-0" href="#">See All</a>
                </div>

                <div className="top-artist container mt-4">

                    <div className="row">

                        <div className="col-md-2 col-6">
                            <OneArtist name="Picasso" url="https://doitbeforeme.com/wp-content/uploads/2019/09/penguin-listening-to-music-black-white-pencil-sketch-learn-to-draw-with-a-pencil-3-e1570707372114.jpg"/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist name="Taylor Swift" url="https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg"/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist name="Peter Thiel" url="https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/04/08/6036da87-c29b-484a-bea4-b6382140e09f_59cb4e5e.jpg"/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist name="Baymax" url="https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-04-at-7.01.03-PM-800x400.png"/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist name="Yusra Mardini" url="https://i.pinimg.com/originals/0a/c6/77/0ac6779019d33e019de09c6f7f5afd53.jpg"/>
                        </div>

                        <div className="col-md-2 col-6">
                            <OneArtist name="Usain Bolt" url="https://stillmedab.olympic.org/media/Images/OlympicOrg/Athletes/B/Bolt_Usain/Bolt_Usain_mugshot-01.jpg"/>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default TopArtist