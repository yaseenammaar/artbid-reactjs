// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Input, Button, Icon, Div } from "react-atomize";

import personImg from '../../assets/images/personImg.jpg';
import styles from '../styles/style'


class PersonCard extends React.Component {
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



        <div>
          <img src={personImg} style={styles.person__image} />
          <h4 style={styles.person__name}>Taylor Swift</h4>
          <p style={styles.person__designation}>Singer</p>
          <div style={styles.personBtnCont}>

          <Button
            bg="info700"
                suffix={
                  <Icon
                    name="Plus"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                  />
                }
                shadow="3"
                rounded="circle"
                hoverShadow="4"
                m={{ r: "1rem" }}
              >
            Contact Us
          </Button>

          <Button
          bg='white'
          textColor='black'
          border='1'
                suffix={
                  <Icon
                    name="Message"
                    size="16px"
                    color="black"
                    m={{ l: "1rem" }}
                  />
                }
                shadow="3"
                rounded="circle"
                hoverShadow="4"
                m={{ r: "1rem" }}
              >
            Message
          </Button>
          </div>
        </div>

    );
  }
}

export default PersonCard;