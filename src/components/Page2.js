import React from 'react'
import './Page2.css'

function Page2 () {
    return(
        <div className="page2">
              <div className="page2_left">
                 <p className="page2_heading">YOUR <span style={{color:"#33BBFF"}}>TRUSTED</span>           SOURCE FOR SOFTWARE DEVELOPMENT SINCE <span style={{color:"#33BBFF"}}>2009</span></p>
                 <p style={{color:"#33BBFF"}}>Hire The Best Software Development Teams/s</p>
                 <p>Under 1 Hour</p>
                 <p>on ANY Technology</p>
                 <p>At Extremely Competitive and Affordabel Costs</p>
                 <p>Without the Developer Backing out</p>
                 <button className="page2_btn">SELECT DEVELOPER</button>
              </div>
              <div className="page2_right">
                  <img className="page2_img" src="14.png" alt="" />
              </div>
        </div>
    )
}

export default Page2