import React, {useState} from "react";
import {
  ThemeProvider,
    Div,
    DefaultTheme,
    Button,
    Icon,
    Input,
    Label,
    Textarea,
    Checkbox,
    Dropdown, Anchor, Radiobox
} from "react-atomize";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/authActions";
import { DropZone } from "../atoms/DropZone";
import "firebase/storage";


import image from '../../assets/images/hero_splash.jpg';
import '../styles/global.scss'


const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
    };

    const categories = require("../../assets/json/categories.json");
    const states = require("../../assets/json/statesDistrictIndia.json");


    // console.log("categories",categories)
    console.log("state",states.states)

    


    const stateList = (
        <Div>
        {states.states.map((name, index) => (
            <Anchor d="block" p={{ y: "0.25rem" }}>
            {name.name}
            </Anchor>
        ))}
        </Div>
    );

    const categoryList = (
        <Div>
        {categories.categories.map((name, index) => (
            <Anchor d="block" p={{ y: "0.25rem" }}>
            {name.category}
            </Anchor>
        ))}
        </Div>
    );
    // runUploadItemsApi()

    function getBase64(e) {
        // var file = e.target.files[0]
        // let reader = new FileReader()
        // reader.readAsDataURL(file)
        // console.log("File", file)
        // reader.onload = () => {
        //     const ref = firebase.storage().ref().child('some-child');
        //     ref.put(file).then((snapshot) => {
        //         console.log('Uploaded a blob or file!');
        //     });
        // };
        // reader.onerror = function (error) {
        //   console.log('Error: ', error);
        // }
      }
    
	
	function Upload() {

        // runUploadImageItemsApi({})
	    

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
        const [showSDropdown, setShowSDropdown] = useState(false);
        const [showCDropdown, setShowCDropdown] = useState(false);
        const [selectedState, setSelectedState] = useState("");

        const handleStateChange = e => {
            console.log(e.value)

            setSelectedState(e.value);
          }


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
                    <br />
                    <input type="text" className="upload-input"  placeholder="Title" />
                    
                    <select className="upload-select">
                            <option default >State</option>
                            <option>Something</option>
                            <option >Something</option>
                            <option>Something</option>
                     </select>
                     <select className="upload-select">
                            <option default >Category</option>
                            <option>Something</option>
                            <option >Something</option>
                            <option>Something</option>
                     </select>
                     <br />
                    <Button
                     className="btn btn-primary"
                    onClick={()=>setSteps(1)}
                >
                    Next
                </Button>
            </Div>
            )
              : null              
              }
              {
              step === 1?<Div className="mb-3">
                Step {step + 1}
                <Label
                        fontFamily="primary"
                        textColor="gray800">
                            Closing Date
                    </Label>

                    <Div d="flex" >
                        {closingDays}
                    </Div>

         
                    <hr className="my-4" />

                    <Div d="flex" className="mb-3">
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

                    <hr className="my-4" />

                    <Div d="flex" >
                    
                    <Button
                        onClick={()=>setSteps(0)}
                    >
                        
                        Back
                    </Button>
                    &emsp;
                    <Button
                    className="btn btn-primary"
                    onClick={()=>setSteps(2)}
                    >
            Next
        </Button>
        </Div>
    </Div>:null
    }

{
              step === 2?<Div>
                Step {step+1}
                <div className="d-flex">
                        <img className="mx-auto upload-image" src={image} />
                        <img className="mx-auto upload-image" src={image}  />
                        <img className="mx-auto upload-image" src={image}  />
                        <img className="mx-auto upload-image" src={image}  />
                    </div>
                    <button type="text" className="upload-input" placeholder="Title" >Upload Image</button>
                    

                    <Div d="flex">
               
                <Button
                    onClick={()=>setSteps(1)}
                >
                    
                    Back
                </Button>
            
            <Button
                
                onClick={()=>setSteps(3)}
            >
            
            Next
        </Button>
        </Div>
    </Div>:null
    }

{
              step === 3?<Div>
                Step {step+1}
                <input type="number" className="upload-input"  placeholder="Price" />

                    <Div d="flex">
                <Button
                    onClick={()=>setSteps(2)}
                    
                >
                    
                    Back
                </Button>
            &emsp;
            <Button
            className="btn btn-primary"
            onClick={()=>setSteps(4)}
        >
            
            Next
        </Button>
        </Div>
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

            <Div d="flex">
                    <Button
                        onClick={()=>setSteps(2)}
                        
                    >
                        
                        Back
                    </Button>
                &emsp;
                <Button
                className="btn btn-primary"
                onClick={()=>{
                    // runUploadImageItemsApi({})

                }}
            >
                
                Upload
            </Button>
            </Div>
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