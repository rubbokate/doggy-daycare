import React from 'react';
 import Pupcake from '../data/icons/pupcake-1.jpeg';
 import Jersery from '../data/icons/jersery-1.jpeg';
//import bigDog from '../data/icons/bigDog.jpeg';
import {Card} from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap';
import '../style.css'
import {CardDeck} from 'react-bootstrap'



export const Home = () => (
        <div>
                <div className="container">
          <Jumbotron fluid>
            <h1>Happy Paws Clubhouse</h1>
          </Jumbotron>
        </div>
        <br></br>
        <CardDeck style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div class="row mb-8">
          <Card style={{flex: 1}} id="ctp" className="col-sm-6">
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
          <Card style={{flex: 1}} id="dc" className="col-sm-6">
            <Card.Img variant="top" src={Pupcake} />
            <Card.Body>
              <Card.Title id="daycard">Daycare</Card.Title>
              <Card.Text>
                A fun place for your dog to go while you are away!
    </Card.Text>
            </Card.Body>
          </Card>
        </div>
        </CardDeck>
<br></br>
        
        <div class="row">
            <div class="col-sm-8">
                <div class="card">
                    <div class="row card-body">
                       <div class="col-sm-6">
                          <h1 class="card-title">Need to book your pets stay with us?</h1>
                           <a href="../Reservation/index.js" class="btn btn-danger">Book Now!</a>
                        </div>
                        <img class="col-sm-6" src={Jersery} alt="chihuahua"/>
                    </div>
                </div>
            </div>
        
        </div>

        

                <br></br>



        </div>
)
