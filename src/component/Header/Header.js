import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import myLogo from './Logooxygen.png';
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';
function Header() {
const navigate = useNavigate()

  return (
    <Navbar style={{backgroundColor:"transparent"}} expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={myLogo} alt='' width='80' height='70'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{textAlign:'center'}}>
          <Nav className="mx-auto"  >
            <Link to='/' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Home</Link>
            <Link to='/courses' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Courses</Link>
            <Link to='/videolibrary' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Video Library</Link>
            <Link to='/about' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>About</Link>
            <Link to='/contact' style={{fontSize:'18px',color:'#337c75',fontWeight:'500',paddingRight:'25px'}}>Contact</Link>
           
          </Nav>
          <Button onClick={()=>{navigate('/register')}} variant="primary" style={{backgroundColor:"#337c75",border:'none',padding:'12px'}} className='mr-5'>Sign Up</Button>{'  '}
          <Button onClick={()=>{navigate('/signin')}} variant="primary" style={{backgroundColor:"#337c75",border:'none',padding:'12px'}}>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;