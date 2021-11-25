import {Div, Icon, Text, Button} from "react-atomize";
import React from "react";
import {Link} from "react-router-dom"
import {NavLink, useLocation} from "react-router-dom";
import Firebase from '../../../../Firebase'



function More(props) {
    const { pathname } = useLocation()
    return(
        <Div>
                     <Link to={`/myprofile`}><Button
                        h="2.5rem"
                        w="100%"
                        p={{x: "1rem"}}
                        m={1}
                        textSize="body"
                        textColor="gray900"
                        bg="info300"
                        bg="white"
                        fontFamily="primary"

                    >
                        My Profile
                    </Button></Link>
                    <Link to={`${pathname}/contact_us`}><Button
                       h="2.5rem"
                       w="100%"
                       p={{x: "1rem"}}
                       m={"1"}
                       textSize="body"
                       textColor="gray900"
                       bg="white"
                       m=".1rem"
                       fontFamily="primary"
                    >
                        Saved Items
                    </Button></Link>
                    <Link to={`//contact_us`}><Button
                          h="2.5rem"
                          w="100%"
                          m=".1rem"
                          p={{x: "1rem"}}
                          textSize="body"
                          textColor="gray900"
                          bg="white"
                          fontFamily="primary"
                    >
                        Contact
                    </Button></Link>
                
             
                
                        <Button
                                 h="2.5rem"
                                 w="100%"
                                 p={{x: "1rem"}}
                                 textSize="body"
                                 textColor="danger900"
                                 m=".1rem"
                                 bg="danger300"
                                 fontFamily="primary"
                             
                            onClick={() => {
                                Firebase.auth().signOut().then(() => {
                                    // Sign-out successful.
                                    // props.setUser(null)

                                }).catch((error) => {
                                    // An error happened.
                                });
                            }}
                         >Logout</Button>

                

                
                   
                
        </Div>
    )
}

export default More