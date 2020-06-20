
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "../IndexSections/Hero.js";
import Buttons from "../IndexSections/Buttons.js";
import Inputs from "../IndexSections/Inputs.js";
import CustomControls from "../IndexSections/CustomControls.js";
import Menus from "../IndexSections/Menus.js";
import Navbars from "../IndexSections/Navbars.js";
import Tabs from "../IndexSections/Tabs.js";
import Progress from "../IndexSections/Progress.js";
import Pagination from "../IndexSections/Pagination.js";
import Pills from "../IndexSections/Pills.js";
import Labels from "../IndexSections/Labels.js";
import Alerts from "../IndexSections/Alerts.js";
import Typography from "../IndexSections/Typography.js";
import Modals from "../IndexSections/Modals.js";
import Datepicker from "../IndexSections/Datepicker.js";
import TooltipPopover from "../IndexSections/TooltipPopover.js";
import Carousel from "../IndexSections/Carousel.js";
import Icons from "../IndexSections/Icons.js";
import Login from "../IndexSections/Login.js";
import Download from "../IndexSections/Download.js";
import Card from "../IndexSections/Card.js";



class Product extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
          <Container class="v-center">
            <div >
              <main class="card main-grid">
                <div class="card__content">
                  <div class="card__head">
                    <h4>t-shirt with
                      slogan
                    </h4>

                    <h6>Yaseen Ammaar</h6>
                    <hr/>
                    <h5 >Shirt sleeve T-shirt with a round <br /> neckline and a contrast from print.</h5>
                    <p class="card__price">₹44.00<h6 style={{display:'inline'}}> by Yaseen Ammaar</h6></p>
                    <h6>Category : Artifact</h6>
                    <h6>State : Delhi</h6>
                    <h6>Available for delivery : All India</h6>
                  </div>

                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Next Bid"
                      type="text"
                      onFocus={e => this.setState({ searchFocused: true })}
                      onBlur={e => this.setState({ searchFocused: false })}
                    />
                  </InputGroup>
                  <p class="card__text">Next minimum bid : </p>


                  <Button className="btn-1 ml-1" color="success" type="button">
                    BID
                  </Button>
                  <Button className="btn-1 ml-1" color="neutral" type="button">
                    Save
                  </Button>
                  <br/>

                  </div>
                
                <div class="card__image">
                  <img class="cover" src="https://ae01.alicdn.com/kf/HTB1NNbwhf1TBuNjy0Fjq6yjyXXaO/Cosplay-Ancient-Rome-Warrior-Sparta-Antique-Plastic-Helmet-Gold-Helmet-for-Adult-Halloween-Party-Brazil-Carnival.jpg" alt="model"/>
                </div>
              </main>
              </div>
              <br/><br/>
              </Container>
          </main>

        <CardsFooter />
      </>
    );
  }
}

export default Product;
