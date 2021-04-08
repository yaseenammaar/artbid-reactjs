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
            <Row>
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
            </Row>
        </ThemeProvider>
    );
}