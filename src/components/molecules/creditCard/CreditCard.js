// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Icon, Div, Notification } from "react-atomize";

class CreditCard extends React.Component {
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
                shadow="4"
                hoverShadow="5"
                pos="fixed"
                right="0px"
                bottom="0px"
                transition
                h="23rem"
                w="12rem"
                m="5rem"
                cursor="pointer"
                blurRadius={100}
                rounded="lg"
                onClick={()=>this.setState({notificationState:true})}
                 >
                <Notification
                  bg="success500"
                  hoverBg="info400"
                  textColor="white"
                  isOpen={notificationState}
                  onClose={() => this.setState({ notificationState: false })}
                  prefix={
                    <Icon
                      name="Bookmark"
                      color="white"
                      size="18px"
                      m={{ r: "0.5rem" }}
                    />
                  }
                  >
                  Card Tapped
                  </Notification>
                </Div>
    );
  }
}

export default CreditCard;