import React from 'react'

const ServiceCard = ({image,title,content, className}) => {
  return (
    <div className={`card ${className}`}>
          <div className="card-img">
            <img src={image} alt="" />
            <h3>{title}</h3>
          </div>
          <div className="card-text">
            <p>{content}</p>
          </div>
          <div className="card-btn">
            <a href="">Learn More </a>
          </div>
        </div>
  )
}

export default ServiceCard
