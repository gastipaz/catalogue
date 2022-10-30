import React from 'react'
import { ElementWrapper, Paragraph, Subtitle, Button } from '../../elements/PagesElements'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const CompactCard = ({id, name, price, image, handleCart}) => {

    const navigate = useNavigate()

    return (
        <ElementWrapper className='related-products-card'>
            <div className='compact-card-title'>
                <Subtitle onClick={()=>navigate(`/product/${id}`)}>{name}</Subtitle>
            </div>
            <div className='compact-card-info' >
                <ElementWrapper className='thumbnail-wrapper'>
                    <img className='thumbnail' src={image} alt="thumbnail" />
                </ElementWrapper>
                <ElementWrapper className='compact-card-details-wrapper'>
                    <ElementWrapper className='compact-card-price-wrapper'>
                        <Paragraph className='compact-card-price-text'>${price}</Paragraph>
                        <Button className='cart-button' onClick={() => handleCart(id, 1)}>Add to cart <AiOutlineShoppingCart/></Button>
                    </ElementWrapper>
                </ElementWrapper>
            </div>
        </ElementWrapper>
    )
}

export default CompactCard