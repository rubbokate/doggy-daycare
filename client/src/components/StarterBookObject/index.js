import React, { useState, useEffect } from 'react';
import db from '../../models/index';
import bookings from '../../controllers/bookingController'

export const Reservation = () => {
    const [StartDate, setStartDate] = useState('');
    const [StartDateMax, setStartDateMax] = useState('');
    const [EndDateMin, setEndDateMin] = useState('');
    const [EndDate, setEndDate] = useState('');
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPets, setUserPets] = useState([]);
    const [UserRooms, setUserRooms] = useState([]);

    let currentDate =new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    let formatedCurrentDate = currentYear + '-' + currentMonth +'-' + currentDay;
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Start Date: " + StartDate);
        console.log("End Date Min: " + EndDateMin);
        console.log("End Date: " + EndDate);
        console.log("Start Date Max: " + StartDateMax);
        console.log(formatedCurrentDate);
        let DataObject = {
                name: UserName,
                email: UserEmail,
                pets: UserPets,
                rooms: UserRooms,
                startDate: StartDate,
                endDate: EndDate
        }
        // db.create(DataObject);
    }

    useEffect(() => {
        console.log('use effect ran')
    },[]);// dependancy array this controls when use effects runs. always runs first render, then for each item in array. empty array means once only. 


    return (
        <form onSubmit={handleSubmit}>
            <label className='NameFormLabel'>Your Name </label>
            <input type="test" id="UserNameinput" name="UserName" required onChange={(e) => {setUserName(e.target.value)}}/><br/>

            <label className='EmailFormLabel'>Your Email </label>
            <input type="email" id="UserEmailinput" name="UserEmail" required onChange={(e) => {setUserEmail(e.target.value)}}/><br/>

            <label className='PetsFormLabel'>Your Pets  </label>
            <input type="array" id="UserPetsinput" name="UserPets" required onChange={(e) => {setUserPets(e.target.value)}}/><br/>

            <label className='RoomsFormLabel'>Your Rooms </label>
            <input type="array" id="UserRoomsinput" name="UserRooms" required onChange={(e) => {setUserRooms(e.target.value)}}/><br/>

            <label className='dateFormLabel'>Start Date </label>
            <input type="date" id="startdateinput" name="startDate" max={StartDateMax} required onChange={(e) => {setStartDate(e.target.value); setEndDateMin(e.target.value)}}/><br/>
            <label className='dateFormLabel'>End Date</label>   
            <input type="date" id="enddateinput" name="EndDate" min={EndDateMin} required onChange={(e) => {setEndDate(e.target.value); setStartDateMax(e.target.value)}}/>
            <br/>
            <input type="submit" value="Save Booking SUBMIT BUTTON"/>
            {/* <div>{currentDate}</div> */}
        </form>
    );
}

// export default Reservation;