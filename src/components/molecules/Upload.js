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
    Checkbox,
    Dropdown, Anchor, Radiobox
} from "react-atomize";
import SearchLoading from "../atoms/SearchLoading"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import { DropZone } from "../atoms/DropZone";
import { DateRangePickerCalendar } from "react-nice-dates";
import runUploadItemsApi from "../../logics/runUploadItemsApi";

const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
    };
    
	
	function Upload() {
	    //runUploadItemsApi({})

        const [step, setSteps] = useState(0);
        const [title, setTitle] = useState('');
        const [caption, setCaption] = useState('');
        const [basePrice, setBasePrice] = useState(0);
        const [imageUrls, setImgUrls] = useState(null);
        const [featuredImageUrl, setFeaturedImageUrl] = useState(null);
        const [availableState, setAvailableState] = useState('All');
        const [byUser, setByUser] = useState('')
        const [category, setCategory] = useState('')
        const [closingDate, setClosingDate] = useState('')
        const [closingTime, setClosingTime] = useState(12)
        const [state, setState] = useState('')
        const [status, setStatus] = useState(0)

        const closingDays = []

        const today = new Date();

        const date = new Date();
        date.setDate(date.getDate() + 1);
        // setClosingDate(date)


        for(let i = 0; i < 8; i++){


            closingDays.push( <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
            >
                <Radiobox
                onChange={() => setClosingDate(date.getDate()+i)}
                checked={ closingDate+i}
                name="date"
                />
                {date.getDate()+i}
            </Label>
            )
          }


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
            step === 0?
            (

                <Div>
                    Step {step+1}
                    <Label 
                        fontFamily="primary"
                        textColor="gray800"
                        >Title 
                        <Input 
                            value={title}
                            onChange={e => {
                                console.log(e.target.value)
                                setTitle(e.target.value)
                            }}
                        />
                    </Label>
                    <Label
                        fontFamily="primary"
                        textColor="gray800">
                        Short Description
                        <Textarea 
                        value={caption}
                        onChange={e => {
                            console.log(e.target.value)
                            setCaption(e.target.value)
                            
                            
                        }}/>
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
              step === 1?<Div>
                Step {step + 1}
                <Label
                        fontFamily="primary"
                        textColor="gray800">
                            Closing Date
                    </Label>

                    <Div d="flex" >
                        {closingDays}
                    </Div>



                    <Div d="flex">
                        <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                        onChange={() => setClosingTime(12)}
                        checked={ closingTime === 12 }
                        name="count"
                        />
                        12AM
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                        onChange={() => setClosingTime(15)}
                        checked={ closingTime === 15 }
                        name="count"
                        />
                        3PM
                    </Label>
                    <Label
                        align="center"
                        textWeight="600"
                        m={{ b: "0.5rem", r: "2rem" }}
                    >
                        <Radiobox
                        onChange={() => setClosingTime(18)}
                        checked={ closingTime === 18 }
                        name="count"
                        />
                        6PM
                    </Label>
                    </Div>
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
              step === 2?<Div>
                Step {step+1}
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
              step === 3?<Div>
                Step {step+1}
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
              step === 4?<Div>
                Step {step+1}
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
            onClick={()=>{

            }}
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