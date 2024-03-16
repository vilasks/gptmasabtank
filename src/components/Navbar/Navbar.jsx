import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/masabtankgpt.jpg';
import './index.css';
function MyNavbar(){

    return <>
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Navbar.Brand href='/'>
                <img style={{width: '120px', height: '105px'}} src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto fw-bold'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href='/login'>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>

}

export default MyNavbar