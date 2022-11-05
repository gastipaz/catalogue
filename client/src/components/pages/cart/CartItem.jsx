import React from 'react'
import { ElementWrapper, Subtitle, Title } from '../../elements/PagesElements'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../catalog/Card.css'

const CartItem = React.memo(function CartItem({ id, name, image, price, stock, quantity, removeProduct }) {

    return (
        <>
            <ElementWrapper className='cart-item'>
                <ElementWrapper className='card-container'>
                    <ElementWrapper className='card-image' style={{ backgroundImage: `url(${image})` }}>
                        <ElementWrapper className='card-actions'>
                            <Subtitle className='card-price'>${(price * quantity).toFixed(2)}</Subtitle>
                            <AiOutlineClose className='card-icon' name='remove' onClick={() => removeProduct(id)} />
                        </ElementWrapper>
                    </ElementWrapper>
                    <ElementWrapper className='card-title-wrapper'>
                        <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                            <Title className='card-title'>{name}</Title>
                        </Link>
                    </ElementWrapper>
                    <Title className='card-title'>Buying {quantity} of {stock} available</Title>
                </ElementWrapper>
            </ElementWrapper>
        </>
    )
})

export default CartItem