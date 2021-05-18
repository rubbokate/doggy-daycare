import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// pull in axios
// import axios from 'axios';
import API from "../../utils/API";
// import cors from "cors";

import './style.css'

let dateformat = require("dateformat");
let now = new Date();
let tomorrow = now.setDate(now.getDate() + 1);

import {Jumbotron} from "react-bootstrap";



export function Reservation() {
        // const [name, setName] = useState("");
        const [StartDate, setStartDate] = useState('');
        // const [StartDateMin, setStartDateMin] = useState('');
        const [StartDateMax, setStartDateMax] = useState('');
        const [EndDateMin, setEndDateMin] = useState('');
        const [EndDate, setEndDate] = useState('');
        const [UserName, setUserName] = useState('');
        const [UserEmail, setUserEmail] = useState('');
        const [UserPets, setUserPets] = useState([]);
        const [UserRooms, setUserRooms] = useState([]);

        const [RequestConfirmation, setRequestConfirmation] = useState('');
        const [ReturnStartDate, setReturnStartDate] = useState('');
        const [ReturnEndDate, setReturnEndDate] = useState('');
        const [ReturnUserName, setReturnUserName] = useState('');
        const [ReturnUserEmail, setReturnUserEmail] = useState('');
        const [ReturnUserPets, setReturnUserPets] = useState('');
        const [ReturnUserRooms, setReturnUserRooms] = useState('');

        const [IsVisible, setIsVisible] = useState('');
        

        const divStyle = {
                visibility: IsVisible
        };

        let StartDateMin = dateformat(tomorrow, "isoDate");
        // let today = dateformat(now, "isoDate");
        // let TempStartDateMin = new Date();
        // console.log('StartDateMin' +TempStartDateMin);
        // let TempYear = TempStartDateMin.getFullYear();
        // let TempMonth = TempStartDateMin.getMonth();
        // let TempDay = TempStartDateMin.getDate();
        // StartDateMin = new Date(TempYear, TempMonth, TempDay);

        // console.log(TempYear);
        // console.log(TempMonth);
        // console.log(TempDay);
        // console.log(today);
        // console.log(StartDateMin);
        //------------------------------------------------------
        // const [books, setBooks] = useState([])
        // const [formObject, setFormObject] = useState({})

        // array of rooms available, calculated from AllBookingData, from today to the last end date, with the Date and # of rooms in each element object. 
        // let DailyAvailability = [];

        // local array to store all of the db objects in. 
        let AllBookingData = [];// not a state controled variable so it does NOT cause a loop when used in UseEffect. 

        const handleSubmit = (e) => {
                e.preventDefault();
                // console.log("button was clicked");

                let DataObject = {// object to push to mongo db
                        name: UserName,
                        email: UserEmail,
                        pets: UserPets,
                        rooms: UserRooms,
                        startDate: StartDate,
                        endDate: EndDate,
                }
                // console.log("Here is your form Object: ");
                // console.log(formObject);// show object to be sent to DB in log
                // db.create(DataObject);  this is the axios or what ever we need

                API.saveBooking(DataObject)//formObject
                        .then((res) => {
                                setIsVisible('visible');
                                console.log(res.data);
                                setRequestConfirmation("Your Request is Successfull!");
                                setReturnUserName("Your Name: " + res.data.name);
                                setReturnUserEmail("Your Email: " + res.data.email);
                                setReturnUserPets("Pet Names: " + res.data.pets);
                                setReturnUserRooms("Qty of rooms requested: " + res.data.rooms);
                                setReturnStartDate("Check in: " + res.data.startDate.substring(0, 10));
                                setReturnEndDate("Check out: " + res.data.endDate.substring(0, 10));
                        })
                        .catch((error) => { console.log(error) });


                // axios.post('http://localhost:3001/bookings/create',  DataObject)
                // .then ((res) => {
                //         console.log(res.data)
                //     }).catch((error) => {
                //         console.log(error)
                //     });

                console.log("StartDate: " + StartDate);
        }

        // function handleInputChange(event) {
        //         const { name, value } = event.target;
        //         setFormObject({ ...formObject, [name]: value })
        // };

        // Function dump date into calendar.

        // function calcDaysBetween(FirstDate, SecondDate) {
        //         let LargerDate = moment(FirstDate);
        //         // console.log(LargerDate);
        //         let SmallerDate = moment(SecondDate);
        //         // console.log(SmallerDate);
        //         let tempDiff = LargerDate.diff(SmallerDate, 'days');
        //         // let tempDiff = LargerDate-SmallerDate;
        //         return tempDiff;
        // }

        // function addDays(date, days2add) {
        //         console.log("Date before adding " + days2add + " days to");
        //         let tempDate = moment();
        //         // console.log(tempDate);
        //         tempDate = moment().add(1, 'days');
        //         // tempDate.add(days2add, 'days');
        //         // console.log("After adding " + days2add);
        //         // console.log(tempDate);
        //         // console.log(date);
        // }

        // function buildDailyArray(arrayLength) {
        //         let tempDate = moment().format();
        //         let tempArray = [];
        //         for (let i = 0; i < arrayLength; i++) {
        //                 // console.log('tempArray' + tempDate);
        //                 tempArray.push({ calDate: tempDate.toDate(), Arooms: 50 });
        //                 tempDate = tempDate.clone().add(1, 'd');
        //         }
        //         return tempArray;
        // }

        // function CalcAvailability(dbBookingData) {
        //         let StartDate1 = moment().format();

        //         let L = dbBookingData[0].length;
        //         // let tempDate = StartDate1;

        //         DailyAvailability = buildDailyArray(L);
        //         console.log("L: " + L);
        //         console.log("DailyAvailability");
        //         console.log(DailyAvailability);

        //         // for(let s=0; s<L; s++){
        //         //         DailyAvailability.push({date: tempDate, numRoom: 50});
        //         //         tempDate = addDays(tempDate, 1);
        //         // }

        //         for (let i = 0; i < L; i++) {
        //                 for (let j = 0; j < dbBookingData[i].length; j++) {
        //                         // console.log("start Date");
        //                         // console.log(dbBookingData[i][j].startDate);

        //                         if (dbBookingData[i][j].startDate < StartDate1) {
        //                                 console.log("Smaller");

        //                         } else if (dbBookingData[i][j].startDate > StartDate1) {
        //                                 console.log("larger");
        //                                 // let NumberDaysBetween = calcDaysBetween(dbBookingData[i][j].endDate, dbBookingData[i][j].startDate);
        //                                 // console.log("Number of Days between" + NumberDaysBetween);

        //                         } else {
        //                                 console.log("default");
        //                         }
        //                 }
        //         }
        // }

        function pullAllData() {
                //API. Get all bookings

                API.getBookings()
                        .then((res) => {
                                // console.log(res.data);
                                let temp = res.data;
                                AllBookingData.push(temp);
                                // console.log("AllBookingData: ");
                                // let tempLenght = AllBookingData.length;
                                // console.log(AllBookingData);
                                // console.table(AllBookingData);
                                let L = AllBookingData.length;

                                for (let i = 0; i < L; i++) {
                                        for (let j = 0; j < AllBookingData[i].length; j++) {
                                                // console.log(AllBookingData[i][j]);
                                        }
                                }
                                // console.log("Allbookingdata length: " + AllBookingData[0].length);
                                // CalcAvailability(AllBookingData);
                        })
                        .catch((error) => { console.log(error) });

                //dump data into calendare
                // AllBookingData = [];// put all booking data into this variable.
                // console.log("AllBookingData: ");
                // console.log(AllBookingData);
        }

        useEffect(() => {
                pullAllData();
        });

        return (
                <div>

<div className="container">
      <Jumbotron fluid>
        <h1>Happy Paws Clubhouse</h1>
      </Jumbotron>
    </div>
                        <form onSubmit={handleSubmit}>
                        <h1>Request Your Stay Today!</h1>
                                <label className='FormLabel'>Your Name </label>
                                <input className='FormInput' type="text" id="UserNameinput" name="UserName" required onChange={(e) => { setUserName(e.target.value) }} /><br />

                                <label className='FormLabel'>Your Email </label>
                                <input className='FormInput' type="email" id="UserEmailinput" name="UserEmail" required onChange={(e) => { setUserEmail(e.target.value) }} /><br />

                                <label className='FormLabel'>Your Pets Name </label>
                                <input className='FormInput' type="text" id="UserPetsinput" name="UserPets" required onChange={(e) => { setUserPets(e.target.value) }} /><br />

                                <label className='FormLabel'># of Rooms </label>
                                <input className='FormInput' type="number" id="UserRoomsinput" name="UserRooms" min={1} required onChange={(e) => { setUserRooms(e.target.value) }} /><br />

                                <label className='FormLabel'>Start Date </label>
                                <input className='FormInput' type="date" id="startdateinput" name="startDate" min={StartDateMin} max={StartDateMax} required onChange={(e) => { setStartDate(e.target.value); setEndDateMin(e.target.value) }} /><br />

                                <label className='FormLabel'>End Date </label>
                                <input className='FormInput' type="date" id="enddateinput" name="EndDate" min={EndDateMin} required onChange={(e) => { setEndDate(e.target.value); setStartDateMax(e.target.value) }} />
                                <br />
                                <input className='FormLabel' type="submit" value="SUBMIT REQUEST" />

                                {/* <label className='FormLabel'>Your Name</label>
                                <input className='FormInput' type="test" id="UserNameinput" name="name" required onChange={handleInputChange} /><br />

                                <label className='FormLabel'>Your Email</label>
                                <input className='FormInput' type="email" id="UserEmailinput" name="email" required onChange={handleInputChange} /><br />

                                <label className='FormLabel'>Your Pets</label>
                                <input className='FormInput' type="array" id="UserPetsinput" name="pets" required onChange={handleInputChange} /><br />

                                <label className='FormLabel'>Qty of Rooms Needed </label>
                                <input className='FormInput' type="array" id="UserRoomsinput" name="rooms" max={StartDateMax} required onChange={handleInputChange} /><br />

                                <label className='FormLabel'>Start Date </label>
                                <input className='FormInput' type="date" id="startdateinput" name="startDate" required onChange={handleInputChange} /><br />

                                <label className='FormLabel'>End Date</label>
                                <input className='FormInput' type="date" id="enddateinput" name="endDate" required onChange={handleInputChange} />
                                <br />
                                <input type="submit" value="SUBMIT BOOKING REQUEST" /> */}
                                {/* <div>{currentDate}</div> */}


                        </form>
                        <div className='ReturnRequest'>
                                <div>{RequestConfirmation}</div>
                                <div>{ReturnUserName}</div>
                                <div>{ReturnUserEmail}</div>
                                <div>{ReturnUserPets}</div>
                                <div>{ReturnUserRooms}</div>
                                <div>{ReturnStartDate}</div>
                                <div>{ReturnEndDate}</div>


                        </div>

                        {/* <button  className='FormLabel' onClick={pullAllData}>pull all data </button> */}

                </div>
        )
}

// export default Reservation