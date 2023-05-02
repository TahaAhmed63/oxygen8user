import React, { useCallback, useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { ColorRing } from "react-loader-spinner";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
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
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
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
  }, []);

  async function handleSubmit(i) {
    setShow(false);
    setLoaders(true)
    try {
      const data1 = new FormData();
      data1.append("appointment_id", booked.id);
      data1.append("email", i.email);
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
      Slotapi();
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Slot Booking For Consultation</Modal.Title>
        </Modal.Header>
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
      </Modal>
      <Footer />
    </>
  );
};

export default Consultant;
