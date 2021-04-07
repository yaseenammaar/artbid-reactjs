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
    Text,
    Modal,
    Input,
    Label,
    Textarea
} from "react-atomize";
import SearchLoading from "../atoms/SearchLoading"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import { DropZone } from "../atoms/DropZone";

const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
	};
	
	function Upload() {
	  return (
		<ThemeProvider theme={theme}>
              
                        <Icon
                            name="Cross"
                            pos="absolute"
                            top="1rem"
                            right="1rem"
                            size="16px"
                            cursor="pointer"
                        />

                        <Div>
                            <Label 
                                fontFamily="primary"
                                textColor="gray800"
                                >Title
                                <Input />
                            </Label>
                            <Label
                                fontFamily="primary"
                                textColor="gray800">
                                Short Description
                                <Textarea />
                            </Label> 
                            <Label
                                fontFamily="primary"
                                textColor="gray800">
                                    Closing Date
                            </Label>
                            
                                    
                            <Label
                                fontFamily="primary"
                                textColor="gray800">
                                    Photos
                            </Label>
                            <DropZone/>
                            <Button
                            bg="white"
                            textColor="info900"
                            p={{r: "3rem", l: "3rem"}}
                            shadow="1"
                            hoverShadow="2"
                            fontFamily="primary"
                        >
                            
                            Next
                        </Button>
                    </Div>

            
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

export default connect(mapStateToProps, mapDispatchToProps)(Upload)