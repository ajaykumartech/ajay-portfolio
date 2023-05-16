import React from 'react';
import Logo from "../Assets/Ajay.jpg";
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" fixed="top" style={{padding:"0px",margin:"0px 0px 0px 0px"}}>
    <Container >
      <Navbar.Brand href="/Home"> <Image
              style={{verticalAlign:"center"}}
              src={Logo}
              width="50px"
              height="50px"
              className="d-inline-block align-top"
              alt="Rogo"
            /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
      <Link to="/Home" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Ajay kumar Josyula</Link>
      </Navbar.Collapse>
      <Navbar.Collapse id="responsive-navbar-nav">
      
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Link to="/Home" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Home</Link>
          <Link to="/Skills" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Skills</Link>
          <Link to="/About" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>About</Link>
          <Link to="/Contact" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Contact</Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>
    </>
    
  )
}

export default Navbars