import React from 'react';
// import Pupcake from '../data/icons/pupcake-1.jpeg';
// import Jersery from '../data/icons/jersery-1.jpeg';
import bigDog from '../data/icons/bigDog.jpeg';

const mainContainer = {
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",


}

const huahuaStyle = {

        minWidth: "100%",
        backgroundColor: "white",
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",
}

const buttonDiv = {
        borderRadius: "25px",
        border: "solid",
        boxShadow: "10px 10px 5px black",

}

const changeButtonBackgroundColor = (e) => {

        if (e.target.style.background === "green") {

                return e.target.style.background = "white"
        }
        else {
                return e.target.style.background = "green"
        }
        
}

export const Home = () => (
        <div>
                {/* <div style={huahuaStyle}>
        <img id="jersery" alt="chihuahua in a blanket" src={Jersery}/>
        </div> */}
                {/* <img id="pupcake" alt="pupcake" src={Pupcake}/> */}

                <br></br>

                <div style={huahuaStyle}>
                        <img id="bigDog" alt="big dog" src={bigDog} style={huahuaStyle} />
                </div>
                <br></br>

                <div style={mainContainer}>

                        <h1>Welcome to Happy Happy Paw Paw</h1>

                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                </div>

                <br></br>

                <div id="button-div" >

                <button style={buttonDiv} onMouseEnter={changeButtonBackgroundColor} onMouseLeave={changeButtonBackgroundColor}>Book your dog's stay today!</button>

                </div>

                <br></br>


        </div>
)
