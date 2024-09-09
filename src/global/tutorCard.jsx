import React from 'react'

const TutorCard = ({image,title,contentOne,contentTwo}) => {
  return (
    <div className="card">
          <div className="card-img">
            <img src={image} alt="" />
          </div>
          <div className="card-text">
            <h3>{title}</h3>
            <p className="color">{contentOne}</p>
            <p className="gray">
              {contentTwo}
            </p>
          </div>
          <div className="social-img">
            <img src="/images/Social icon.png" alt="" />
            <img src="/images/Social icon (1).png" alt="" />
          </div>
        </div>
  )
}

export default TutorCard
