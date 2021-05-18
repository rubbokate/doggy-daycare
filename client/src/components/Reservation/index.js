import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Jumbotron } from "react-bootstrap";
import "./style.css";

let dateformat = require("dateformat");
let now = new Date();
let tomorrow = now.setDate(now.getDate() + 1);

export function Reservation() {
        
  const [StartDate, setStartDate] = useState("");
  const [StartDateMax, setStartDateMax] = useState("");
  const [EndDateMin, setEndDateMin] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [UserPets, setUserPets] = useState('');
  const [UserRooms, setUserRooms] = useState('');

  const [RequestConfirmation, setRequestConfirmation] = useState("");
  const [ReturnStartDate, setReturnStartDate] = useState("");
  const [ReturnEndDate, setReturnEndDate] = useState("");
  const [ReturnUserName, setReturnUserName] = useState("");
  const [ReturnUserEmail, setReturnUserEmail] = useState("");
  const [ReturnUserPets, setReturnUserPets] = useState("");
  const [ReturnUserRooms, setReturnUserRooms] = useState("");

  let StartDateMin = dateformat(tomorrow, "isoDate");

  let AllBookingData = []; // not a state controled variable so it does NOT cause a loop when used in UseEffect.

  const handleSubmit = (e) => {
    e.preventDefault();

    let DataObject = {
      // object to push to mongo db
      name: UserName,
      email: UserEmail,
      pets: UserPets,
      rooms: UserRooms,
      startDate: StartDate,
      endDate: EndDate
    };

    API.saveBooking(DataObject) //formObject
      .then((res) => {
        setRequestConfirmation("Your Request is Successfull!");
        setReturnUserName("Your Name: " + res.data.name);
        setReturnUserEmail("Your Email: " + res.data.email);
        setReturnUserPets("Pet Names: " + res.data.pets);
        setReturnUserRooms("Qty of rooms requested: " + res.data.rooms);
        setReturnStartDate("Check in: " + res.data.startDate.substring(0, 10));
        setReturnEndDate("Check out: " + res.data.endDate.substring(0, 10));

        setUserName("");
        setUserEmail("");
        setUserPets("");
        setUserRooms("");
        setStartDateMax("");
        setStartDate("");
        setEndDate('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function pullAllData() {

    API.getBookings()
      .then((res) => {
        let temp = res.data;
        AllBookingData.push(temp);
        let L = AllBookingData.length;

        for (let i = 0; i < L; i++) {
          for (let j = 0; j < AllBookingData[i].length; j++) {}
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
        <label className="FormLabel">Your Name </label>
        <input
          className="FormInput"
          type="text"
          id="UserNameinput"
          name="UserName"
          value={UserName}
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />

        <label className="FormLabel">Your Email </label>
        <input
          className="FormInput"
          type="email"
          id="UserEmailinput"
          name="UserEmail"
          value={UserEmail}
          required
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <br />

        <label className="FormLabel">Your Pets Name </label>
        <input
          className="FormInput"
          type="text"
          id="UserPetsinput"
          name="UserPets"
          value={UserPets}
          required
          onChange={(e) => {
            setUserPets(e.target.value);
          }}
        />
        <br />

        <label className="FormLabel"># of Rooms </label>
        <input
          className="FormInput"
          type="number"
          id="UserRoomsinput"
          name="UserRooms"
          value={UserRooms}
          min={1}
          required
          onChange={(e) => {
            setUserRooms(e.target.value);
          }}
        />
        <br />

        <label className="FormLabel">Start Date </label>
        <input
          className="FormInput"
          type="date"
          id="startdateinput"
          name="startDate"
          value={StartDate}
          min={StartDateMin}
          max={StartDateMax}
          required
          onChange={(e) => {
            setStartDate(e.target.value);
            setEndDateMin(e.target.value);
          }}
        />
        <br />

        <label className="FormLabel">End Date </label>
        <input
          className="FormInput"
          type="date"
          id="enddateinput"
          name="EndDate"
          value={EndDate}
          min={EndDateMin}
          required
          onChange={(e) => {
            setEndDate(e.target.value);
            setStartDateMax(e.target.value);
          }}
        />
        <br />
        <input className="FormLabel" type="submit" value="SUBMIT REQUEST" />
      </form>
      <div className="ReturnRequest">
        <div>{RequestConfirmation}</div>
        <div>{ReturnUserName}</div>
        <div>{ReturnUserEmail}</div>
        <div>{ReturnUserPets}</div>
        <div>{ReturnUserRooms}</div>
        <div>{ReturnStartDate}</div>
        <div>{ReturnEndDate}</div>
      </div>
    </div>
  );
}
