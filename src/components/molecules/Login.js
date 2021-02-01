// Show Hide Password
import React, {Component, useEffect, Image} from "react";
import { Input, Button, Icon, Div } from "react-atomize";

import personImg from '../../assets/images/personImg.jpg';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }
  
  render() {
    const { showPassword } = this.state;
    const theme = {
      shadows: {
        "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
      }
    };

    return (

      <div style={styles.wrapper}>

        {/* ##########Login Form Start############### */}

      <div style={styles.card__login}>
        
        <h4 style={styles.loginHeading}>Login to your account</h4>
        <p style={styles.loginText}>Don't have an account yet! 
        <a href="#" style={styles.createNewLink}>Create New
        </a>
        </p>

        {/* Email Input */}
        <Input
          placeholder="someone@something.com"
          style={styles.basic__input}
          suffix={
              <Icon
                name="Email"
                size="16px"
                cursor="none"
                // onClick={() => console.log("clicked")}
                color="light"
                pos="absolute"
                top="45%"
                right="1rem"
                transform="translateY(-50%)"
        />
      }
     />

     {/* Password Input */}
      <Input
        placeholder="Password"
        style={styles.basic__input}

        type={showPassword ? "text" : "password"}
        suffix={
          <Button
            pos="absolute"
            onClick={() => this.setState({ showPassword: !showPassword })}
            bg="transparent"
            w="3rem"
            top="0"
            right="0"
            rounded={{ r: "md" }}
          >
            <Icon
              name={showPassword ? "EyeSolid" : "Eye"}
              color={showPassword ? "light" : "light"}
              size="16px"
            />
          </Button>
         
        }
      />

          <Button
          style={styles.loginButton}
              h="2.5rem"
              w="100%"
              p={{ x: "1rem" }}
              textSize="body"
              textColor="info700"
              hoverTextColor="info900"
              bg="white"
              hoverBg="info200"
              border="1px solid"
              borderColor="info700"
              hoverBorderColor="info900"
              m={{ r: "0.5rem" }}
            >
              Login
            </Button>
       </div>
        {/* ##########Login Form End############### */}


        {/* ##################### Person Card Start ################## */}
        <div style={styles.person__card}>
          <img src={personImg} style={styles.person__image} />
          <h4 style={styles.person__name}>Taylor Swift</h4>
          <p style={styles.person__designation}>Singer</p>
          <div style={styles.personBtnCont}>

          <Button
            bg="info700"
                suffix={
                  <Icon
                    name="Plus"
                    size="16px"
                    color="white"
                    m={{ l: "1rem" }}
                  />
                }
                shadow="3"
                rounded="circle"
                hoverShadow="4"
                m={{ r: "1rem" }}
              >
            Contact Us
          </Button>

          <Button
          bg='white'
          textColor='black'
          border='1'
                suffix={
                  <Icon
                    name="Message"
                    size="16px"
                    color="black"
                    m={{ l: "1rem" }}
                  />
                }
                shadow="3"
                rounded="circle"
                hoverShadow="4"
                m={{ r: "1rem" }}
              >
            Message
          </Button>
          </div>
        </div>
        {/* ##################### Person Card End ################## */}


        {/* ##################### Person Snippet Start ################## */}
                <div style={styles.person__snippet}>
                  <img style={styles.snippet__image} src={personImg} />
                  <div style={styles.snippet__data}>
                    <h4 style={styles.snippetName}>Taylor Swift</h4>
                    <p style={styles.snippetDesignation}>Singer</p>
                  </div>
                  <Icon name="Edit" size="20px" />
                </div>

        {/* ##################### Person Snippet End ################## */}



        {/* ##################### Person Card Width Image Start ################## */}

                <div style={styles.personImageCard}>
                  <div style={styles.personImage__cont}>
                    <img style={styles.personCard__image} src={personImg} />
                  </div>
                  <div style={{display:'flex',alignItems:'center',padding:'10px 10px', height:'50px'}}>
                  <img style={styles.snippet__image} src={personImg} />
                  <div style={styles.snippet__data}>
                    <h4 style={styles.snippetName}>Taylor Swift</h4>
                  </div>
                  <Icon name="Edit" size="20px" />
                </div>
                </div>

        {/* ##################### Person Card Width Image End ################## */}


              
                


       </div>
    );
  }
}

const styles ={

  wrapper:{
    // display:'flex',
    alignItems:'center',
    justifyContent:'center',
    // height:'90vh'
  },
  card__login:{
    margin:'30px auto',
    padding:'50px 25px',
    width:'280px',
    // border:'1px solid #dedede',
    borderRadius:'25px',
    shadowColor: '#000',
   
    webkitBoxShadow: "1px 3px 1px #9E9E9E",
    mozBoxShadow: "1px 3px 1px #9E9E9E",
    boxShadow: "7px 7px 18px #d9d9d9,-7px -7px 18px #e7e7e7"
  },

  loginText:{
    textAlign:'center',
    marginBottom:'50px',
    color:'#878787'

  },
  createNewLink:{
    textDecoration:'none',

  }
  ,

  loginHeading:{
    fontSize:'28px',
    margin:'0',
    marginBottom:'10px',
    marginRight:'auto',
    marginLeft:'auto',
    textAlign:'center'
  },

  basic__input:{
    display:'block',
    marginBottom:'10px',
    borderRadius:"25px"
  },

  loginButton:{
    marginTop:'50px',
    borderRadius:'25px',
    background:'#eef7fe',
    borderWidth:'0'
  },


  // ############### Person Card #####################
  person__card:{
    width: '300px',
    background: 'white',
    border:'1px solid #dedede',
    borderRadius:'20px',
    padding:'30px 15px',
    textAlign:'center',
    margin:'0 auto'
  },
  person__image:{
    width:'100px',
    height:'100px',
    borderRadius:'50%',
  },
  person__name:{
    fontSize:'25px',
    margin: '10px 0',
  },
  person__designation:{
    color:'#878787',
    margin:'10px 0 40px 0'
  },
  personBtnCont:{
    display:'flex'
  },


  // ########################### Person Snippet ########################

  person__snippet:{
    width:'300px',
    display:'flex',
    justifyContent:'space-between',
    border:'1px solid #dedede',
    alignItems:'center',
    padding:'8px 12px',
    borderRadius: '10px',
    margin:'20px auto',
  },
  snippet__image:{
    width:'50px', height:'50px',
    borderRadius:'50%', objectFit:'cover',
    marginRight:'10px'

  },
  snippet__data:{
    flex:'2'
  },
  snippetName:{
    margin:'2px 0'
  },
  snippetDesignation:{
    margin:'0',
    color:'#878787'
  },


  // ############################## Person Image Card ###########################

  personImageCard:{
    border:'1px solid #dedede',
    width:'320px',
    // height:'300px',
    borderRadius:'25px',
    margin:'20px auto'
  },
  personImage__cont:{
    height:'200px',
  },
  personCard__image:{
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderTopLeftRadius:'25px',
    borderTopRightRadius:'25px'
  },
  personImageCardSnippet:{
    border:'none',
    width:'100%'
  }

 
};


export default Login;