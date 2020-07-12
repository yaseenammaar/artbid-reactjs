import React from "react";

// reactstrap components
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Items extends React.Component {

    constructor(props) {
    super(props);
 
    this.state = {
      data: null,
      isLoaded: false,
    };
  }
 
  componentDidMount() {

    fetch('https://us-central1-artbid-d3199.cloudfunctions.net/webApi/api/getItems')
      .then(response => response.json())
      .then(data => this.setState({ data:data ,isLoaded:true}));
  }
 
  render() {
   const { isLoaded, data } = this.state;
   const items = []

    return (
            
            <div id="columns">
            {items}

            {
              
              isLoaded?
              Object.keys(data).forEach(function(key) {
                console.log(data)
                
                items.push(<Link to={"/product/"+data[key].itemid}><figure><img src={data[key].featuredimage}/><figcaption>{data[key].title}</figcaption></figure></Link>)
              
      
              })
              :console.log('loading ')
              
           
            }
            </div>
          )
        }
      }
export default Items;
