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
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setError, setUser} from "../../redux/actions/authActions";

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
                    hoverShadow="3"
                    m={{t:"2rem"}}
                    p={{t:"8rem"}}
                    >
                      <Text fontFamily="primary" textSize="display1" textAlign="center">
                        Welcome to ArtBid
                      </Text>
                      <Text fontFamily="primary" textSize="display4" textAlign="center">
                        Online Public Auction Platform
                      </Text>
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
                        w="176px"
                        h="48px"
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
                        w="176px"
                        h="48px"
                        p={{ r: "1.5rem", l: "1rem" }}
                        shadow="3"
                        hoverShadow="4"
                        m=".5rem"
                      >
                        Explore
                      </Button>
                    </Div>
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
                        blurRadius="2"
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
                        blurRadius="2"
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
                        blurRadius="2"
                      />
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
                        blurRadius="2"
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
                        p={{ x: "1rem" }}
                        shadow="new-shadow"
                        rounded="lg"
                        textColor="medium"
                        bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                        bgSize="cover"
                        bgPos="center"
                        w="15rem" 
                      />
                      
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
                        blurRadius="2"
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
        setError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Hero)