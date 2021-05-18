import React, { useState } from 'react';
// pull in axios
// import axios from 'axios';
import API from "../../utils/API";
// import cors from "cors";
import {Jumbotron} from "react-bootstrap";
import "../style.css"

export function Reservation() {
        // const [name, setName] = useState("");
        // const [StartDate, setStartDate] = useState('');
        // const [StartDateMax, setStartDateMax] = useState('');
        // const [EndDateMin, setEndDateMin] = useState('');
        // const [EndDate, setEndDate] = useState('');
        // const [UserName, setUserName] = useState('');
        // const [UserEmail, setUserEmail] = useState('');
        // const [UserPets, setUserPets] = useState([]);
        // const [UserRooms, setUserRooms] = useState([]);
        //------------------------------------------------------
        // const [books, setBooks] = useState([])
        const [formObject, setFormObject] = useState({})

        const handleSubmit = (e) => {
                e.preventDefault();
                // console.log("button was clicked");

                // let DataObject = {// object to push to mongo db
                //         name: UserName,
                //         email: UserEmail,
                //         pets: UserPets,
                //         rooms: UserRooms,
                //         startDate: StartDate,
                //         endDate: EndDate,
                // }
                console.log("Here is your form Object: ");
                console.log(formObject);// show object to be sent to DB in log
                // db.create(DataObject);  this is the axios or what ever we need
                API.saveBooking(formObject)
                .then ((res) => {
                        console.log(res.data);
                        let data = res.data;
                        let allBookings = [];
                        allBookings.push(data);
                        console.log(allBookings);

                })
                .catch((error) => {console.log(error)});

                // axios.post('http://localhost:3001/bookings/create',  DataObject)
                        // .then ((res) => {
                        //         console.log(res.data)
                        //     }).catch((error) => {
                        //         console.log(error)
                        //     });
        }

        function handleInputChange(event) {
                const { name, value } = event.target;
                setFormObject({...formObject, [name]: value})
              };

        function pullAllData() {
                //API. Get all bookings

                // API.getBookings()
                // .then ((res) => {
                //         console.log(res.data);
                //         let temp = res.data;
                //         AllBookingData.push(temp);
                //         console.log("AllBookingData: ");
                //         console.log(AllBookingData); 
                // })
                // .catch((error) => {console.log(error)});

                API.getBookings(formObject)
                .then ((res) => {
                        console.log(res.data);
                        let data = res.data;
                        let allBookings = [];
                        allBookings.push(data);
                        console.log(allBookings);
                        allBookings.map((results) => {
                                for (let result in results) {
                                        result = results[0].rooms;
                                        console.log(result)

                                }
                                return results;
                        })

                })
                .catch((error) => {console.log(error)});

                

        }


        return (
                <div>

<div className="container">
      <Jumbotron fluid>
        <h1>Happy Paws Clubhouse</h1>
      </Jumbotron>
    </div>
                        <form onSubmit={handleSubmit}>
                                <label className='NameFormLabel'>Your Name </label>
                                <input type="test" id="UserNameinput" name="name" required onChange={handleInputChange} /><br />

                                <label className='EmailFormLabel'>Your Email </label>
                                <input type="email" id="UserEmailinput" name="email" required onChange={handleInputChange} /><br />

                                <label className='PetsFormLabel'>Your Pets  </label>
                                <input type="array" id="UserPetsinput" name="pets" required onChange={handleInputChange} /><br />

                                <label className='RoomsFormLabel'>Your Rooms </label>
                                <input type="array" id="UserRoomsinput" name="rooms" required onChange={handleInputChange} /><br />

                                <label className='dateFormLabel'>Start Date </label>
                                <input type="date" id="startdateinput" name="startDate" required onChange={handleInputChange} /><br />
                                <label className='dateFormLabel'>End Date</label>
                                <input type="date" id="enddateinput" name="endDate" required onChange={handleInputChange} />
                                <br />
                                <input type="submit" value="Save Booking SUBMIT BUTTON" />
                                {/* <div>{currentDate}</div> */}
                        </form>

                        <button onClick={pullAllData}>Reload</button>


                </div>
        )
}

// export default Reservation