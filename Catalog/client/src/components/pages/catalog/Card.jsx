import React, { useContext, useState } from 'react'
import {ElementWrapper, Title, Subtitle, Paragraph} from '../../elements/PagesElements'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CartContext from '../../elements/context/CartContext'
import './Card.css'


const Card = React.memo(function Card({id, price, discount, name, image, stock}) {

  const [quantity, setQuantity] = useState(1)
  const {handleCart, discountPrice} = useContext(CartContext)
  
  return (
    <ElementWrapper className='card-container'>
      <ElementWrapper className='card-image' style={{ backgroundImage: `url(${image})`}}>
        <ElementWrapper className='card-actions'>
          <Subtitle className='card-price'>${discount ? discountPrice(price, discount) : price}</Subtitle>
          {discount && <Subtitle className='card-price'>{discount}% OFF</Subtitle>}
          <AiOutlineShoppingCart className='card-icon' onClick={()=> handleCart(id, quantity)}/>
        </ElementWrapper>
      </ElementWrapper>
      <ElementWrapper className='card-title-wrapper'>
        <Link className='card-title' to={`/product/${id}`}>
          <Title className='card-title'>{name}</Title>
        </Link>
      </ElementWrapper>
      <ElementWrapper className='quantity-selector'>
          <AiOutlineMinus className='quantity-selector-icon' onClick={() => quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1)}/>
          <Paragraph className='quantity'>{quantity} of {stock}</Paragraph>
          <AiOutlinePlus className='quantity-selector-icon' onClick={() => quantity < stock && setQuantity((prevQuantity) => prevQuantity + 1)}/>
        </ElementWrapper>
    </ElementWrapper>
  )
})

export default Card