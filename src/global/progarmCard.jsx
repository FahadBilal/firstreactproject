import React from 'react'

const Programcard = ({image,title,content,rating,ratingStar,iconImage,iconTitle,price}) => {
  return (
    <div className="card">
          <div className="img-card">
            <img src={image} alt="" /> 
          </div>
          <div className="text-card">
            <span>Design</span>
            <h3>{title}</h3>    
            <p className="text">
             {content}
            </p> 
            <p>
              {rating}
              <img src="images/rating.png" alt="" />   
              <span>{ratingStar}</span> 
            </p> 
            <div className="img-icon">
              <img src={iconImage} alt="" /> 
              <div className="text">
                <p>{iconTitle}</p> 
                <span>2024 Enrolled</span>
              </div>
              <h4 className="price">{price}</h4> 
            </div>
          </div>
        </div>
  )
}

export default Programcard
