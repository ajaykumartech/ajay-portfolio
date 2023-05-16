import React from 'react'
import Footers from './Footers'
import { Container } from 'react-bootstrap'

function Contact() {
  return (
    <>
    <style>
      {`
       .header {
        position: relative;
        background-image: linear-gradient(60deg, rgba(26, 178, 255, 2) 0%, rgba(153, 102, 255) 100%);
        color: white;
      }
      h1 {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        letter-spacing: 2px;
        font-size: 48px;
      }
  
      p {
        font-family: 'Lato', sans-serif;
        letter-spacing: 1px;
        font-size: 14px;
        color: #333333;
      }

   .logo {
      width: 50px;
      fill: white;
      padding-right: 15px;
      display: inline-block;
      vertical-align: middle;
    }

    .inner-header {
      height: auto;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .flex {
      /*Flexbox for containers*/
      display: flex;
      justify-content: center;
      align-items: center;
    }

      `}
    </style>
    <div class="header">
    <div class="container" style={{padding: "3.8vh 5px"}}>
    <div class="row">
      <div class="col">
        <h1 class="pad">Ajay kumar Josyula</h1>
        <h4 class="pad">Fronted Developer</h4>
      </div>
    </div>
  </div>
{/* <!--                Content before waves            --> */}
<Container>
  <div class="row">
    <h2 style={{paddingBottom:"4vh",paddingTop:"3vh"}}>Address:</h2>
    <div class="col">
      <h3>Home: </h3>
      <address>Josyula Ajay kumar,<br />
        S/o: JosyulaVenkata satya subrahmanyam,<br />
        <span style={{fontSize: "17px"}}>
          D.No: 4-12, Gandikota vari street,<br />
          Undrajavaram, Undrajavaram Mandal,<br />
          East Godavari District,<br />
          Andhra Pradesh, 534331
        </span>
      </address>
    </div>
    <div class="col">
      <h3>Office: </h3>
      <address>Vishesh Country Cache,<br />
        <span style={{fontSize: "17px"}}>
          Opposite HP Petrol bunk, Undrajavaram,
          Undrajavaram Mandal,<br />
          East Godavari District, Andhra Pradesh,<br />
          534216
        </span>
      </address>
    </div>
    <div class="col">
      <h6 style={{paddingTop:"2vh"}}><i class="fa-solid fa-phone"></i> +91 8985990834</h6>
      <h6 style={{paddingTop:"2vh"}}><i class="fa-solid fa-envelope"></i> <a
          href="mailto:ak961421@gmail.com?body=Hi%20Anitha%2C">ak961421@gmail.com</a></h6>
      <h6 style={{paddingTop:"2vh"}}><i class="fa-brands fa-github"></i> <a
          href="https://github.com/ajaykumartech">ajaykumartech</a></h6>
      <a href="http://127.0.0.1:8080/form.html"><button class="btn btn-primary"
          style={{marginTop: "2vh",marginLeft:"2vh",fontSize: "17px"}}>Let's Talk</button></a>
    </div>
  </div>
</Container>

{/* <!--              Waves Containe r            --> */}
<div>

</div>
{/* <!--              Waves end                     --> */}

</div>
    <Footers/>
    </>
  )
}

export default Contact