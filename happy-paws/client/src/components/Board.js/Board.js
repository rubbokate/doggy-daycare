import React from 'react';

const mainContainer = {
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",


}

const bottomContainer = {
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",

}

const buttonDiv = {
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black"

}

const changeButtonBackgroundColor = (e) => {

        if (e.target.style.background === "green") {

                return e.target.style.background = "white"
        }
        else {
                return e.target.style.background = "green"
        }
        
}

// const handleSubmit = (e) => {


// }

export const Board = () => (
        <div>
        <br></br>

                <div id="main-container" style={mainContainer}>

                        <h1>Dog Boarding</h1>
                        <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor
                                at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites of the word in classical literature, discovered the undoubtable
                                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                                BC. This book is a treatise on the theory of ethics, very popular during the
                                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                                comes from a line in section 1.10.32.
                        </p>
                        <div id="button-div">
                                <button style={buttonDiv} onMouseEnter={changeButtonBackgroundColor} onMouseLeave={changeButtonBackgroundColor}>
                                        Book your dog's stay today!
                        </button>
                        </div>
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
                        <button style={buttonDiv} onMouseEnter={changeButtonBackgroundColor} onMouseLeave={changeButtonBackgroundColor}>Make a reservation</button>
<hr></hr>

                </div>

                <br></br>


        </div>
)
