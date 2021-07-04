import React from 'react'
import "./Page9.css"

function Page9 () {
    return(
   <div className="page9">
       <div className="page9_top">
           <div className="page9left">
            <p className="page9topheading">FAQ</p>
            <p>Most popular questions</p>
            <hr />
            <p>1.What are the steops to hire developer</p>
            <hr />
            <p>2.Why Hire Dedicted developer</p>
            <hr />
            <p>3.How can I moniter and anylyze developer performances</p>
            <hr />
            <p>4.Can I hire Developers for permanent</p>
           </div>
           <div className="page9right">
              <p className="page9topheading">GET QUOTE</p>
              <input className="page9_inputs" type="text" name="" id="" placeholder="Name" />
              <input className="page9_inputs" type="email" name="" id="" placeholder="Email Id" />
              <input className="page9_inputs" type="phone" name="" id="" placeholder="Phone" />
              <textarea className="page9_inputs" name="" id="" cols="30" rows="10"></textarea>
              <input className="page9_inputs" type="text" name="" id="" placeholder="Attach file"  />
              <button className="page9_btn">send a message</button>
           </div>
       </div>
       <p className="page9_bottomhead">TESTIMONIALS</p>
       <div className="page9_bottom">
           
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi obcaecati fugit harum tempore autem, sed aspernatur laboriosam veniam voluptate deserunt earum incidunt nisi maxime quia laborum quae nemo, necessitatibus praesentium est distinctio recusandae magnam nesciunt atque. Expedita beatae officiis, porro necessitatibus exercitationem magnam, dolore adipisci doloribus voluptatum assumenda rem perferendis odit deserunt ipsa quasi! Ab fugit quos expedita officia consequuntur nobis ea nam amet dolorum dolorem enim dicta provident modi, voluptatem iste facere sit. Incidunt quis quidem, enim harum minus distinctio quia commodi inventore. Aliquam modi error enim expedita iusto.</p>
          <span style={{fontSize:"20px",fontWeight:"inherit"}}>Bharat Joshi</span>
          <p style={{fontWeight:"lighter"}}>Marketing Manager</p>
       </div>
   </div>
    )
}

export default Page9