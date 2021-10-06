
import React from 'react';

import { H1 } from './styles';


// import {HighLighted} from "./divStyle";


// import { Jumbotron} from 'react-bootstrap';
import backJumbo from "../../data/icons/back-jumbo.png";
// import dog1 from "../data/icons/dog1.jpg";
import "../../style.css";





const mainContainer = {
        backgroundImage: `url(${backJumbo})`,
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black"
}

const bottomContainer = {
        backgroundImage: `url(${backJumbo})`,
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black"
}

// const buttonDiv = {
//         borderRadius: "25px",
//         border: "solid",
//         boxShadow: "10px 10px 5px black"

// }

// const changeButtonBackgroundColor = (e) => {

//         if (e.target.style.background === "green") {

//                 return e.target.style.background = "white"
//         }
//         else {
//                 return e.target.style.background = "green"
//         }

// }

export const Daycare = () => (

        <div>

                {/* <div className="container">
      <Jumbotron fluid>
        <h1>Happy Paws Clubhouse</h1>
      </Jumbotron>
    </div> */}

                <br></br>

                <div id="main-container" style={mainContainer}>


                        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                                <H1><u><h1>Daycare</h1></u>
                                        <small><p>Daycare is a great way to get your dog’s energy out while you are at work.</p></small>
                                </H1>

                        </div>



                        {/* 
                <ScribbleText>
                
                        Daycare

                </ScribbleText> */}




                        <hr></hr>

                        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                                <H1><u><h1>Daycare Prices & Packages</h1></u>
                                        <p>


                                                {/* <u><span style={{color: "green"}}><small><i>Discounts apply to families with multiple pets.</i></small></span></u> */}


                                                <li>Whole Day - $25</li>
                                                <li>Half Day - $15</li>

                                                <br></br>

                                                *** Doggie Daycare Package Deals ***

                                                <li>10 Days $200 – SAVE $50</li>
                                                <li>20 Days $400 – SAVE $100</li>
                                                <li>30 Days $600 – SAVE $150</li>

                                        </p>
                                </H1>


                        </div>


                        <hr></hr>
                </div>

                <br></br>



                <br></br>
                <hr></hr>


                <br></br>


                <div id="bottom-info" style={bottomContainer}>
                        <h2>Hours</h2>
                        <hr></hr>
                        <p>Monday - Friday: 7am - 7pm</p>
                        <p>Saturday - Sunday: 9a - 6pm</p>
                        <h2>Location</h2>
                        <hr></hr>
                        <p>12345 Elm Street</p>
                        <p>Kruegerville, MI 40000</p>
                        <p>Get Directions ????(May keep this, may not)</p>
                        <h2>Contact</h2>
                        <hr></hr>
                        <p>phone: (586) 555-5555)</p>
                        <p>email: happypaws@happymail.com</p>
                        {/* <button style={buttonDiv} onMouseEnter={changeButtonBackgroundColor} onMouseLeave={changeButtonBackgroundColor}>Make a reservation</button> */}

                        <hr></hr>
                </div>

                <br></br>


        </div>
)