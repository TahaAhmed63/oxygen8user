import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import myLogo from "./../../Assets/AboutImages/Oxygen icon.png"
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accesstoken");
  // let user = localStorage.getItem("user");
  //const currentuser = JSON.parse(user);
  

  function Logout() {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <Navbar style={{ backgroundColor: "transparent" }} expand="lg">
      <Container>
        <Link to="/">
          <img src={myLogo} alt="" width="100" height="auto" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ textAlign: "center",zindex:9999 }}>
          <Nav className="mx-auto">
          <Link
              to="/"
              style={{
                fontSize: "18px",
                color: "#337c75",
                fontWeight: "500",
                paddingRight: "25px",
                textDecoration:"none"
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                fontSize: "18px",
                color: "#337c75",
                fontWeight: "500",
                paddingRight: "25px",
                textDecoration:"none"
              }}
            >
              About
            </Link>
            <Link
              to="/corperate"
              style={{
                fontSize: "18px",
                color: "#337c75",
                fontWeight: "500",
                paddingRight: "25px",
                textDecoration:"none"
              }}
            >
              Corporate
            </Link>
            <Link
              to="/courses"
              style={{
                fontSize: "18px",
                color: "#337c75",
                fontWeight: "500",
                paddingRight: "25px",
                textDecoration:"none"
              }}
            >
              Courses
            </Link>
          
            <Link
              to="/consultant"
              style={{
                fontSize: "18px",
                color: "#337c75",
                fontWeight: "500",
                paddingRight: "25px",
                textDecoration:"none"
              }}
            >
              Book
            </Link>
     
            <Link
              to="/contact"
              style={{
                fontSize: "18px",
                color: "#337c75",
                fontWeight: "500",
                paddingRight: "25px",
                textDecoration:"none"
              }}
            >
              Contact
            </Link>
            {/* <div class="dropdown"> */}
              {/* <button class="dropbtn"> */}
                <Link to="/videolibrary"
                style={{
                  fontSize: "18px",
                  color: "#337c75",
                  fontWeight: "500",
                  paddingRight: "25px",
                  textDecoration:"none"

                }}
                > Library</Link>
                {/* <i class="fa fa-caret-down"></i>
              </button> */}
              {/* <div class="dropdown-content">
                <Link to="/subscription">Subscription</Link>
              </div> */}
            {/* </div> */}
          </Nav>

          {/* {token && (
            <Link
              to="#"
              style={{
             //fontSize: "18px",
                color: "#337c75",
                fontWeight: "500",
                paddingRight: "25px",
                textDecoration:"none"
              }}
            >
              // {currentuser?.email}
            </Link>
          )} */}
          <br/>
          {token ? (
            <Button
              onClick={() => {
                Logout();
              }}
              variant="primary"
              style={{
                backgroundColor: "#337c75",
                border: "none",
                padding: "12px",
              }}
            >
              Log out
            </Button>
          ) : (
            <>
              {" "}
              <Button
                onClick={() => {
                  navigate("/register");
                }}
                variant="primary"
                style={{
                  backgroundColor: "#337c75",
                  border: "none",
                  padding: "12px",
                }}
                className="mr-5"
              >
                Sign Up
              </Button>
              <Button
                onClick={() => {
                  navigate("/signin");
                }}
                variant="primary"
                style={{
                  backgroundColor: "#337c75",
                  border: "none",
                  padding: "12px",
                }}
              >
                Sign In
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
