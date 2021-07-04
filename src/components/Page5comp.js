import React from 'react'
import './Page5comp.css'

function Page5comp ({img,text}) {
    return(
        <div className="page5comp">
            <div className="page5compdiv">
            <img style={{height:"71px",}} src={img} alt="" />
            <p>{text}</p>
            </div>
        </div>
    )
}

export default Page5comp