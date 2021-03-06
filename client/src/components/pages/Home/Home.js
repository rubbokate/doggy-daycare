import React from 'react';
import Pupcake from '../../data/icons/pupcake-1.jpeg';
import Jersery from '../../data/icons/jersery-1.jpeg';
import bloo from "../../data/icons/bloo.jpg";
import copper from "../../data/icons/copper.jpg"
import stroller2 from "../../data/icons/stroller2.jpg";
import watermelon from "../../data/icons/watermelon.jpg"
import { Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
// import { Jumbotron } from 'react-bootstrap';

import '../../style.css';


const leftContainer = {
  backgroundColor: "white",
  borderRadius: "25px",
  border: "solid",
  boxShadow: "10px 10px 5px black",
  floatLeft: "auto",
  maxWidth: "30%",
  height: "400px"
}

const middleContainer = {
  backgroundColor: "white",
  borderRadius: "25px",
  border: "solid",
  boxShadow: "10px 10px 5px black",
  maxWidth: "30%",
  height: "400px"
}

const rightContainer = {
  backgroundColor: "white",
  borderRadius: "25px",
  border: "solid",
  boxShadow: "10px 10px 5px black",
  floatRight: "33%",
  maxWidth: "30%",
  height: "400px"

}




export const Home = () => (

  <div>
    <br></br>
    <div className="card-deck">
   
      <Card style={leftContainer}>
        <Card.Img variant="top" src={Pupcake} style={{ borderRadius: "8% 8% 0 0", maxHeight: "50%", minHeight: "50%" }} />
        <Card.Body>
          <Card.Title id="pawery">The Pawery</Card.Title>
          <Card.Text style={{ textAlign: "center", marginTop: "10%", }}>
            Get some yummy homemade goodies from the shop!
    </Card.Text>
         
        </Card.Body>
      </Card>
      <br></br>

      <hr></hr>

      <Card style={leftContainer}>
        <Card.Img variant="top" src={watermelon} style={{ borderRadius: "8% 8% 0 0", maxHeight: "50%", minHeight: "50%" }} />
        <Card.Body>
          <Card.Title id="daycard">Daycare</Card.Title>
          <Card.Text style={{ textAlign: "center", marginTop: "10%", }}>
            A fun place for your dog to go while you are away!
    </Card.Text>
        
        </Card.Body>
      </Card>

    </div>

    <br></br>

    <div className="row" style={{ backgroundColor: "#4c91ad" }}>
      <div className="col-sm-8">
        <div style={{ backgroundColor: "#4c91ad" }}>
          <div className="row card-body" style={{ marginLeft: "25%", minWidth: "100%", backgroundColor: "#4c91ad", borderRadius: "25%", flex: "1"}}>
            <div className="col-sm-6">
              <h1 className="card-title">Need to book your pets stay with us?</h1>
              <a href="../reservation/" className="btn btn-danger">Book Now!</a>
            </div>
            <Image className="col-sm-6" src={Jersery} alt="chihuahua" style={{ flex: "1", borderRadius: "10%"}} />
          </div>

            </div>
          </div>

        </div>

        <br></br>
        <div className="row" style={{ minWidth: '100%', height: "10%" }}>

          <Card style={leftContainer}>
            <Card.Img variant="top" src={stroller2} style={{ borderRadius: "8% 8% 0 0", maxHeight: "50%", minHeight: "50%" }} />
            <Card.Body>
             
              <Card.Text style={{ textAlign: "center", marginTop: "10%", }}>
                Do you need or want to bring your dog to a place so they can have fun while you work?
    </Card.Text>
        
            </Card.Body>
          </Card>
          <br></br>
          <hr></hr>

          <Card style={middleContainer}>
            <Card.Img variant="top" src={copper} style={{ borderRadius: "8% 8% 0 0", maxHeight: "50%", minHeight: "50%" }} />
            <Card.Body>
           
              <Card.Text style={{ textAlign: "center", marginTop: "10%" }}>
                Do you want to socialize your puppy?
    </Card.Text>
         
            </Card.Body>
          </Card>

          <br></br>
          <hr></hr>

          <Card style={rightContainer}>
            <Card.Img variant="top" src={bloo} style={{ borderRadius: "8% 8% 0 0", maxHeight: "50%" }} />
            <Card.Body>

              <Card.Text style={{ textAlign: "center", marginTop: "10%" }}>
                Are you going on a fun trip and need a place for your dog to stay?
    </Card.Text>
             
            </Card.Body>
          </Card>
          <br></br>
          <hr></hr>
        </div>
        <br></br>


      </div>
)
