import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import CourseDetail from "../pages/CoureDetails/CourseDetail";
import Contact from "../pages/Contact/Contact";
import Courses from "../pages/Courses/Courses";
import Playlist from "../pages/Playlist/Playlist";
import Subscription from "../pages/Subscription/Subscription";
import VideoLibraryDetail from "../pages/VideoLibraryDetail/VideoLibraryDetail";
import About from "../pages/About/About";
import Consultant from "../pages/Consultant/Consultant";
import Coorperate from "../pages/Corperate/Corperate";


function Rounting() {
  
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/register" element={<Register />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path="/videolibrary" element={<Playlist />} />
      <Route exact path="/subscription" element={<Subscription />} />
      <Route exact path="/consultant" element={<Consultant />} />

      <Route exact path="/corperate" element={<Coorperate/>}/>

     

      <Route
        exact
        path="/coursedetail/:id"
        element={
            <CourseDetail />
        }
      />
      <Route
        exact
        path="/videolibrarydetail/:id"
        element={
            <VideoLibraryDetail />
        }
      />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}
export default Rounting;
