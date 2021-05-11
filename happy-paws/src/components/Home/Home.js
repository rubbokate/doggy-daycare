import React from 'react';
// import jersery from '../data/icons/jersery-1.jpeg';
import '../style.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap'
import Pupcake from '../data/icons/pupcake-1.jpeg';


export const Home = () => {
  return (
    <div>
      <div className="card-deck">
        <div class="row mb-8">
          <Card id="ctp" className="col-sm-6">
            <Card.Img variant="top" src={Pupcake} />
            <Card.Body>
              <Card.Title id="pawery">The Pawery</Card.Title>
              <Card.Text>
                Get some yummy homemade goodies from the shop!
      </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="row mb-8">
          <Card id="dc" className="col-sm-6">
            <Card.Img variant="top" src={Pupcake} />
            <Card.Body>
              <Card.Title id="daycard">Daycare</Card.Title>
              <Card.Text>
                A fun place for your dog to go while you are away!
      </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>


      <div id="bookingtext">

        <div id="jersery2">
          <img src="{jersery}" alt="chihuahua" />
        </div>

        <div id="texts">
          Need to book your dogs' stay with us?
    </div>
        <div>
          <Button href='/book' variant="danger" size="lg" active>
            Book Now
  </Button>
        </div>

      </div>
    </div>
  );
}
