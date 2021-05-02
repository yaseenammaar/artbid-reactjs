// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Input, Button, Icon, Div } from "react-atomize";

import personImg from '../../../assets/images/personImg.jpg';
import styles from '../../../styles/style'


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }
  
  render() {
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
        
        <h4 style={styles.loginHeading}>Get Into Your Account</h4>
        <p style={styles.loginText}>Enter Phone Number 
        </p>

        {/* Email Input */}
        <Input
          placeholder="Phone"
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

     {/* Password Input */}
      <Input
        placeholder="OTP"
        style={styles.basic__input}

        type={showPassword ? "text" : "password"}
        suffix={
          <Button
            pos="absolute"
            onClick={() => this.setState({ showPassword: !showPassword })}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
          >
            <Icon
              name={showPassword ? "EyeSolid" : "Eye"}
              color={showPassword ? "light" : "light"}
              size="16px"
            />
          </Button>
         
        }
      /> 

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
              Proceed
            </Button>
       </Div>
     



      //  </div>
    );
  }
}

export default Login;