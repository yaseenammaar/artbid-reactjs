import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

class Card extends React.Component {
  render() {
    return (
          <Col className="mt-5 mt-sm-0 col-md-3" sm="3" xs="6">
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={require("assets/img/theme/team-1-800x800.jpg")}
                style={{  width: "180px", height:"300px", 'object-fit':"cover"}}
              />
            </Col>
          )
        }
      }
export default Card;
