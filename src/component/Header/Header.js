import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myLogo from './Logooxygen.png';
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';
function Header() {

const navigate = useNavigate()
const token = localStorage.getItem("accesstoken");
let user=localStorage.getItem('user')
const currentuser = JSON.parse(user)

function Logout(){
  localStorage.removeItem("accesstoken");
  localStorage.removeItem("user");
  navigate('/')
}

  return (
    <Navbar style={{backgroundColor:"transparent"}} expand="lg">
      <Container>
        <Link to='/'><img src={myLogo} alt='' width='80' height='70'/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{textAlign:'center'}}>
          <Nav className="mx-auto"  >
            <Link to='/' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Home</Link>
            <Link to='/courses' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Courses</Link>
            <Link to='/videolibrary' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Video Library</Link>
            <Link to='/about' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>About</Link>
            <Link to='/consultant' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Consultant</Link>           
            <Link to='/contact' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Contact</Link>           
          </Nav>
          {token && <Link to='/contact' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>{currentuser?.email}</Link>}
           {token? <Button onClick={()=>{Logout()}} variant="primary" style={{backgroundColor:"#337c75",border:'none',padding:'12px'}}>Log out</Button> :  <> <Button onClick={()=>{navigate('/register')}} variant="primary" style={{backgroundColor:"#337c75",border:'none',padding:'12px'}} className='mr-5'>Sign Up</Button>

          <Button onClick={()=>{navigate('/signin')}} variant="primary" style={{backgroundColor:"#337c75",border:'none',padding:'12px'}}>Sign In</Button></>}
                   

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;