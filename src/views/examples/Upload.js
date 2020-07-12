
import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Container,
  Input,
  FormGroup,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

import Hero from "../IndexSections/Hero.js";
import Inputs from "../IndexSections/Inputs.js";
import Buttons from "../IndexSections/Buttons.js";
import Pills from "../IndexSections/Pills.js";
import ReactDatetime from "react-datetime";



class Upload extends React.Component {
 

  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  state = {
    circledNavPills: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

  handleReactDatetimeChange = (who, date) => {
    if (
      this.state.startDate &&
      who === "endDate" &&
      new Date(this.state.startDate._d + "") > new Date(date._d + "")
    ) {
      this.setState({
        startDate: date,
        endDate: date
      });
    } else if (
      this.state.endDate &&
      who === "startDate" &&
      new Date(this.state.endDate._d + "") < new Date(date._d + "")
    ) {
      this.setState({
        startDate: date,
        endDate: date
      });
    } else {
      this.setState({
        [who]: date
      });
    }
  };

  getClassNameReactDatetimeDays = date => {
    if (this.state.startDate && this.state.endDate) {
    }
    if (
      this.state.startDate &&
      this.state.endDate &&
      this.state.startDate._d + "" !== this.state.endDate._d + ""
    ) {
      if (
        new Date(this.state.endDate._d + "") > new Date(date._d + "") &&
        new Date(this.state.startDate._d + "") < new Date(date._d + "")
      ) {
        return " middle-date";
      }
      if (this.state.endDate._d + "" === date._d + "") {
        return " end-date";
      }
      if (this.state.startDate._d + "" === date._d + "") {
        return " start-date";
      }
    }
    return "";
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  toggleNavsDef = (state, index) => {
 
    this.setState({
      [state]: index
    });
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    this.toggleNavsDef("plainTabs", 1)


  }
  constructor(props){
    super(props)
    this.state = {
      featured: null,
      five : null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFiveChange = this.handleFiveChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      featured: URL.createObjectURL(event.target.files[0])
    })
  }
  handleFiveChange(event) {
    this.setState({
      five: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <Hero/>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col className="mt-5 mt-lg-0" lg="6">
                  
                  <div className="nav-wrapper">
                    <Nav
                      className="nav-fill flex-column flex-md-row"
                      id="tabs-icons-text"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.plainTabs === 1}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.plainTabs === 1
                          })}
                          onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                          href="#pablo"
                          role="tab"
                        >
                          Step 1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.plainTabs === 2}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.plainTabs === 2
                          })}
                          onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                          href="#pablo"
                          role="tab"
                        >
                          Step 2
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          aria-selected={this.state.plainTabs === 3}
                          className={classnames("mb-sm-3 mb-md-0", {
                            active: this.state.plainTabs === 3
                          })}
                          onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                          href="#pablo"
                          role="tab"
                        >
                          Step 3
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                  <Card className="shadow">
                    <CardBody>




                      <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                        <TabPane tabId="plainTabs1">
                        <center>
                          <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg" width="200px" height="200px"/><br/>
                          <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg" width="100px" height="100px"/>
                          <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg" width="100px" height="100px"/>
                          <img src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg" width="100px" height="100px"/>
                          <br/><Button
                            className="btn-1 btn-neutral ml-1"
                            color="default"
                            type="button"
                          >
                            Next
                          </Button>
                          </center>
                        </TabPane>







                        <TabPane tabId="plainTabs2">
                        <center>
                            <FormGroup>
                              <Input placeholder="Title" type="text" />
                            </FormGroup>
                            <FormGroup>
                              <Input placeholder="Description" type="text" />
                            </FormGroup>
                            <FormGroup>
                              <Input placeholder="Base Price" type="text" />
                            </FormGroup>
                            <FormGroup>
                              <Input placeholder="Youtube Link" type="text" />
                            </FormGroup>
                            <FormGroup>
                              <Input placeholder="Made In Year" type="text" />
                            </FormGroup>
                  
                          <Button
                            className="btn-1 btn-neutral ml-1"
                            color="default"
                            type="button"
                          >
                            Back
                          </Button>
                          <Button
                            className="btn-1 btn-neutral ml-1"
                            color="default"
                            type="button"
                          >
                            Next
                          </Button>
                          </center>
                        </TabPane>











                        <TabPane tabId="plainTabs3">
                        <center>
                        <Col className="mt-4 mt-md-0" md="8">
                        <small className="d-block text-uppercase font-weight-bold mb-3">
                          Date range
                        </small>
                        <Row>
                          <Col sm={6} xs={12}>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "Start Date"
                                  }}
                                  value={this.state.startDate}
                                  timeFormat={false}
                                  onChange={e =>
                                    this.handleReactDatetimeChange("startDate", e)
                                  }
                                  renderDay={(props, currentDate, selectedDate) => {
                                    let classes = props.className;
                                    classes += this.getClassNameReactDatetimeDays(
                                      currentDate
                                    );
                                    return (
                                      <td {...props} className={classes}>
                                        {currentDate.date()}
                                      </td>
                                    );
                                  }}
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                          <Col sm={6} xs={12}>
                            <FormGroup>
                              <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "End Date"
                                  }}
                                  className="rdtPickerOnRight"
                                  value={this.state.endDate}
                                  timeFormat={false}
                                  onChange={e =>
                                    this.handleReactDatetimeChange("endDate", e)
                                  }
                                  renderDay={(props, currentDate, selectedDate) => {
                                    let classes = props.className;
                                    classes += this.getClassNameReactDatetimeDays(
                                      currentDate
                                    );
                                    return (
                                      <td {...props} className={classes}>
                                        {currentDate.date()}
                                      </td>
                                    );
                                  }}
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col></Row>
                          </Col>
                          <Col>

                            <Nav className="nav-pills-circle" id="tabs_2" pills role="tablist">
                              <NavItem>
                                <NavLink
                                  aria-selected={this.state.circledNavPills === 1}
                                  className={classnames("rounded-circle", {
                                    active: this.state.circledNavPills === 1
                                  })}
                                  onClick={e => this.toggleNavs(e, "circledNavPills", 1)}
                                  href="#pablo"
                                  role="tab"
                                >
                                  <span className="nav-link-icon d-block">
                                    12PM
                                  </span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  aria-selected={this.state.circledNavPills === 2}
                                  className={classnames("rounded-circle", {
                                    active: this.state.circledNavPills === 2
                                  })}
                                  onClick={e => this.toggleNavs(e, "circledNavPills", 2)}
                                  href="#pablo"
                                  role="tab"
                                >
                                  <span className="nav-link-icon d-block">
                                    3PM
                                  </span>
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  aria-selected={this.state.circledNavPills === 3}
                                  className={classnames("rounded-circle", {
                                    active: this.state.circledNavPills === 3
                                  })}
                                  onClick={e => this.toggleNavs(e, "circledNavPills", 3)}
                                  href="#pablo"
                                  role="tab"
                                >
                                  <span className="nav-link-icon d-block">
                                    6PM
                                  </span>
                                </NavLink>
                              </NavItem>
                            </Nav>
                          </Col>
                          <label className="custom-toggle">
                            <input type="checkbox" />
                            <span className="custom-toggle-slider rounded-circle" />
                          </label>
                          <br/>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="customCheck1"
                              type="checkbox"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                              <span>Yes, I have ownership proof</span>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox mb-3">
                            <input
                              className="custom-control-input"
                              id="customCheck2"
                              type="checkbox"
                            />
                            <label className="custom-control-label" htmlFor="customCheck2">
                              <span>I Agree ArtBid's Terms and Conditions</span>
                            </label>
                          </div>
                          <Button
                            className="btn-1 btn-neutral ml-1"
                            color="default"
                            type="button"
                          >
                            Back
                          </Button>
                          <Button
                            className="btn-1 btn-neutral ml-1"
                            color="default"
                            type="button"
                          >
                            Upload
                          </Button>
                          </center>
                        </TabPane>






                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Upload;
