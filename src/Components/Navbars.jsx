import React from 'react';
import Logo from "../Assets/Ajay.jpg";
import { Container, Image, Nav, Navbar } from 'react-bootstrap'

function Navbars() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#D3B3B5"}}>
      <Container>
        <Navbar.Brand href="/Home"> <Image
        roundedCircle
              style={{verticalAlign:"center"}}
              src={Logo}
              width="50px"
              height="50px"
              className="d-block w-100"
              alt="Rogo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/Home" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Josyula Ajay Kumar</Nav.Link> 
          </Nav>
          <Nav className="me-aut">
            <Nav.Link href="/Home" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Home</Nav.Link>
            <Nav.Link href="/Skills" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Skills</Nav.Link>
            <Nav.Link href="/About" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>About</Nav.Link>
            <Nav.Link href="/Contact" style={{fontFamily:"monospace",fontSize:"20px",color:"white"}}>Contact</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  )
}

export default Navbars