// Show Hide Password
import React, {Component, useEffect, Image, useState} from "react";
import { Input, Button, Icon, Div,  Dropdown, Anchor } from "react-atomize";

import personImg from '../../../assets/images/personImg.jpg';
import styles from '../../../styles/style'
import saveNewUserInDb from "../../../api/saveNewUserInFirestore";
import apiRequest from "../../../logics/apiRequest";



const menuList = (
  <Div>
    {["Delhi", "Gurgaon", "Nodia", "Lucknow", "Allahabad"].map((name, index) => (
      <Anchor 
       bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
      
      d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </Div>
);


function Register(props){

    const [showPassword, setShowPassword] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);


    const theme = {
      shadows: {
        "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
      }
    };

    async function handleSave() {
        console.log("save button clicked")
        if(isDataValid()) {
            const bio = "";
            const city = "Delhi";
            const res = await saveNewUserInDb(bio, city);
            console.log(res.data.error)
        }
    }

    function isDataValid() {
        //TODO: make the logic
        return true;
    }

    return (

      // <div style={styles.wrapper}>


      <Div 
      
      >
        
        <h4 style={styles.loginHeading}>Hey Newcomer!</h4>
        <p style={styles.loginText}>Please Enter Details
        </p>

        <Input
          placeholder="Email"
          style={styles.basic__input}
          suffix={
              <Icon
                name="Email"
                size="16px"
                
                // onClick={() => console.log("clicked")}
                color="light"
                pos="absolute"
                top="45%"
                right="1rem"
                transform="translateY(-50%)"
        />
        
      }
     />
     <Input
          placeholder="Name"
          style={styles.basic__input}
          suffix={
              <Icon
                name="Email"
                size="16px"
                
                // onClick={() => console.log("clicked")}
                color="light"
                pos="absolute"
                top="45%"
                right="1rem"
                transform="translateY(-50%)"
        />
        
      }
     />

<Input
          placeholder="Username"
          style={styles.basic__input}
          suffix={
              <Icon
                name="Email"
                size="16px"
                
                // onClick={() => console.log("clicked")}
                color="light"
                pos="absolute"
                top="45%"
                right="1rem"
                transform="translateY(-50%)"
        />
        
      }
     />

      <Dropdown
        isOpen={showDropdown}
        bg="info100"
        focusBg="info200"
        borderColor="info600"
        focusBorderColor="info800"
        textColor="info800"
        textWeight="500"
        onClick={() =>
          setShowDropdown(!showDropdown)
        }
        menu={menuList}
      >
        Select City
      </Dropdown>

          <Button
          style={styles.loginButton}
              h="2.5rem"
              w="100%"
              p={{ x: "1rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
              m={{ r: "0.5rem" }}
          onClick={() => handleSave()}
            >
              Save
            </Button>
       </Div>
     



      //  </div>
    );

}

export default Register;