import React from 'react'
import { ElementWrapper, Title, Button } from './../../elements/PagesElements'
import Slider from './Slider'

const OffersDisplay = ({ currentOffer, index, description, image, products, navigate, setOffersFilter }) => {
    return (
        <>
            <div className='home-column'>
                <ElementWrapper className='slider-text-container'>
                    <Title key={index} className='description'>{description}</Title>
                    <ElementWrapper className='offers-button-wrapper'>
                        <Button className='offers-button' onClick={() => navigate('/catalog')}>See our products!</Button>
                    </ElementWrapper>
                </ElementWrapper>
            </div>
            <ElementWrapper className='offers-slider-container'>
                <div className='offers-slider'>
                    <Slider key={index} currentOffer={currentOffer} image={image} index={index} />
                </div>
            </ElementWrapper>
            <div className='selectors-column' >
                {products.map((subcategory, index) => (
                    <button className='product-offer-btn' key={index}>
                        <Title className='product-cat' onClick={(event)=>setOffersFilter(event.target.textContent)}>{subcategory}</Title>
                    </button>
                    )
                )}
            </div>
        </>
    )
}

export default OffersDisplay