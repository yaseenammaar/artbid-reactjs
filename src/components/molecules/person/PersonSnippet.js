// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Input, Button, Icon, Div } from "react-atomize";

import personImg from '../../../assets/images/personImg.jpg';
import styles from '../../../styles/style'


class PersonSnippet extends React.Component {
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
      <Div
      bg="white"
      hoverBg="info300"
      w="100%"
      rounded="circle"
      p={{ r: "1.5rem", l: "1rem" }}
      shadow="3"
      hoverShadow="4"
      m="1rem"
      transition
    >
                Hi
                  
                  </Div>

     
              
    );
  }
}

export default PersonSnippet;