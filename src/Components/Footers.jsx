import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Footers() {
  return (
   
        <Navbar  style={{backgroundColor:"#D3B3B5",padding: "1vh 0px 0.3px 0px",textAlign:"center"}} fixed="bottom">
       <Container>
       <p style={{fontSize: "16px",textAlign:"center",justifyContent:"center"}}>Designed and developed by Ajay kumar J  © 2022</p>

       </Container>
       
        </Navbar>
         
   
  )
}

export default Footers