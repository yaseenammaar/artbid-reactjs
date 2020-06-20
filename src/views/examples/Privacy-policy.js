
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



class Privacypolicy extends React.Component {
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
          <h1>Privacy Policy</h1>
            <p>

            You may cancel your account at anytime by emailing stwpd.official@gmail.com<br/>
            Once your account is cancelled all of your Content will be immediately deleted from the Service. Since deletion of all data is final please be sure that you do in fact want to cancel your account before doing so.<br/>
            If you cancel the Service in the middle of the month, you will receive one final invoice via email. Once that invoice has been paid you will not be charged again.<br/>
            Fraud: Without limiting any other remedies, ArtBid may suspend or terminate your account if we suspect that you (by conviction, settlement, insurance or escrow investigation, or otherwise) have engaged in fraudulent activity in connection with the Site.<br/>
            Note: no refunds are offered, even if a plan is canceled mid-month.<br/><br/><br/>



            ArtBid can suspend, cancel or terminate the account of the end user of any store<br/>
            Without limiting its other remedies, ArtBid may immediately issue a warning, temporarily suspend, indefinitely suspend or immediately terminate this Agreement and Your access to the Store(s) if You fail to comply with any terms specified herein. ArtBid may take such actions without providing You prior notice and at its sole discretion.<br/><br/>

            ArtBid reserves the right, in its sole and exclusive discretion, to suspend or terminate Services to You upon receipt of any third party complaint that You have engaged in any activity that violates this Agreement, which may otherwise subject ArtBid to liability for any reason, or that may cause ArtBid to incur legal fees or other expenses.<br/><br/><br/>

            Upon termination, those provisions of this Agreement that expressly or by their nature survive will continue in full force and effect.
            </p>
            </Container>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Privacypolicy;
