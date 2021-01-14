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
	  }
	};
	
	export default function Hero() {
	  return (
		<ThemeProvider theme={theme}>
            <Row>
                <Col size={3} />
                <Col size={6} >
                    <Div
                    m={{ t: "10rem" }}>
                    <SearchLoading/>
                        <Div
                            h="3.5rem"
                            p={{ x: "1rem" }}
                            shadow="2"
                            rounded="lg"
                            d="flex"
                            align="center"
                            justify="center"
                            textColor="medium"
                            hoverShadow="3"
                            >
                            Welcome to ArtBid
                        </Div>
                    </Div>
                </Col>
                
                <Col size={3} />
            </Row>
	  </ThemeProvider>
	  );
	}