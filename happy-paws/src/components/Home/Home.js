import React from 'react';
import jersery from '../data/icons/jersery-1.jpeg';
import '../style.css';
import { Button } from 'react-bootstrap';


export const Home = () => {
        return (
        <div id="bookingtext">

    <div id="jersery2">
        <img src="{jersery}" alt="chihuahua"/>
    </div>

    <div id="texts"> 
    Need to book your dogs' stay with us?
    </div>
    <div>
    <Button variant="danger" size="lg" active>
    Book Now
  </Button>
    </div>

</div>
        );
}
