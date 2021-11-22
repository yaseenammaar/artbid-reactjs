import React, {useState} from "react";
import {
    ThemeProvider,
    Div,
    DefaultTheme,
    Icon,
    Text,
    Button,
    Modal
} from "react-atomize";
import 'react-nice-dates/build/style.css'
import OneArtist from "../../artist/one-artist";
import axios from 'axios';


const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
function ProfileInputs(props) {

    const [emailVerified, setEmailVerified] = useState(false);

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        bio: "Select Category",
        email: "",
        profilePic: "https://doitbeforeme.com/wp-content/uploads/2019/09/penguin-listening-to-music-black-white-pencil-sketch-learn-to-draw-with-a-pencil-3-e1570707372114.jpg"
    })

    const handleUserDataChanged = (dataType, value) => {
        setUserData(prevState => {
            return { ...prevState,[dataType]: value}
        })
    }

    return (
        
        <ThemeProvider theme={theme}>

                     <Div>

                        <Icon
                            name="Cross"
                            pos="absolute"
                            top="1rem"
                            right="1rem"
                            size="16px"
                            
                            cursor="pointer"
                        />
                        <center   onClick={() => {
                                console.log("Input Triggered")
                                
                            }}>
                        <OneArtist 
                           
                            url={userData.profilePic}/>

                        </center>
                        <div>Please enter these details to proceed</div>
                          <input
                            type="text"
                            className="upload-input"
                            name="name"
                            placeholder="Name"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleUserDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <input
                            type="text"
                            className="upload-input"
                            name="username"
                            placeholder="Username"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleUserDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <input
                            type="text"
                            className="upload-input"
                            name="email"
                            placeholder="Email"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleUserDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <input
                            type="text"
                            className="upload-input"
                            name="bio"
                            placeholder="Bio"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleUserDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <center>
                                <Button
                                    disabled={emailVerified}
                                    className="btn btn-primary"
                                    onClick={() => {
                                        console.log(userData)
                                        setEmailVerified(true)
                                    }}
                                >
                                    Verify Email
                                </Button>&nbsp;&nbsp;&nbsp;
                                <Button
                                    disabled={!emailVerified}
                                    className="btn btn-primary"
                                    
                                    onClick={() => {
                                        console.log(userData)
                                    }}
                                >
                                    Proceed
                                </Button>
                            </center>

                            {/* This Input will trigger when clicked on profile pic*/}
                            <input hidden type="file"/>
                             

                    </Div>


        </ThemeProvider>
    );
    
}


export default ProfileInputs