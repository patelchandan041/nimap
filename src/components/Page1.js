import React from 'react'
import './Page1.css'

function Page1 () {
    return(
        <div>
        <div className="header">
       <img src="https://nimapinfotech.com/wp-content/uploads/2019/01/nimap-logo.png" alt="" />
        <nav className="navbar">
            <p2>SERVICES+</p2>
            <p2>HIRE DEVELOPERS+</p2>
            <p2>PROJECT MANAGEMENT</p2>
            <p2>OUR SOLUTION+</p2>
            <p2>COMPANY</p2>
        </nav>
        </div>
        <div className="body">
            <div className="body_left">
              <img className="body_leftimage" src="22.png" alt="" />
            </div>
            <div className="body_mid">
              <h2>TAKE A SMART <span style={{color:"#33BBFF"}}>DIGITAL</span> MOVE</h2>
              <h3 style={{fontWeight:"lighter",marginLeft:"20px"}}>DIGITAL TRANSFORMATION DONE RIGHT 
               DELIVERED ON TIME</h3>
              <div className="hours">
                  <div className="hoursleft">
                      <h1><span style={{color:"#33BBFF"}}>1</span> Hour</h1>
                      <p>Hire Developer on-demand software expert</p>
                  </div>
                  <div class="vl"></div>
                  <div className="hoursright">
                  <h1><span style={{color:"#33BBFF"}}>40</span> Hours</h1>
                      <p>Risk-free trial, on-board onli if satisfied</p>
                  </div>
              </div>
              <small className="mysmall" >SAVE UPTO <span style={{color:"#33BBFF"}}> 40% </span> ON DEVELOPMENT <span style={{color:"#33BBFF"}}> COST & TIME</span></small>
              <button className="btn">TALK TO US</button>
            </div>
            <div className="body_right">
             <img className="body_rightimage" src="19.png" alt="" />
            </div>
        </div>
    </div>
    )
}

export default Page1