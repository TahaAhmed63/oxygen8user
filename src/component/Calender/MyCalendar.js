import React, {useCallback, useState,useEffect} from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import "react-big-calendar/lib/css/react-big-calendar.css";
import BaseUrl from "../BaseUrl/BaseUrl";
import axios from 'axios'


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
const events = [
  {
    title: 'My Event',
    start: new Date('2023-04-19T13:45:00'),
    end: new Date('2023-04-19T14:00:00')
  },
  {
    title: 'My Event',
    start: new Date('2023-04-19T15:45:00'),
    end: new Date('2023-04-19T16:00:00')
  },
  {
    title: 'My Event',
    start: new Date('2023-04-19T17:00:00'),
    end: new Date('2023-04-19T18:00:00')
  }
]

const MyCalendar = () => {
  
  const [myEvents, setEvents] = useState()
  const [,setLoaders]=useState(false)

  useEffect(()=>{
    Slotapi()
  },[])

  const Slotapi = () => {
    setLoaders(true);

    const token = localStorage.getItem("accesstoken");
    var config = {
      method: "get",
      url: `${BaseUrl.baseurl}/admin/appointment`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setEvents(response.data.appointments);
        console.log('users--->',response);
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
  (event) => window.alert(event.title),
  []
)

  return (
    <>
      <div>
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
    </>
  )
}

export default MyCalendar