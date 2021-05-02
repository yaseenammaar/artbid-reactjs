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

                <div style={styles.person__snippet}>
                  <img style={styles.snippet__image} src={personImg} />
                  <div style={styles.snippet__data}>
                    <h4 style={styles.snippetName}>Taylor Swift</h4>
                    <p style={styles.snippetDesignation}>Singer</p>
                  </div>
                  <Icon name="Edit" size="20px" />
                </div>

     
              
    );
  }
}

export default PersonSnippet;