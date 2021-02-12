// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Input, Button, Icon, Div,  Dropdown, Anchor } from "react-atomize";

import personImg from '../../assets/images/personImg.jpg';
import styles from '../styles/style'



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


class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      showDropdown: false,

    };
  }
  
  render() {
    const { showDropdown } = this.state;
    const { showPassword } = this.state;
    const theme = {
      shadows: {
        "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
      }
    };

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
          this.setState({ showDropdown: !showDropdown })
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
            >
              Save
            </Button>
       </Div>
     



      //  </div>
    );
  }
}

export default Register;