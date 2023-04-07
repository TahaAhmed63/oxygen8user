import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import BaseUrl from "../../component/BaseUrl/BaseUrl";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    first_name: Yup.string("please enter a first name").required("Required"),
    last_name: Yup.string("please enter a last name").required("Required"),
    phone_number: Yup.string()
      .required("Required")
      .min(11, "Phone number  is too short - should be 11 chars minimum."),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum."),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Must be same your password"
    ),
  });

  async function handleSubmit(i) {
    //  var config = {
    //    method: "post",
    //    url: `${BaseUrl.baseurl}/register`,
    //    headers: {
    //      Accept: "applicatin/json",
    //    },
    //  };
    //  try {
    //    const result = await axios(config,v);
    //    console.log(result);
    //  } catch (e) {
    //    console.log(e.message);
    //  }
    setLoading(true);
    try {
      const response = await axios.post(`${BaseUrl.baseurl}/register`, i);
      // const response = await axios.post('https://oxygenapi.dev-hi.xyz/api/register',i);
      setLoading(false);
      const { message, status } = response.data;
      if (status === true) {
        setLoading(false);
        Swal.fire({
          title: "Good job!",
          text: " User Sign up SuccessFully!",
          icon: "success",
          button: "Ok",
        });
        navigate("/signin");
      } else {
        setLoading(false);
        Swal.fire({
          title: "OOps!",
          text: message,
          icon: "danger",
          button: "Ok",
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error?.response?.message);
      Swal.fire({
        title: "Something Went Wrong",
        text: error?.message,
        icon: "error",
        dangerMode: true,
        confirmButtonText: "ok",
      });
    }
  }

  return (
    <div>
      <Header />
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="sign__shape">
          <img className="man-1" src="assets/img/icon/sign/man-3.png" alt="" />
          <img
            className="man-2 man-22"
            src="assets/img/icon/sign/man-2.png"
            alt=""
          />
          <img
            className="circle"
            src="assets/img/icon/sign/circle.png"
            alt=""
          />
          <img
            className="zigzag"
            src="assets/img/icon/sign/zigzag.png"
            alt=""
          />
          <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
          <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
          <img
            className="flower"
            src="assets/img/icon/sign/flower.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="section__title-wrapper text-center mb-55">
                <h2 className="section__title">
                  Create a free <br /> Account
                </h2>
                <p>I'm a subhead that goes with a story.</p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              phone_number: "",
              email: "",
              password: "",
              password_confirmation: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              handleSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <div className="row">
                <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                  <div className="sign__wrapper white-bg">
                    <Form>
                      <div className="sign__form">
                        <div>
                          <div className="sign__input-wrapper mb-25">
                            <h5 style={{ textAlign: "left" }}>First Name</h5>
                            <div className="sign__input">
                              <Field
                                type="text"
                                name="first_name"
                                placeholder="Full name"
                              />
                              <i className="fal fa-user"></i>
                            </div>
                            {errors.first_name && touched.first_name ? (
                              <div className="text-danger">
                                {errors.first_name}
                              </div>
                            ) : null}
                          </div>
                          <div className="sign__input-wrapper mb-25">
                            <h5 style={{ textAlign: "left" }}>Last Name</h5>
                            <div className="sign__input">
                              <Field
                                type="text"
                                name="last_name"
                                placeholder="Last name"
                              />
                              <i className="fal fa-user"></i>
                            </div>
                            {errors.last_name && touched.last_name ? (
                              <div className="text-danger">
                                {errors.last_name}
                              </div>
                            ) : null}
                          </div>
                          <div className="sign__input-wrapper mb-25">
                            <h5 style={{ textAlign: "left" }}>Email</h5>
                            <div className="sign__input">
                              <Field
                                type="text"
                                name="email"
                                placeholder="e-mail address"
                              />
                              <i className="fal fa-envelope"></i>
                            </div>
                            {errors.email && touched.email ? (
                              <div className="text-danger">{errors.email}</div>
                            ) : null}
                          </div>

                          <div className="sign__input-wrapper mb-25">
                            <h5 style={{ textAlign: "left" }}>Phone number</h5>
                            <div className="sign__input">
                              <Field
                                type="number"
                                name="phone_number"
                                placeholder="Phone number"
                              />
                              <i className="fal fa-phone"></i>
                            </div>
                            {errors.phone_number && touched.phone_number ? (
                              <div className="text-danger">
                                {errors.phone_number}
                              </div>
                            ) : null}
                          </div>
                          <div className="sign__input-wrapper mb-25">
                            <h5 style={{ textAlign: "left" }}>Password</h5>
                            <div className="sign__input">
                              <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                              />
                              <i className="fal fa-lock"></i>
                            </div>
                            {errors.password && touched.password ? (
                              <div className="text-danger">
                                {errors.password}
                              </div>
                            ) : null}
                          </div>
                          <div className="sign__input-wrapper mb-25">
                            <h5 style={{ textAlign: "left" }}>
                              Confirm Password
                            </h5>
                            <div className="sign__input">
                              <Field
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                              />
                              <i className="fal fa-lock"></i>
                            </div>
                            {errors.password_confirmation &&
                            touched.password_confirmation ? (
                              <div className="text-danger">
                                {errors.password_confirmation}
                              </div>
                            ) : null}
                          </div>

                          <button
                            className="e-btn w-100"
                            style={{ background: "#337c75" }}
                            type="submit"
                          >
                            {" "}
                            <span></span>
                            {loading === true ? (
                             <ColorRing
                             visible={true}
                             height="80"
                             width="80"
                             ariaLabel="blocks-loading"
                             wrapperStyle={{}}
                             wrapperClass="blocks-wrapper"
                             colors={['#fff']}
                           />
                            ) : (
                              "Sign Up"
                            )}
                          </button>
                          <div className="sign__new text-center mt-20">
                            <p>
                              Already in Markit ?{" "}
                              <Link to="/signin"> Sign In</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Register;
