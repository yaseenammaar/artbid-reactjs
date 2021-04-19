
const styles ={
    products__container:{
        flexWrap: "wrap"
      },
    
      one__product:{
        width: "290px",
        height: "400px",
        minHeigth:"150px",
        minWidth: "200px",
        margin: "4px"
      },
    
      login__card:{
        padding: "10px"
      },
    

    wrapper:{
      // display:'flex',
      alignItems:'center',
      justifyContent:'center',
      // height:'90vh'
    },
    card__login:{
      margin:'30px auto',
      padding:'50px 25px',
      
      // border:'1px solid #dedede',
      borderRadius:'25px',
      shadowColor: '#000',
     
      // webkitBoxShadow: "1px 3px 1px #9E9E9E",
      // mozBoxShadow: "1px 3px 1px #9E9E9E",
      // boxShadow: "7px 7px 18px #d9d9d9,-7px -7px 18px #e7e7e7"
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
      marginTop:'20px',
      borderRadius:'25px',
      background:'#eef7fe',
      borderWidth:'0'
    },
  
  
    // ############### Person Card #####################
    person__card:{
      width: '400px',
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
      height:'50px',
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
    snippet__time:{
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
      border:'1px #dedede',
      width:'300px',
      height:'300px',
      borderRadius:'10px',
      margin:'10px auto',
      cursor:"pointer"
    },
    personImage__cont:{
      height:'250px',
    },
    personCard__image:{
      width:'100%',
      height:'100%',
      objectFit:'cover',
      borderTopLeftRadius:'10px',
      borderTopRightRadius:'10px'
    },
    personImageCardSnippet:{
      border:'none',
      width:'100%'
    }
  
   
  };
  
  export default styles;