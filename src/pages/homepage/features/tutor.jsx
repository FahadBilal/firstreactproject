import React from 'react'
import TutorCard from '../../../global/tutorCard'

const Tutor = () => {
  return (
    <div>
       <section>
    <div className="class tutors">
      <span>Tutors</span>
      <h1>Meet the Heroes</h1>
      <p>
        On Weekend UX, instructors from all over the world instruct millions of
        students. <br /> We offer the knowledge and abilities.
      </p>
      <div className="tutor-card">
        <TutorCard image={"/images/Avatar (4).png"} title={"Theresa Webb"}
         contentOne={"Application Support Analyst Lead"} contentTwo={"Former co-founder of Opendoor. Early staff at Spotify and Clearbit."}/>

        <TutorCard image={"/images/Avatar (5).png"} title={"Courtney Henry"}
         contentOne={"Director, Undergraduate Analytics and Planning"} contentTwo={"Lead engineering teams at Figma, Pitch, and Protocol Labs."}/>

        <TutorCard image={"/images/Avatar (6).png"} title={"Albert Flores"}
         contentOne={"Career Educator"} contentTwo={"Former co-founder of Opendoor. Early staff at Spotify and Clearbit."}/>

        <TutorCard image={"/images/Avatar (7).png"} title={"Marvin McKinney"}
         contentOne={"Co-op &amp; InternshOperations Managerips Program &amp; "} contentTwo={"Former frontend dev for Linear, Coinbase, and Postscript."}/>
        {/* <div className="card">
          
        </div>
        <div className="card">
          <div className="card-img">
            <img src="/images/Avatar (6).png" alt="" />
          </div>
          <div className="card-text">
            <h3></h3>
            <p className="color">
              
            </p>
            <p className="gray">
              
            </p>
          </div>
          <div className="social-img">
            <img src="/images/Social icon.png" alt="" />
            <img src="/images/Social icon (1).png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  </section>
    </div>
  )
}

export default Tutor
