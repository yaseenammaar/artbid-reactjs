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
                        
                    <Text>Docs</Text>
                    <Text>ArtBid</Text>
                    <Text>About</Text>
                    <Text>Contact</Text>
                    </Div>
                </Col>
            </Row>
        </ThemeProvider>
    );
}