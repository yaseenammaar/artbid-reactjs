// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Input, Button, Icon, Div, Notification } from "react-atomize";

import nImg from '../../assets/images/dp.png';
import personImg from '../../assets/images/tie.jpg';
import styles from '../styles/style'


class PersonCardWithImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      notificationState: false,
      
      
    };
  }
  
  render() {
    const { showPassword,notificationState } = this.state;
    const theme = {
      shadows: {
        "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
      }
    };

    return (

      
                <Div 
                shadow="1"
                hoverShadow="3"
                transition
                style={styles.personImageCard} >


                  <div style={styles.personImage__cont}>
                    <img style={styles.personCard__image} src={personImg} />
                  </div>
                  <div style={{display:'flex',alignItems:'center',padding:'15px 10px', height:'20px'}}>
                  <img style={styles.snippet__image} src={nImg} />
                  <div style={styles.snippet__data}>
                    <h4 style={styles.snippetName}>Taylor Swift</h4>
                  </div>
                 
                  {
                  notificationState?
                  <Icon name="BookmarkSolid" size="20px" color="info800" 
                  onClick={() => this.setState({ notificationState: !notificationState })}/>
                  :<Icon name="Bookmark" size="20px" color="info800" 
                  onClick={() => this.setState({ notificationState: !notificationState })}/>}
                    
                </div>
                

                <Notification
                  bg="info300"
                  hoverBg="info400"
                  textColor="info800"
                  isOpen={notificationState}
                  onClose={() => this.setState({ notificationState: false })}
                  prefix={
                    <Icon
                      name="Bookmark"
                      color="info800"
                      size="18px"
                      m={{ r: "0.5rem" }}
                    />
                  }
                  >
                  Item Saved
                  </Notification>


                </Div>


  
                

    );
  }
}

export default PersonCardWithImage;