import React from'react'
import './Page7.css'
import Page7comp from './Page7comp';

function Page7 (){
    return(
        <div className="page7">
              <div  className="page7top">
                  <p className="page7top_heading">DO YOU HAVE PROJECT IN MIND</p>
                  <p>Let's start friendly conversation</p>
                  <button className="page7_btn">GET A FREE QUOTE</button>
              </div>
              <div className="page7bottom">
                       <p className="page7bottomheading">
                           INDUSTRIES WE CATER TO
                       </p>
                       <p style={{fontSize:"17px"}}>We Serve And Cater To A Wide Variety Of Industries Our Solution Focus On Providing No Matter What Industry You Work In</p>
                       <div className="page7_row">
                           <Page7comp img="7.png" text="BAFSI & Fintech" />
                           <Page7comp img="8.png" text="Healthcare & Pharmaceuticals" />
                           <Page7comp img="9.png" text="Media & EnterTainment" />
                           <Page7comp img="10.png" text="Ed.Tech" />
                           <Page7comp img="11.png" text="Goverment" />
                       </div>
              </div>
        </div>
    )
}

export default Page7;