import React from 'react'
import { ElementWrapper, Paragraph, Subtitle } from '../../elements/PagesElements'
import { useNavigate } from 'react-router-dom';

const MostPopular = ({products, mostPopular}) => {

 const navigate = useNavigate()

  return (
    <ElementWrapper className='popular-products-container'>
        <Paragraph className='filters-title'>Popular products</Paragraph>
        <ElementWrapper className='popular-products-wrapper'>
            {products.filter(item => Object.keys(mostPopular).includes(item.id.toString())).map((product)=>{
                    return (
                        <ElementWrapper className='compact-card-container' key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>
                            <ElementWrapper className='compact-card-image-wrapper'>
                                <img className='compact-card-image' src={product.image} alt="thumbnail"/>
                                <ElementWrapper className='compact-card-price-container'>
                                    <div className='compact-card-price-background'/>
                                    <Subtitle className='compact-card-price'>${product.price}</Subtitle>
                                </ElementWrapper>
                            </ElementWrapper>
                        </ElementWrapper>
                        
                    )
                })}
        </ElementWrapper>
    </ElementWrapper>
  )
}

export default MostPopular