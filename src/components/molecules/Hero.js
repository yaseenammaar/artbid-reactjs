import React from "react";
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
  Text
} from "react-atomize";
import SearchLoading from "../atoms/SearchLoading"

const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    },
    shadows: {
      "new-shadow": "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)"
    }
   
	};
	
	export default function Hero() {
	  return (
		<ThemeProvider theme={theme}>
              <Row>
              <Col size={2} />
                <Col size={8} >
                    <Div
                    m={{ t: "1rem" }}
                    p={{ b: "2rem"}}
                    align="center"
                    justify="center"
                    >
                    <Text fontFamily="primary" textSize="display1" textAlign="center">
                      Welcome to ArtBid
                    </Text>
                    <Text fontFamily="primary" textSize="display4" textAlign="center">
                      Online Public Auction Platform
                    </Text>
                    </Div>
                    <Div
                      d="flex"
                      justify="center">
                        
                    <Button
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
                        
                        m=".5rem"
                      >
                        Bid
                      </Button>
                      <Button
                      prefix={
                          <Icon
                            name="Search"
                            size="16px"
                            color="white"
                            m={{ r: "0.5rem" }}
                          />
                        }
                        bg="gray700"
                        hoverBg="gray800"
                        
                        p={{ r: "1.5rem", l: "1rem" }}
                        shadow="3"
                        hoverShadow="4"
                        m=".5rem"
                      >
                        Explore
                      </Button>
                    </Div>
                    <Div d="flex">
                      <Div
                        h="20rem"
                        border="1px solid"
                        borderColor="gray200"
                        m="2rem"
                        p={{ x: "1rem" }}
                        shadow="new-shadow"
                        rounded="lg"
                        textColor="medium"
                        bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                        bgSize="cover"
                        bgPos="center"
                        w="15rem" 
                      />
                      <Div
                        h="20rem"
                        border="1px solid"
                        borderColor="gray200"
                        m="2rem"
                        w="15rem"
                        p={{ x: "1rem" }}
                        shadow="new-shadow"
                        rounded="lg"
                        textColor="medium"
                        bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                        bgSize="cover"
                        bgPos="center"
                      />
                      <Div
                        h="20rem"
                        border="1px solid"
                        borderColor="gray200"
                        m="2rem"
                        w="15rem"
                        p={{ x: "1rem" }}
                        shadow="new-shadow"
                        rounded="lg"
                        textColor="medium"
                        bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                        bgSize="cover"
                        bgPos="center"
                      />
                      
                      </Div>
                      
                    
                    
                </Col>
                <Col size={2} />
            </Row>
            
	  </ThemeProvider>
	  );
	}