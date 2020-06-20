/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          
          <Container>
            <Row className="row-grid align-items-center my-md">
              
              
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <Link to="#">
                    ArtBid
                  </Link>|
                  <Link to="#">
                     Stwpd Makes
                  </Link>
                  . 
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                 
                  <NavItem>
                    <Link
                      to="/about"
                    >
                      <NavLink>
                        About Us
                      </NavLink>

                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/privacy-policy"
                    >
                    <NavLink>

                      Privacy Policy
                      </NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Copyright
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
