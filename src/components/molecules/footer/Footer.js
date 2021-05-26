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
    Input
} from "react-atomize";
import {NavLink} from "react-router-dom";

import logo from '../../../assets/images/ar_grey.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/global.scss';


const theme = {
    ...DefaultTheme,
    grid: {
        ...DefaultTheme.grid,
        colCount: 12,
        gutterWidth: 0
    }
};
export default function LoggedOutHeader() {
    const [isOpen, setIsOpen] = useState(false);

    function close() {
        setIsOpen(false)
    }

    return (
        <ThemeProvider theme={theme}>





                <footer className="footer container-fluid">
                   
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="footer-logo" src={logo}/>
                        </div>
                        <div className="col-md-2 links">
                            <h5>Connect With us</h5>
                            
                            <li><a href="#" >Instagram</a></li>
                            <li><a href="#" >Facebook</a></li>
                            <li><a href="#" >Twitter</a></li>
                        </div>
                        <div className="col-md-2 links">
                            <h5>Get to Know Us</h5>
                            <li><a href="#" >About Us </a></li>
                            <li><a href="#" >Careers</a></li>
                            <li><a href="#" >Press Releases</a></li>
                        </div>
                        <div className="col-md-2 links">
                            <h5>Learn</h5>
                            <li><a href="#" >To Sell </a></li>
                            <li><a href="#" >To Bid</a></li>
                        </div>
                    </div>

                        <p className="copyright">© 2021 ArtBid</p>

                </div>
             


                </footer>












            {/* <Row>
                <Col>
                    <Div
                      d="flex"
                      justify="center">
                        
                    <Text fontFamily="secondary" m="4px" textColor="gray700">Docs</Text>
                    <Text fontFamily="secondary" m="4px" textColor="gray700">ArtBid</Text>
                    <Text fontFamily="secondary" m="4px" textColor="gray700" >About</Text>
                    <Text fontFamily="secondary" m="4px" textColor="gray700">Contact</Text>
                    <Text fontFamily="secondary" m="4px" textColor="gray700">Docs</Text>
                    </Div>
                    <Div
                      d="flex"
                      justify="center">
                        
                    <Text fontFamily="secondary" m="4px" textColor="gray700"></Text>
                    <Text fontFamily="secondary" m="4px" textColor="gray700"> © ArtBid 2021</Text>
                 
                   
                    </Div>
                </Col>
            </Row> */}
        </ThemeProvider>
    );
}