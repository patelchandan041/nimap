import React from 'react'
import './Page5.css'
import Page5comp from './Page5comp'

function Page5 () {
    return(
        <div className="page5">
            <p className="page5_heading">OUR SERVICES</p>
            <p>Our Dedicated Services to Skyrocket Your Business</p>
            <div className="page5_container">
                <Page5comp img="https://www.freepnglogos.com/uploads/mobile-phone-logo-icon-32.png" text="Mobile App Developement" />
                <Page5comp img="https://www.freepnglogos.com/uploads/camera-logo-png/frontal-reflex-camera-technology-icons-19.png" text="Website Developement" />
                <Page5comp  img="https://www.freepnglogos.com/uploads/mobile-phone-logo-icon-32.png" text="Enterprise Solution" />
                <Page5comp img="https://www.freepnglogos.com/uploads/camera-logo-png/frontal-reflex-camera-technology-icons-19.png" text="Software Development" />
                <Page5comp img="https://www.freepnglogos.com/uploads/mobile-phone-logo-icon-32.png" text="Digital Marketing"  />
                <Page5comp img="https://www.freepnglogos.com/uploads/camera-logo-png/frontal-reflex-camera-technology-icons-19.png" text="Custom SOftware Development" />
                <Page5comp  img="https://www.freepnglogos.com/uploads/mobile-phone-logo-icon-32.png" text="Contracts & PartenerShip" />
                <Page5comp img="https://www.freepnglogos.com/uploads/camera-logo-png/frontal-reflex-camera-technology-icons-19.png" text="Customization & Maintenance" />
            </div>
        </div>
    )
}

export default Page5