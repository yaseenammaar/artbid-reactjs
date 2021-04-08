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
    Modal,
    Input,
    Label,
    Textarea,
    Checkbox
} from "react-atomize";
import SearchLoading from "../atoms/SearchLoading"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import { DropZone } from "../atoms/DropZone";
import { DateRangePickerCalendar } from "react-nice-dates";

const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
    };
    
	
	function Upload() {
        const [step, setSteps] = useState(0);

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
            
            {
            step==0?
            (

                <Div>
                    Step {step}
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
                    
                    
                            
                    
                    <Button
                    bg="white"
                    textColor="info900"
                    p={{r: "3rem", l: "3rem"}}
                    shadow="1"
                    hoverShadow="2"
                    fontFamily="primary"   
                    onClick={()=>setSteps(1)}
                >
                    Next
                </Button>
            </Div>
            )
              : null

              

              
              }
              {
              step==1?<Div>
                Step {step}
                <Label
                        fontFamily="primary"
                        textColor="gray800">
                            Closing Date
                    </Label>

                    <DateRangePickerCalendar/>
                <Button
                    bg="info500"
                    textColor="info900"
                    p={{r: "3rem", l: "3rem"}}
                    shadow="1"
                    hoverShadow="2"
                    fontFamily="primary"
                    onClick={()=>setSteps(0)}
                    
                >
                    
                    Back
                </Button>
            
            <Button
            bg="white"
            textColor="info900"
            p={{r: "3rem", l: "3rem"}}
            shadow="1"
            hoverShadow="2"
            fontFamily="primary"
            onClick={()=>setSteps(2)}
        >
            
            Next
        </Button>
    </Div>:null
    }

{
              step==2?<Div>
                Step {step}
                <Label
                        fontFamily="primary"
                        textColor="gray800">
                            Photos
                    </Label>
                    <DropZone/>
               
                <Button
                    bg="info500"
                    textColor="info900"
                    p={{r: "3rem", l: "3rem"}}
                    shadow="1"
                    hoverShadow="2"
                    fontFamily="primary"
                    onClick={()=>setSteps(1)}
                    
                >
                    
                    Back
                </Button>
            
            <Button
            bg="white"
            textColor="info900"
            p={{r: "3rem", l: "3rem"}}
            shadow="1"
            hoverShadow="2"
            fontFamily="primary"
            onClick={()=>setSteps(3)}
        >
            
            Next
        </Button>
    </Div>:null
    }

{
              step==3?<Div>
                Step {step}
               <Label 
                        fontFamily="primary"
                        textColor="gray800"
                        >Price 
                        <Input />
                    </Label>
                <Button
                    bg="info500"
                    textColor="info900"
                    p={{r: "3rem", l: "3rem"}}
                    shadow="1"
                    hoverShadow="2"
                    fontFamily="primary"
                    onClick={()=>setSteps(2)}
                    
                >
                    
                    Back
                </Button>
            
            <Button
            bg="white"
            textColor="info900"
            p={{r: "3rem", l: "3rem"}}
            shadow="1"
            hoverShadow="2"
            fontFamily="primary"
            onClick={()=>setSteps(4)}
        >
            
            Next
        </Button>
    </Div>:null
    }

{
              step==4?<Div>
                Step {step}
                <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Checkbox
                />
                I Agree all the shit.
            </Label>
                <Button
                    bg="info500"
                    textColor="info900"
                    p={{r: "3rem", l: "3rem"}}
                    shadow="1"
                    hoverShadow="2"
                    fontFamily="primary"
                    onClick={()=>setSteps(2)}
                    
                >
                    
                    Back
                </Button>
            
            <Button
            bg="white"
            textColor="info900"
            p={{r: "3rem", l: "3rem"}}
            shadow="1"
            hoverShadow="2"
            fontFamily="primary"
            onClick={()=>setSteps(4)}
        >
            
            Next
        </Button>
    </Div>:null
    }
              
                    
            
              
                       

            
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