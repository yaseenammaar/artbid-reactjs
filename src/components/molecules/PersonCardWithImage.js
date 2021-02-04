// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Input, Button, Icon, Div } from "react-atomize";

import personImg from '../../assets/images/personImg.jpg';
import styles from '../styles/style'


class PersonCardWithImage extends React.Component {
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
                shadow="1"
                style={styles.personImageCard}>
                  <div style={styles.personImage__cont}>
                    <img style={styles.personCard__image} src={personImg} />
                  </div>
                  <div style={{display:'flex',alignItems:'center',padding:'10px 10px', height:'50px'}}>
                  <img style={styles.snippet__image} src={personImg} />
                  <div style={styles.snippet__data}>
                    <h4 style={styles.snippetName}>Taylor Swift</h4>
                  </div>
                  <Icon name="Edit" size="20px" />
                </div>
                </Div>
  
                

    );
  }
}

export default PersonCardWithImage;