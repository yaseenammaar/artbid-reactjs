import React from "react";
import {Link} from "react-router-dom";
import OneCard from "../../molecules/artist/one-card";

function Trending(props) {
    return (
        <>
            <section id="trending" className="card-collection">
                <div className="container">


                    <div className="d-flex justify-content-between align-items-center collection-title">
                        <h2 className="m-0"> TRENDING </h2>
                        <a className="m-0" href="#">See All</a>
                    </div>


                    <div className="container">
                        <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <Link
                                to={{
                                    pathname: "/art",
                                    search: "?sort=itemId=5aRh2u4oeYxgyhR2lgyE",
                                    hash: "#",
                                    state: { fromDashboard: true }
                                }}
                            >
                                
                                    <OneCard url="https://i.pinimg.com/originals/1c/88/83/1c8883a1768f2f77caf0371d49a68dc2.gif" name="NASA Rocket" category="Astronomy" artist="Nightcrawler" bp="5,000"/>
                                
                            </Link>
                            </div>
                            <div className="col-md-3 col-6">
                                <OneCard url="https://images.barrons.com/im-317412?width=620&size=1.5005861664712778" name="USA cents rare coin" category="Coins" artist="Omar" bp="100"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <OneCard url="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/goldmedal_660_083118065009.jpg"  name="Gold Medal" category="Medal & Trophy" artist="Usain Bolt" bp="34,800"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <OneCard url="https://i.pinimg.com/736x/14/1f/a9/141fa9eaa7f3d5a1a39305ab33edf07f.jpg" name="Magnificent Sketch" category="Art" artist="Shubham" bp="1,00,800"/>
                            </div>
                            
                        </div>
                    </div>


                    

                    {/* <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <OneCard url="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg" name="Dell Laptop with 69gb ram and 69 gb nvidea graphics" category="Gadgets" artist="Dormamu" bp="4,800"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg" name="Apple macbook and ipad" category="Gadgets" artist="John" bp="14,777"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://images.barrons.com/im-317412?width=620&size=1.5005861664712778" name="USA cents rare coin" category="Coins" artist="Omar" bp="100"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://i.pinimg.com/736x/14/1f/a9/141fa9eaa7f3d5a1a39305ab33edf07f.jpg" name="Magnificent Sketch" category="Art" artist="Shubham" bp="1,00,800"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/goldmedal_660_083118065009.jpg"  name="Gold Medal" category="Medal & Trophy" artist="Usain Bolt" bp="34,800"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWsmx_wbVSd_akyRiShZWnoem2Ywlc7-9VA&usqp=CAU" name="Very Moment Robbery Footage" category="News" artist="Nightcrawler" bp="5,000"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://techcrunch.com/wp-content/uploads/2023/03/nft-gallery1.jpg?w=730&crop=1" name="NFT" category="Art" artist="Elon Musk" bp="94,800"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://doitbeforeme.com/wp-content/uploads/2019/09/penguin-listening-to-music-black-white-pencil-sketch-learn-to-draw-with-a-pencil-3-e1570707372114.jpg" name="Million Dollar Sketch" category="Art" artist="Picasso" bp="24,800"/>
                        </div>
                    </div> */}

                </div>
            </section>
        </>
    );
}

export default Trending