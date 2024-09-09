import React from 'react'
import ServiceCard from '../../../global/serviceCard'

const Service = () => {
  return (
    <div>
       <section>
    <div className="service">
      <span>Service</span>
      <h1>
        Fostering a playful &amp; engaging learning <br /> environment
      </h1>
      <div className="service-card">
        <ServiceCard image={"/images/Icon.png"} title={"Interaction Design"} content={"Lessons on design that cover the most recent developments." } className="active-card"/>
        <ServiceCard image={"/images/Frame 391.png"} title={"UX Design Course"} content={"Classes in development that cover the most recent advancements in web."}/>
        <ServiceCard image={"/images/Frame 391 (1).png"} title={"Interface Design"} content={"User Interface Design courses that cover the most recent trends"}/>
           
      </div>
    </div>
  </section>
    </div>
  )
}

export default Service
