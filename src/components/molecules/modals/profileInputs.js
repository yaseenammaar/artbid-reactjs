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
import OneArtist from "../../molecules/artist/one-artist";

import personImg from '../../../assets/images/personImg.jpg';
import styles from '../../../styles/style'
import {connect} from "react-redux";

const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
function ProfileInputs(props) {

    const {
        isProfileInputOpen = false,
        closeModal
    } = props
    const handleItemDataChanged = (dataType, value) => {
      
    }

    return (
        
        <ThemeProvider theme={theme}>
            <Modal 
                isOpen={isProfileInputOpen}
                onClose={() => {
                    closeModal()
                }}
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
                            
                            cursor="pointer"
                        />
                        <center>
                        <OneArtist url="https://doitbeforeme.com/wp-content/uploads/2019/09/penguin-listening-to-music-black-white-pencil-sketch-learn-to-draw-with-a-pencil-3-e1570707372114.jpg"/>
                        </center>
                          <input
                            type="text"
                            className="upload-input"
                            name="Name"
                            placeholder="Name"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleItemDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <input
                            type="text"
                            className="upload-input"
                            name="Username"
                            placeholder="Username"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleItemDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <input
                            type="text"
                            className="upload-input"
                            name="Email"
                            placeholder="Email"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleItemDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <input
                            type="text"
                            className="upload-input"
                            name="bio"
                            placeholder="Bio"
                            
                            onChange={(e) => {
                                if (e.target.value.length < 50) {
                                    handleItemDataChanged(e.target.name, e.target.value)
                                }
                            }}/>
                            <center>
                                <Button
                                    className="btn btn-primary"
                                    onClick={() => {
                                    
                                    }}
                                >
                                    Save
                                </Button>
                            </center>
                    </Div>
                </Modal>


        </ThemeProvider>
    );

    //Photos
    //Date and Time
    //Cost
    //TnC
    
}


export default ProfileInputs