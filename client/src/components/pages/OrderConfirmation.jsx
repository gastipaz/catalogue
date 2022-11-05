import React, { useContext } from 'react'
import { PageContainer, PageWrapper, ElementWrapper, Subtitle, Title, Button } from '../elements/PagesElements'
import './orderconfirmation/OrderConfirmation.css'
import CartContext from '../elements/context/CartContext'

const OrderConfirmation = ({navigate}) => {
    const { orders, setOrders } = useContext(CartContext)

    const handleReturn = () => {
        setOrders(null)
        navigate('/catalog')
    }

    if (orders === null) {
        return (
            <PageContainer>
                <PageWrapper>
                    <ElementWrapper>
                        <Title>Loading...</Title>
                    </ElementWrapper>
                </PageWrapper>
            </PageContainer>
        )
    }

    return (
        <PageContainer style={{background:'#8e5bf550'}}>
            <PageWrapper>
                {orders?.length > 0 ?
                    (<ElementWrapper className='page-information-container'>
                        <ElementWrapper className='order-success-title'>
                            <Title>Thank you! Your order has been placed successfully!</Title>
                        </ElementWrapper>
                        <ElementWrapper className='order-background'>
                            {orders?.length > 0 && orders?.map((order) => {
                                return (
                                    <ElementWrapper className='order-container' key={order.order_id}>
                                        <ElementWrapper className='order-wrapper'>
                                            <ElementWrapper className='order-title-wrapper'>
                                                <Subtitle className='order-title'>{order.product.name}</Subtitle>
                                            </ElementWrapper>
                                        </ElementWrapper>
                                        <ElementWrapper className='order-information-wrapper'>
                                            <ElementWrapper className='order-image-wrapper'>
                                                <img className='order-image' src={order.product.image} alt="thumbnail"></img>
                                            </ElementWrapper>
                                            <ElementWrapper className='order-information'>
                                                <Subtitle>Order number: #{order.order_id}</Subtitle>
                                                <Subtitle>Quantity: {order.quantity}</Subtitle>
                                                <Subtitle>${order.amount?.toFixed(2)}</Subtitle>
                                            </ElementWrapper>
                                        </ElementWrapper>
                                    </ElementWrapper>
                                )
                            })}
                        </ElementWrapper>
                    </ElementWrapper>) :
                    (<ElementWrapper>
                        <Title>No placed orders were found</Title>
                    </ElementWrapper>)
                }
                <ElementWrapper style={{marginBottom:'30px'}}>
                    <Button onClick={() => handleReturn()}>Return to the catalog</Button>
                </ElementWrapper>
            </PageWrapper>
        </PageContainer>
    )
}

export default OrderConfirmation