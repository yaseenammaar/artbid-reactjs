
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

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



class About extends React.Component {
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
          <Container>
          <h1>About</h1>
            <p>
              Hello! Welcome to Artbid.co , India's best eCommerce platform with bid feature anywhere on the internet. Here, you will find thousands of artists/sellers who put up their colossal variety of commodities stacked up at our shelves, ranging from all type of art-forms to antiques and even things that don’t have market value.<br/>

              This platform is launched by Stwpd Makes, initially focusing to elevate small/indie businesses to a national level. Artbid was made to help artists of all forms to put value to their work, and that’s its reason to exist!<br/>
              We promise to provide people with the best top-notch brands, agreeable prices and an easy way of selling and buying things that you are looking for.
              We assure our customers safety and security during their dealings on our platform. This public bidding provision will help you make the right decision just as swiftly as safely it will happen. This feature will give you a plus point over online products as you will be able to choose from a number of bidders, giving you independence from online fixed prices.<br/>
              We are striving to make bidding comfortable for both are bidders and sellers. Here you can grab exciting products at beatable prices. And it will also help its sellers to make their perfect findings in no time with just a few click from their phones!<br/>

              So happy browsing! We hope that people will understand our motives behind building this site and try to help us achieve those ends and bring this nascent initiative to its greatest heights, because EVERYTHING IS AN ART!<br/>
            </p>
            </Container>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default About;
