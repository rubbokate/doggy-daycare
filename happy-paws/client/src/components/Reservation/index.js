import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"; 
import event from './event'
const localizer = momentLocalizer(moment);
const myEventsList = [() => {
  console.log('myEventsList')
}]
const MyCalendar = props => (
  <div>
    <Calendar 
      event={event}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, backgroundColor: "white" }}
    />
  </div>
)
  

export const Reservation = () => (
        <div>
<MyCalendar/>
        </div>
)
export default MyCalendar;