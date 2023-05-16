import React from 'react'
import Footers from './Footers'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <>
   
    <div class="heroimg" style={{ backgroundImage:" url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}}>
    
      <Container>
      <Row style={{color: "white"}}>
      <h2 style={{letterSpacing: "2px",marginTop:"15px"}}>ABOUT</h2>
      <p style={{marginTop: "1%"}}>Let me tell you something about myself</p>
      </Row>
      </Container>
    
      
    </div>

    <div class="container" style={{marginTop:"2%"}}>
       <div class="row">
             <Col md={7}>
              <h6 class="sizehead">
                Who are you?
              </h6>
              <p class="sizepara">
              I am Ajay kumar Josyula. Innovative Front-end React Developer with 3+ years of
          comprehensive experience. Adept at
          maintaining & debugging code, performing end-to-end
          testing, and delivering the products with an allotted time.
              </p>
              <h6 class="sizehead" style={{paddingTop: "3vh"}}>Why are you a frontend developer ?</h6>
           <p class="sizepara">
           I believe that the main reason is that front-end development satisfies my need for
          creativity.
          It enabled me to easily put my ideas into digital form and get results back really quick.
          I still remember the first time I created an HTML page and opened it in the browser.
          A whole new world of possibilities appeared before my eyes.
           </p>
           <h6 class="sizehead" style={{paddingTop: "3vh"}}>What is your developer philosiphy ?</h6>
           <h6 style={{fontSize: "17px"}}>Minimalism</h6>
             <p class="sizepara">
             From decluttering to software development, minimalism has had a widespread impact on many
          areas of our lives. While the term “minimalism” was first coined to describe a post-WWII Western art movement,
          the term found itself applied in various contexts where there was a benefit to doing more with less.
             </p>
             </Col>
             <Col md={4}>
        <img  className="img-fluid"  src="https://i.ibb.co/p2QwPvZ/Work-7.jpg" width="400" height="400" alt="work-7" />
      </Col>
       </div>
    </div>

      {/* Hobbies */}
<div style={{marginTop:"2vh",marginBottom:"10vh" }}>
  <div className="container">
    <hr />
    <div className="section" style={{marginTop:"5vh"}}>
       <h2 style={{fontStyle:"italic"}}>Hobbies</h2>
       <div className="row" style={{paddingTop:"4vh",paddingLeft:"5vh"}}>
            <div className="col">
              <h5>Listening Music</h5>
              <div className="row" style={{paddingTop:"2vh"}}>
                <div className="col" style={{fontSize:"16px",paddingTop:"4vh"}}>
               <i class="fa fa-quote-right" aria-hidden="true"></i>
               <p>Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of
                  your horn</p><i class="fa fa-quote-right"></i>
                </div>
                <div className="col">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2moAjqTcnrvY5DKYal3Fg7xjTA_OVduJhrg&usqp=CAU"
                  alt="music" width="220" height="180" />
                </div>
              </div>
            </div>

            <div className="col">
            <div class="row" style={{paddingTop:"2vh"}}> 
              <h5>Reading Books</h5>
              <div class="col" style={{fontSize:"16px",paddingTop: "4vh"}}>
                <i class="fa fa-quote-left"></i>
                <p>Wherever I am, If I've a book with me, I have a place I can go and be happy.</p><i
                  class="fa fa-quote-right"></i>
              </div>
              <div class="col">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhpUW79DzQNcQh7cZ3qNmFg9fMwH6_D-5Pg&usqp=CAU"
                  alt="book" width="220" height="180" />
              </div>
              </div>
            </div>

       </div>
       {/* <!--      Second section --> */}
        <div class="row" style={{paddingTop: "10vh",paddingLeft: "5vh"}}>
          {/* <!--      Traveling        --> */}
          <div class="col">
            <h5>Traveling</h5>
            <div class="row" style={{paddingTop: "2vh"}}>
              <div class="col" style={{fontSize:"16px",paddingTop: "4vh"}}>
                <i class="fa fa-quote-left"></i>
                <p>Fill your life with Adventures, not things have stories to tell not stuff to show.<br/> Jobs fill your
                  pockets, adventures fill your soul.</p><i class="fa fa-quote-right"></i>
              </div>
              <div class="col">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVxhinUXLae8Dm5ZmRRUqD5UOV1-BZKSAAPQ&usqp=CAU"
                  alt="travel" width="220" height="180" />
              </div>
            </div>
          </div>
          {/* <!--      Playing        --> */}
          <div class="col">
            <h5>Playing Sudoku</h5>
            <div class="row" style={{paddingTop: "2vh"}}>
              <div class="col" style={{fontSize:"16px",paddingTop: "4vh"}}>
                <i class="fa fa-quote-left"></i>
                <p>Life is like sudoku, When you're arrange right side Left side will mess, But after fully arranged
                  It's beautiful.</p><i class="fa fa-quote-right"></i>
              </div>
              <div class="col">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKt2wtYESaUWhE3jTGm5xG5FdVWOevFQDzDA&usqp=CAU"
                  alt="sudoku" width="220" height="180"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>

<Footers/>
    </>
  )
}

export default About