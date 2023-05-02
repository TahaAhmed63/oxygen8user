<<<<<<< HEAD
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import Form from "react-bootstrap/Form";
=======
import React, { useCallback, useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import Form from "react-bootstrap/Form";
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
<<<<<<< HEAD
=======
import { ColorRing } from "react-loader-spinner";
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import axios from "axios";
<<<<<<< HEAD
=======
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
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
<<<<<<< HEAD
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

=======

const Consultant = () => {
  const token = localStorage.getItem("accesstoken");
  const [myEvents, setEvents] = useState([]);
  const [booked, setBooked] = useState([]);
  const [loader, setLoaders] = useState(false);
  const [show, setShow] = useState(false);

  const SignupSchema = Yup.object().shape({
    first_name: Yup.string("please enter a first name").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
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
<<<<<<< HEAD
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
=======
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
    };

    axios(config)
      .then(function (response) {
<<<<<<< HEAD
        console.log(response.data.appointments);
=======
        console.log(response.data);
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
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
      });
  };

<<<<<<< HEAD
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

=======
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
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
<<<<<<< HEAD
    console.log(event.start)
  }, []);

  async function handleSubmit() {
    console.log(booked);
    setShow(false);
    try {
      const data1 = new FormData()
      data1.append("appointment_id", booked.id);
       data1.append("user_id" ,user.id);
=======
  }, []);

  async function handleSubmit(i) {
    setShow(false);
    setLoaders(true)
    try {
      const data1 = new FormData();
      data1.append("appointment_id", booked.id);
      data1.append("email", i.email);
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
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
      console.log(response);
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
<<<<<<< HEAD
      Slotapi()
=======
      Slotapi();
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "Oops",
        text: e.response.data.message,
        icon: "error",
        button: "Ok",
      });
      setLoaders(false);
    }
  }

  return (
    <>
      <Header />
      <h2 style={{ paddingTop: "50px", color: "#337c75" }}>Book Your Slot</h2>
<<<<<<< HEAD
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
=======
      {loader ? (
       <div  style={{
        paddingTop: "230px",
        paddingBottom: "230px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
         <ColorRing
          visible={true}
          height="40"
          width="40"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#337c75", "#337c75", "#337c75", "#337c75", "#337c75"]}
        />
       </div>
      ) : (
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
            style={{ height: 700 }}
          />
        </div>
      )}
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Slot Booking For Consultation</Modal.Title>
        </Modal.Header>
<<<<<<< HEAD
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
=======
        <Formik
          initialValues={{
            first_name: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <div>
              <Form>
                <Modal.Body>
                  {/* <p>Start time: {booked?.start}</p>
        <p>End time: {booked?.end}</p> */}

                  <div className="mb-3" controlId="exampleForm.ControlInput1">
                    <label>User name</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="first_name"
                      placeholder="Full name"
                    />
                    {errors.first_name && touched.first_name ? (
                      <div className="text-danger">{errors.first_name}</div>
                    ) : null}
                  </div>
                  <div className="mb-3" controlId="exampleForm.ControlInput1">
                    {" "}
                    <label>User email</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="e-mail address"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={handleClose}
                    style={{ border: "none" }}
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    // onClick={handleSubmit}
                    style={{ backgroundColor: "#337c75", border: "none" }}
                  >
                    Confirm Book
                  </Button>
                </Modal.Footer>
              </Form>
            </div>
          )}
        </Formik>
>>>>>>> d276a404a585b3e3a0adbf18055a82bc61a5bfbb
      </Modal>
      <Footer />
    </>
  );
};

export default Consultant;
