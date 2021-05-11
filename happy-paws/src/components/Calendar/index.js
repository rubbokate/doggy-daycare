import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

function TheCalendar() {
  const [value, onChange] = useState(new Date());
  const [StartDate, setStartDate] = useState('');
  const [StartDateMax, setStartDateMax] = useState('');
  const [EndDateMin, setEndDateMin] = useState('');
  const [EndDate, setEndDate] = useState('');
  const [userEmailInput, setUserEmailInput] = useState('');
  const [userDogNameInput, setUserDogNameInput]  = useState('');
  const [userDogWeightInput, setUserDogWeightInput] = useState('');

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  let formatedCurrentDate = currentYear + '-' + currentMonth + '-' + currentDay;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Start Date: " + StartDate);
    // console.log("End Date Min: " + EndDateMin);
    console.log("End Date: " + EndDate);
    // console.log("Start Date Max: " + StartDateMax);
    // console.log(formatedCurrentDate);
    console.log("user email input: " + userEmailInput );
    console.log("user dog name: " + userDogNameInput);
    console.log("user Dog Weight: " + userDogWeightInput);

    setStartDate('');
    setEndDateMin('');
    setEndDate('');
    setStartDateMax('');
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='userEmailInput'>Enter your email: </label>
        <input type='email' id='UserEmail' required onChange={(e) => setUserEmailInput(e.target.value)}/><br />

        <label className='userDogNameInput'>Enter your Dogs Name: </label>
        <input type='text' id='userDogName' required onChange={(e) => setUserDogNameInput(e.target.value)}/><br />

        <label className='userDogSizeInput'>Enter your Dogs weight: </label>
        <input type='text' id='userDogWeight' required onChange={(e) => setUserDogWeightInput(e.target.value)}/><br />

        <label className='dateFormLabel'>Start Date </label>
        <input type="date" id="startdateinput" name="startDate" max={StartDateMax} required onChange={(e) => { setStartDate(e.target.value); setEndDateMin(e.target.value) }} /><br />

        <label className='dateFormLabel'>End Date</label>
        <input type="date" id="enddateinput" name="EndDate" min={EndDateMin} required onChange={(e) => { setEndDate(e.target.value); setStartDateMax(e.target.value) }} />
        <br />
        <input type="submit" value="Save Booking" /><br />
        {/* <div>{currentDate}</div> */}
      </form>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TheCalendar;