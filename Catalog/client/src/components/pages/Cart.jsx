import React, {useContext, useState} from 'react'
import { PageContainer, PageWrapper, Button, ElementWrapper, Subtitle } from '../elements/PagesElements'
import CartItem from './cart/CartItem'
import PurchaseForm from './cart/PurchaseForm'
import CartContext from '../elements/context/CartContext'
import './cart/Cart.css'

const Cart = ({products}) => {

  const [showForm, setShowForm] = useState(false)
  const {inCart, setInCart, discountPrice} = useContext(CartContext)

  const removeProduct = (id) => {
    const remaining = Array.from(inCart).filter((item)=>item.id !== id);
    setInCart(remaining)
  }

  return (
    <>
    <PageContainer>
      <PageWrapper>
        <div className='cart-row'>
          <div className='cart-column-left'>
            <ElementWrapper className='items-container'>
              {inCart?.length > 0 ? 
                (inCart?.map((element) => 
                  products.filter((item) => item.id === element.id).map((product) => {
                    return (
                      <CartItem key={product.id} id={product.id} name={product.name} 
                      image={product.image} price={product.discount ? discountPrice(product.price, product.discount) : product.price} 
                      stock={product.stock} quantity={element.quantity} removeProduct={removeProduct}/>
                    )
                    }))) : 
                    (
                    <ElementWrapper>
                      <Subtitle>
                        Your cart is empty at the moment
                      </Subtitle>
                    </ElementWrapper>
                    )}
              </ElementWrapper>
              {!showForm &&
              <ElementWrapper className='form-button-wrapper'>
              <Button className='show-form-button' onClick={()=>setShowForm(true)}>Complete purchase</Button>
              </ElementWrapper>}
          </div>
          <div className='cart-column-right' style={!showForm ? {opacity: '0', bottom: '-700px', transition: 'all 0.2s ease-in-out'} : {bottom: '0px', transition: 'all 0.2s ease-in-out'}}>
            <ElementWrapper className='purchase-form-wrapper'>
              <PurchaseForm setShowForm={setShowForm}/>
            </ElementWrapper>
          </div>
        </div>
      </PageWrapper>
    </PageContainer>
    </>
  )
}

export default Cart