import React from 'react'
import './Page7comp.css'

function Page7comp ({img,text}) {
    return(
        <div className="page7comp">
           <img className="page7comp_img" src={img} alt="" />
           <p>{text}</p>
        </div>
    )
}

export default Page7comp