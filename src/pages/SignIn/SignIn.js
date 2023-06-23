import Footer from "../../component/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import BaseUrl from "../../component/BaseUrl/BaseUrl";
import {setSession} from '../Utlilities/jwt'
import { useEffect } from "react";
function SignIn() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

 async  function handleSubmit(V) {
   setLoading(true);
   try {
     const response = await axios.post(`${BaseUrl.baseurl}/userLogin`, V);
     setLoading(false);
     const { message, status, token } = response.data;
     if (status === true) {
      localStorage.setItem('user',JSON.stringify(response?.data?.user))
       setLoading(false);
      setSession(token);
       Swal.fire({
         title: "Good job!",
         text: "Login SuccessFully!",
         icon: "success",
         button: "Ok",
       });
       navigate("/")
     } else {
       setLoading(false);
       Swal.fire({
         title: "OOps!",
         text: message,
         icon: "danger",
         button: "O00000k",
       });
      console.log(message)
     }
   } catch (error) {
     setLoading(false);
     // setLoader(false);
     console.log(error?.response?.data?.message);
     Swal.fire({
       title: "Something Went Wrong",
       text: error?.response?.data?.message,
       icon: "error",
       dangerMode: true,
       confirmButtonText: "ok",
     });
   }
 };

  return (
    <div>
      <section className="signup__area po-rel-z1 pt-100 pb-145">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
              <div className="section__title-wrapper text-center mb-55">
                <h2 className="section__title">
                Sign up to access the<br />  Oxygen8 Courses.
                </h2>
                <p>
                Access free content and stay up-to-date{" "}
                
                </p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
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
                          <h5 style={{ textAlign: "left" }}>Email</h5>
                          <div className="sign__input">
                            <Field
                              type="text"
                              name="email"
                              placeholder="e-mail address"
                            />
                            <i className="fal fa-envelope"></i>
                          </div>
                        </div>
                        <div className="sign__input-wrapper mb-10">
                          <h5 style={{ textAlign: "left" }}>Password</h5>
                          <div className="sign__input">
                            <Field
                              type="password"
                              name="password"
                              placeholder="Password"
                            />
                            <i className="fal fa-lock"></i>
                          </div>
                        </div>
                        <div className="sign__action d-sm-flex justify-content-between mb-30">
                          <div className="sign__forgot">
                            <Link>Forgot your password?</Link>
                          </div>
                        </div>
                        <button
                          className="e-btn  w-100"
                          style={{ background: "#337c75" }}
                        >{loading === true ?  
                           <ColorRing
                            //  visible={true}
                             height="40"
                             width="40"
                             ariaLabel="blocks-loading"
                             wrapperStyle={{}}
                             wrapperClass="blocks-wrapper"
                              colors={['#fff','#fff','#fff','#fff','#fff']}
                           />
                            :'Sign In'}
                        </button>
                        <div className="sign__new text-center mt-20">
                          <p>
                            You don't have a account? <Link to="/register">Sign Up</Link>
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
export default SignIn;
