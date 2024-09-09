import React from 'react'
import Programcard from '../../../global/progarmCard'

const Program = () => {
  return (
    <div>
      <section>
    <div className="class">
      <span>Explore Programs</span>
      <h1>Our Most Popular Class</h1>
      <p>
        Let's join our famous class, the knowledge provided will definitely be
        useful for you.
      </p>
      <div className="class-card">
       <Programcard image={"/images/Image.png"} title={"Figma UI UX Design.."} content={"Use Figma to get a job in UI Design, User Interface, User Experience design."}
        ratingStar={"(16,325)"} rating={"4.3"} iconImage={"/images/Avatar.png"} iconTitle={"Jane Cooper"} price={"$17.84"}
       />
        <Programcard image={"/images/Image (1).png"} title={"Learn With Shoaib"} content={"Design Web Sites and Mobile Apps that Your Users Love and Return to Again."}
        ratingStar={"(832)"} rating={"3.9"} iconImage={"/images/Avatar.png"} iconTitle={"Jenny Wilson"} price={"$8.99"}
       />
        <Programcard image={"/images/Image (2).png"} title={"Building User Interface..gn.."} content={"Learn how to apply User Experience (UX) principles to your website designs."}
        ratingStar={"4.2"} rating={"(125)"} iconImage={"/images/Avatar (2).png"} iconTitle={"Esther Howard"} price={"$11.70"}
       />
       
   {/*
        <div className="card">
          <div className="img-card">
            <img src="" alt="" />
          </div>
          <div className="text-card">
            <span>Design</span>
            <h3></h3>
            <p className="text">
            </p>
            <p>
              
              <img src="/images/rating.png" alt="" />
              <span></span>
            </p>
            <div className="img-icon">
              <img src="/images/Avatar (2).png" alt="" />
              <div className="text">
                <p></p>
                <span>2024 Enrolled</span>
              </div>
              <h4 className="price"></h4>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="btn-e">
      <button className="class-btn">Explore All Program</button>
    </div>
  </section>
    </div>
  )
}

export default Program
