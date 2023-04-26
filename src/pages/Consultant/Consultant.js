/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useState,useEffect} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import "react-big-calendar/lib/css/react-big-calendar.css";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import axios from 'axios'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Swal from "sweetalert2";


const locales = {
  'en-US': enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
// const events = [
//   {
//     title: 'My Event',
//     start1: new Date('2023-04-21T13:45:00'),
//     end1: new Date('2023-04-21T14:00')
//   },
//   {
//     title: 'My Event',
//     start: new Date('2023-04-22T15:45:00'),
//     end: new Date('2023-04-22T16:00:00')
//   },
//   {
//     title: 'My Event',
//     start: new Date('2023-04-23T17:00:00'),
//     end: new Date('2023-04-23T18:00:00')
//   }
// ]
const Consultant = () => {

  const user = JSON.parse(localStorage.getItem("user"))
  const token = localStorage.getItem("accesstoken");
console.log(user.id)
  const [myEvents, setEvents] = useState([])
  const [,setLoaders]=useState(false)

  useEffect(()=>{
    Slotapi()
  },[])

  const Slotapi = () => {
    setLoaders(true);

    var config = {
      method: "get",
      url: `${BaseUrl.baseurl}/user/appointment?user_id=${''}&duration=${''}&booked=${''}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.appointments)
        setEvents(response.data.appointments.map(((e)=>({
            id:e.id,
            title: e.booked === 1 ? "booked" : e.title,
            start: new Date(e.start_time),
            end: new Date(e.end_time)
        }))));
        setLoaders(false);
      })
      .catch(function (error) {
        setLoaders(false);

        console.log(error);
      });
  };

const handleSelectSlot = useCallback(
  ({ start, end }) => {
    const title = window.prompt('New Event Name')
    if (title) {
      setEvents((prev) => [...prev, { start, end, title }])
    }
  },
  [setEvents]
)

const handleSelectEvent = useCallback(
  (event) => bookSlot(event),
  []
)

async function bookSlot(e){
    try {
      const data1 = new FormData()
      data1.append("appointment_id", e.id);
      data1.append("user_id" ,user.id);
      var config = {
        method: "post",
        url: `${BaseUrl.baseurl}/user/appointment`,
        data: data1,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios(config);
      console.log(response)
      const { message, status } = response.data;
      if (status === true) {
        setLoaders(false);
        Swal.fire({
          title: "Good job!",
          text: message,
          icon: "success",
          button: "Ok",
        });
      } else {
        setLoaders(false);
      // alert("")
      }
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "Oops",
        text: e.response.data.message,
        icon: "error",
        button: "Ok",
      });
    }

}

  return (
    <>
    <Header/>
    <h2 style={{paddingTop:'50px',color:'#337c75'}}>Book Your Slot</h2>
    <div style={{paddingTop:'30px',paddingRight:'50px',paddingLeft:'50px',paddingBottom:'80px'}}>
  <Calendar
    localizer={localizer}
    events={myEvents}
    startAccessor="start"
    endAccessor="end"
    onSelectEvent={handleSelectEvent}
    onSelectSlot={handleSelectSlot}
    style={{ height: 500 }}
  />
</div>
<Footer/>
  </>
  )
}

export default Consultant