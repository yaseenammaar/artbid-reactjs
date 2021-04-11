import React from "react";
import {
  ThemeProvider,
  Div,
  Row,
  Col,
  DefaultTheme,
  Button,
  Icon,
  Text
} from "react-atomize";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";

const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
	};
	
	function Profile() {
	  return (
		<ThemeProvider theme={theme}>
              <Row>
              <Col size={2} />
                <Col size={2}>
                <Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
                <Div
                  border={{ b: "1px solid" }}
                  borderColor="gray300"
                  p={{ b: "0.75rem" }}
                >
                  <Text textSize="title" textWeight="500">
                    $1,410.16
                  </Text>
                  <Text textSize="caption" textColor="light">
                    per month
                  </Text>
                </Div>
                <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
                  <Div>
                    <Text textSize="caption" textColor="dark">
                      Payment Card
                    </Text>
                    <Text textSize="caption" textColor="light">
                      Component
                    </Text>
                  </Div>
                  <Div>
                    <Div d="flex" h="20px">
                      {[1, 2, 3, 4, 5].map(num => (
                        <Icon
                          key={num}
                          name="StarSolid"
                          size="14px"
                          color={num === 5 ? "gray400" : "info700"}
                          m={{ r: "0.125rem" }}
                        />
                      ))}
                    </Div>
                    <Text textSize="caption" textColor="light">
                      Rated 4.0/5
                    </Text>
                  </Div>
                </Div>
                <Button
                  rounded="lg"
                  bg="info700"
                  hoverBg="info800"
                  w="100%"
                  textWeight="500"
                >
                  Use this design system
                </Button>
              </Div>

                </Col>
                <Col size={2} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)