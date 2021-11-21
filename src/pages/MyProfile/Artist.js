import React, { useState, useEffect } from 'react';
import '../../styles/global.scss';
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    DefaultTheme,
    Image,
    Button,
    Icon,
    Text,
    Modal,
    Notification,
    Textarea,
    Input
} from "react-atomize";
import image from '../../assets/images/hero_splash.jpg';
import OneCard from '../../components/molecules/artist/one-card';
import apiRequest from "../../logics/apiRequest";



function MyProfile(props) {
    const [state, setState] = useState('');
    const [isOpenEdit, setIsOpenEdit] = useState(false);


    function closeEdit() {
        setIsOpenEdit(false)
    }

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>

        <Modal 
                isOpen={isOpenEdit} 
                onClose={closeEdit} 
                align="center" 
                rounded="md" 
                shadow="1"
                 >
                     <Div>
                        <Icon
                            name="Cross"
                            pos="absolute"
                            top="1rem"
                            right="1rem"
                            size="16px"
                            onClick={closeEdit}
                            cursor="pointer"
                        />
                        
                            <button className="follow-btn">Profile Pic Change</button>
                        
                         <Input placeholder="Username"/>
                         <Textarea placeholder="Bio"/>
                         <button>Update</button>
                    </Div>
                </Modal>
            <section id="artist-page">
                <div className="container">
                    <div className="head">
                        <div className="profile-pic">
                            <img src={image} />
                        </div>
                        <div className="profile-data">
                            <h2 className="profile-name">Yaseen Ammaar</h2>
                            <p className="profile-bio">Website designer based in India, providing businesses bespoke designs.
You know the work, I know how to do it.</p>
                            <div className="followers">
                                <p>206 <span> Products</span></p>
                                <p>4,760 <span> followers</span></p>
                                <p>1,855 <span> following</span></p>
                            </div>
                        </div>
                        <div className="follow-unfollow">
                            {/*<button className="follow-btn">Follow</button>
                            <button className="unfollow-btn">Unfollow</button>*/}
                            <button onClick={() => {
                                //setIsOpenEdit(true)


                            }} className="message-btn">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </section>


                <div className="d-flex justify-content-between align-items-center collection-title container">
                    <h2 className="m-0"> ITEMS </h2>
                    <a className="m-0" href="#">See All</a>
                </div>

                <div className="container">
                    <div className="row mt-5">
                    <div className="col-md-3 col-6">
                            <OneCard url="https://i.pinimg.com/originals/76/ad/64/76ad64dc948e54d09e46f93320be77af.gif" name="Apple macbook and ipad" category="Gadgets" bp="14,777"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <OneCard url="https://i.pinimg.com/originals/68/0b/eb/680beb29a683b6624393df56ac23e9bf.gif" name="USA cents rare coin" category="Coins" bp="100"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <OneCard url="https://i.pinimg.com/originals/1a/37/bc/1a37bcf72db69c5ee822868209e18b76.gif"  name="Gold Medal" category="Medal & Trophy" bp="34,800"/>
                            </div>
                            <div className="col-md-3 col-6">
                                <OneCard url="https://i.pinimg.com/originals/1c/88/83/1c8883a1768f2f77caf0371d49a68dc2.gif" name="NASA Rocket" category="Astronomy" bp="5,000"/>
                            </div>
                            
                    </div>
                </div>
               
        </>
    )
}

export default MyProfile;