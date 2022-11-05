import React from 'react'

const Slider = ({currentOffer, image, index}) => {

  return (
    <>
    <div key={index} 
    className={index === currentOffer ? "offer-active" : "offer-inactive"}>
      <img className='offer-image' src={image} alt="offer"/>
    </div>
    </>
  )
}

export default Slider