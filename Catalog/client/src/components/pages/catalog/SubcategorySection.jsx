import React, { useRef, useState } from 'react'
import { ElementWrapper, Subtitle } from '../../elements/PagesElements'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
import Card from './Card'
import './Catalog.css'

const SubcategorySection = ({ products, subcategory, columnRef }) => {

    const productsRef = useRef()
    const [productSlide, setProductSlide] = useState(1)
    let columnWidth = columnRef.current?.getBoundingClientRect().width
    let length = productsRef.current?.getBoundingClientRect().width
    let maxClicks = Math.ceil(length / columnWidth)
    let percentage = 100 / maxClicks

    const handleClick = (direction) => {
        console.log(maxClicks, productSlide, columnWidth, length) 
        if (direction === 'left' && productSlide > 1) {
            setProductSlide((prevSlide) => prevSlide - 1)
            productsRef.current.style.transform = `translateX(0px)`
        }
        if (direction === 'right' && productSlide < maxClicks) {
            setProductSlide((prevSlide) => prevSlide + 1)
            productsRef.current.style.transform = `translateX(${-percentage * productSlide}%)`
        }
        if (productSlide === maxClicks) {
            setProductSlide(1)
        }
    }

    return (
        <>
            <ElementWrapper className='subcategory-subtitle-container'>
                <ElementWrapper className='subcategory-subtitle-wrapper'>
                    {productSlide > 1 &&
                    <button className='arrow-container on-left' onClick={()=> handleClick('left')}>
                    <MdArrowBackIosNew className='slider-arrow'/>
                    </button>
                    }
                    <Subtitle>{subcategory}</Subtitle>
                    {length > columnWidth && productSlide < maxClicks ?
                    <button className='arrow-container on-right' onClick={()=> handleClick('right')}>
                        <MdArrowForwardIos className='slider-arrow'/>
                    </button> : null
                    }
                </ElementWrapper>
            </ElementWrapper>
            <ElementWrapper className='cards-slider-container'>
                <ElementWrapper className='cards-slider' ref={productsRef}>
                    {products.filter(item => item.subcategory === subcategory).map((product) => {
                        return (
                            <ElementWrapper className='card-wrapper' key={product.id} id={product.id} >
                                <Card id={product.id} price={product.price} discount={product.discount} name={product.name} image={product.image} stock={product.stock}/>
                            </ElementWrapper>
                        )
                    })}
                </ElementWrapper>
            </ElementWrapper>
        </>
    )
}

export default SubcategorySection