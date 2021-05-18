import React from 'react';
// import { Jumbotron } from 'react-bootstrap';
// import bigDog from "../../components/data/icons/bigDog.jpeg";
import backJumbo from "../../components/data/icons/back-jumbo.png";
import { H1 } from "../Daycare/styles";
import "../style.css"




const mainContainer = {
        backgroundImage: `url(${backJumbo})`,
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",


}

const bottomContainer = {
        backgroundImage: `url(${backJumbo})`,
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",

}

const buttonDiv = {
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",
        marginLeft: "35%",
        marginRight: "25%",


}

const changeButtonBackgroundColor = (e) => {

        if (e.target.style.background === "#cbc3e3") {

                return e.target.style.background = "white"
        }
        else {
                return e.target.style.background = "#cbc3e3"
        }

}

// const handleSubmit = (e) => {


// }

export const Board = () => (
        <div>

                {/* <div className="container">
                        <Jumbotron fluid>
                                <h1>Happy Paws Clubhouse</h1>
                        </Jumbotron>
                </div> */}
                <br></br>

                <div id="main-container" style={mainContainer}>

                        {/* <div style={{ marginLeft: "auto", marginRight: "auto" }}> */}
                        <H1><u><h1>Dog Boarding</h1></u>
                                <p>


                                        <span><small>Boarding  your dog at Happy Paws Clubhouse is super easy all you have to do is push the book now button on the home or boarding page. Just like booking a hotel. You can also add fun things to your dogs stay like a delicious bedtime snack or a personal playtime with the coach!</small></span>
                                        <br></br>

                                </p>
                        </H1>

                        <div id="button-div">
                                <button style={buttonDiv} onMouseEnter={changeButtonBackgroundColor} onMouseLeave={changeButtonBackgroundColor}>
                                        Book your dog's stay today!
                        </button>
                        </div>
                        <hr></hr>



                </div>

                {/* ============================ */}







                <br></br>


                <div className="row" style={{ minWidth: '100%' }}>


                        <br></br>
                        <hr></hr>

                </div>

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



                <br></br>


        </div >
)
