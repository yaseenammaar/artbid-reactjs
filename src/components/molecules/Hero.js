import React, {useState} from "react";
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Container,
    DefaultTheme,
    Image,
    Button,
    Icon,
    Text,
    Input, Modal
} from "react-atomize";
import SearchLoading from "../atoms/SearchLoading"

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import styles from "../styles/style";
import PersonCardWithImage from './PersonCardWithImage'
import PersonSnippet from './PersonSnippet'
import heroImage from '../../assets/images/hero.webp';
import Profile from "./Profile";
import PhoneAuth from "./PhoneAuth";


const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
	};
	
	function Hero() {

        return (
		<ThemeProvider theme={theme}>
              <Row>
              <Col size={1} />
                <Col size={10} >
                    <Div
                    h="30rem"
                    align="center"
                    justify="center"
                    shadow="1"
                    rounded="lg"
                    bg="warning400"
                    bgImg={heroImage}
                    bgSize="cover"
                    bgPos="center"
                    hoverShadow="5"
                    m={{t:"2rem"}}
                    p={{t:"8rem"}}
                    transition
                    >
                      <Text fontFamily="primary" textColor="white" textSize="display1" textAlign="center">
                        Welcome to ArtBid
                      </Text>
                      <Text fontFamily="primary" textColor="white" textSize="display4" textAlign="center">
                        Online Public Auction Platform
                      </Text>
                      <Div
                      d="flex"
                      justify="center">
                        
                    {/*<Button
                      prefix={
                          <Icon
                            name="EyeSolid"
                            size="16px"
                            color="white"
                            m={{ r: "0.5rem" }}
                          />
                        }
                        bg="info700"
                        hoverBg="info800"
                        p={{ r: "1.5rem", l: "1rem" }}
                        shadow="3"
                        hoverShadow="4"
                        w="176px"
                        h="48px"
                        m=".5rem"
                      >
                        Bid
                      </Button><br/>*/}

                      <Div
                        w="400px"
                        m={{ t:"2.0rem"}}
                        >

                        <SearchLoading/>

                      </Div>
                      
                    </Div>
                    </Div>
                    
                    <Div d="flex" style={styles.products__container}>
                    
                    <PersonCardWithImage/>
                    <PersonCardWithImage/>
                    {/* <PersonSnippet/> */}
                    {/* <Profile/> */}
                    <PersonCardWithImage/>
                    
                    
                     
                      
                    </Div>
                      
                      
                    
                    
                </Col>
                <Col size={1} />
            </Row>

            
	  </ThemeProvider>
	  );
	}

const mapStateToProps = (state) => {
    const { auth } = state

    /**
     * Use it as:
     * const user = props.auth.user
     * const error = props.auth.error
    */

    return { auth }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        //all actions come here
        /**
         * props.setUser()
         * */
        setUser,
    }, dispatch)
);



export default connect(mapStateToProps, mapDispatchToProps)(Hero)