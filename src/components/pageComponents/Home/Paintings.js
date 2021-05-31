import React from "react";
import OneCard from "../../molecules/artist/one-card";

function Paintings(props) {
    return (
        <>
            <section className="card-collection">
                <div className="d-flex justify-content-between align-items-center collection-title container">
                    <h2 className="m-0"> PAINTINGS </h2>
                    <a className="m-0" href="#">See All</a>
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <OneCard url="https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1--1024x512.jpg" name="Apple macbook and ipad" category="Gadgets" artist="John" bp="14,777"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://images.barrons.com/im-317412?width=620&size=1.5005861664712778" name="USA cents rare coin" category="Coins" artist="Omar" bp="100"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/goldmedal_660_083118065009.jpg"  name="Gold Medal" category="Medal & Trophy" artist="Usain Bolt" bp="34,800"/>
                        </div>
                        <div className="col-md-3 col-6">
                            <OneCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWsmx_wbVSd_akyRiShZWnoem2Ywlc7-9VA&usqp=CAU" name="Very Moment Robbery Footage" category="News" artist="Nightcrawler" bp="5,000"/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Paintings