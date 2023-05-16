import React from 'react'
import Footers from './Footers'
import { Container, Image } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import react from "../Assets/reaclogo.webp";
import next from "../Assets/nextjs.png";
import testing from "../Assets/jest.png";
import bann from "../Assets/res.jpg";

function Home() {
  return (
    <div>
    <Container>
    <div class="row toppic">
    </div>
    <div class="row" style={{marginTop:"2vh"}}>
      <h3>Hello! I'm Ajay kumar Josyula</h3>
    </div>
    <div class="row intro">
      <p>Innovative Front-end React Developer with 3+ years of
        comprehensive experience.</p>
    </div>
    <div style={{fontSize: "15px"}}>
      <Link href="visheshcountrycache.tech">
        <p>View Projects<br /><i class="fa-solid fa-chevron-down"></i></p>
      </Link>
    </div>
    </Container>
    <div>
    {/* <!--   Image   section   --> */}
    <div class="row" style={{marginTop: "4vh"}}>
      <img src={bann} alt="qqs"/>
    </div>
  </div>


  <div class="container" style={{paddingTop:" 3vh",marginBottom:"50px"}}>
    <div class="row">
      <div class="col" style={{marginTop:"4vh"}}>
        <h3 style={{margin: "4vh 0px",backgroundColor:"#f3fef3",display:"block"}}>Technologies Known</h3>
        <div class="row" style={{color:"#ffffff",marginBottom: "4vh"}}>
          <div class="col-1" style={{margin:"2vh"}}>
            <Image
            roundedCircle src="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png" alt="c"
              width="70" />
          </div>
          <div class="col" style={{marginLeft: "4vh"}}>
            <Image
            roundedCircle
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLBdEK6na4-tAJ0ttxeeD7Ve9WNoZZ4bBbA&usqp=CAU"
              alt="structures" width="140" />
          </div>
         
          <div class="col" style={{margin:"2vh"}}>
            <Image
            roundedCircle src="https://cdn-icons-png.flaticon.com/512/919/919827.png" alt="html" width="90" />
          </div>
          <div class="col" style={{margin:"2vh"}}>
            <Image
            roundedCircle src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" alt="css" width="90" />
          </div>
          <div class="col" style={{margin:"2vh"}}>
            <Image
            roundedCircle src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="script" width="80" />
          </div>
        </div>

        <div class="row" style={{color:"#ffffff",margin: "0px 5vh"}}>
        
          <div class="col" style={{margin:"2vh",marginLeft:" -3vh!important",margintop: "0px!important"}}>
            <Image
            roundedCircle
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2pDTmbr0_0yzWrUibHLGllm9ZMeqegsauhExsj9d5SiRbloC0OzTZFvINZcKEZNBjUY&usqp=CAU"
              alt="typescript" width="150" />
          </div>
          <div class="col" style={{margin:"2vh",marginLeft: "0px!important"}}>
            <Image
            roundedCircle
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
              alt="node" width="120" />
          </div>
          <div class="col" style={{margin:"2vh",marginLeft: "0px!important"}}>
            <Image
              roundedCircle
              src={react}
              alt="node" width="120" />
          </div>
          <div class="col" style={{margin:"2vh",marginLeft: "0px!important"}}>
            <Image
              roundedCircle
              src={next}
              alt="node" width="120" />
          </div>
        </div>

         <h3 style={{marginTop:" 4vh",backgroundColor:"#f3fef3",display:"block"}}>Tools</h3>
          <div class="row" style={{color:"#ffffff",margin: "3vh"}}>
            <div class="col">
              <img src="https://www.photoshopbuzz.com/wp-content/uploads/create-logo-wordpress-style4.png" width="180" alt="..."/>
            </div>
            <div class="col" style={{marginTop: "1vh"}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/1280px-HubSpot_Logo.svg.png" width="150" alt="..." />
            </div>
            <div class="col">
              <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Emblem.png" width="120"  alt="..." />
            </div>
            <div class="col">
              <img src={testing} width="120"  alt="..." />
            </div>
          </div>

          <h3 style={{marginTop: "4vh",backgroundColor:"#f3fef3",display:"block"}}>IDE's (Integrated Development Environment)</h3>
          <div class="row" style={{color:"#ffffff",margin: "3vh"}}>
            <div class="col">
              <img src="https://learn.microsoft.com/en-us/windows/images/visualstudio.png" width="180" height="80" alt="..."  />
            </div>
            <div class="col" style={{marginTop: "1vh"}}>
              <img src="https://w7.pngwing.com/pngs/525/34/png-transparent-notepad-source-code-editor-text-editor-html-binder-note-text-logo-c.png"  width="180" height="80" alt="..." />
            </div>
          </div> 
       
     
    </div>
  
  </div>
  </div>


        <Footers/>
    </div>
  )
}

export default Home