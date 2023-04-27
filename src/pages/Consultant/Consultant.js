/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import axios from "axios";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Swal from "sweetalert2";

const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
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
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("accesstoken");
  const [myEvents, setEvents] = useState([]);
  const [booked, setBooked] = useState([]);
  const [, setLoaders] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    Slotapi();
  }, []);

  const handleClose = () => setShow(false);

  const Slotapi = () => {
    setLoaders(true);

    var config = {
      method: "get",
      url: `${
        BaseUrl.baseurl
      }/user/appointment?user_id=${""}&duration=${""}&booked=${""}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.appointments);
        setEvents(
          response.data.appointments.map((e) => ({
            id: e.id,
            title: e.booked === 1 ? "booked" : e.title,
            start: new Date(e.start_time),
            end: new Date(e.end_time),
          }))
        );
        setLoaders(false);
      })
      .catch(function (error) {
        setLoaders(false);

        console.log(error);
      });
  };

  // const handleSelectSlot = useCallback(
  //   ({ start, end }) => {
  //     const title = window.prompt("New Event Name");
  //     setShow(true);
  //     if (title) {
  //       setEvents((prev) => [...prev, { start, end, title }]);
  //     }
  //   },
  //   [setEvents]
  // );

  const handleSelectEvent = useCallback((event) => {
    setBooked(event);
    if (event.title !== "booked") {
      setShow(true);
    } else {
      Swal.fire({
        title: "Oops",
        text: "Your Selected slot is already book plz select another one",
        icon: "error",
        button: "Ok",
      });
    }
    console.log(event.start)
  }, []);

  async function handleSubmit() {
    console.log(booked);
    setShow(false);
    try {
      const data1 = new FormData()
      data1.append("appointment_id", booked.id);
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
      }
      Slotapi()
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
      <Header />
      <h2 style={{ paddingTop: "50px", color: "#337c75" }}>Book Your Slot</h2>
      <div
        style={{
          paddingTop: "30px",
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingBottom: "80px",
        }}
      >
        <Calendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          // onSelectSlot={handleSelectSlot}
          style={{ height: 500 }}
        />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Slot Booking For Consultation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p>Start time: {booked?.start}</p>
        <p>End time: {booked?.end}</p> */}
       
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="full name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirm Book 
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
};

export default Consultant;
