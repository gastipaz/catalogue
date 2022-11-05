import React, { useEffect, useState, useContext } from 'react'
import { PageContainer, PageWrapper, ElementWrapper, Subtitle, Paragraph, Button, Title } from '../elements/PagesElements'
import { useParams } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CompactCard from './product/CompactCard';
import { getData } from '../elements/context/APIHooks';
import CartContext from '../elements/context/CartContext';
import './product/Product.css'

const Product = ({ products }) => {

  const { handleCart, discountPrice } = useContext(CartContext)
  const [isLoading, setLoading] = useState(true)
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const relatedProducts = products.filter((item) => item.subcategory === productData.subcategory && item.id !== productData.id);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`/product/${id}`);
      setProductData(result.data.product);
      setLoading(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (isLoading) {
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
    <PageContainer>
      <PageWrapper>
        <div className='product-row'>
          <div className='product-column-left'>
            <ElementWrapper className='product-title-wrapper'>
              <Paragraph className='header'>{productData.category} / {productData.subcategory}</Paragraph>
              <Title>{productData.name}</Title>
            </ElementWrapper>
            <div className='product-data-container'>
              <ElementWrapper className='image-container'>
                <ElementWrapper className='image-wrapper'>
                  <img className='image' src={productData.image} alt="big" />
                </ElementWrapper>
              </ElementWrapper>
              <ElementWrapper className='product-information-wrapper'>
                <ElementWrapper className='header-wrapper'>
                  {productData.discount && <Subtitle>{productData.discount}% OFF</Subtitle>}
                  {productData.discount ?
                    <Subtitle><strike>${productData.price}</strike> ⇒ ${discountPrice(productData.price, productData.discount)}</Subtitle>
                    : <Subtitle>${productData.price}</Subtitle>}
                  <Paragraph>{productData.stock} units available</Paragraph>
                  <ElementWrapper className='quantity-selector-wrapper'>
                    <Paragraph>Enter desired quantity: </Paragraph>
                    <input className='quantity-input' id={`${id}quantity`} name='quantity' type="number" min='1' max={productData.stock} defaultValue="1" placeholder="Enter quantity" />
                  </ElementWrapper>
                </ElementWrapper>
                <ElementWrapper className='cart-button-wrapper'>
                  <Button className='cart-button'
                    onClick={() => handleCart(Number(productData.id), Number(document.getElementById(`${id}quantity`).value))}>
                    Add to cart <AiOutlineShoppingCart />
                  </Button>
                </ElementWrapper>
                <ElementWrapper className='product-description-wrapper'>
                  <Subtitle>Description</Subtitle>
                  {productData.description ?
                    <Paragraph className='product-description-text'>{productData.description}</Paragraph> :
                    <Paragraph>No description available at the moment.</Paragraph>
                  }
                </ElementWrapper>
                <ElementWrapper className='product-details-wrapper'>
                  <Subtitle>Details</Subtitle>
                  {productData.details ?
                    productData.details?.map((item, index) => {
                      return (
                        <li className='details' key={index}>{item}</li>
                      )
                    }) :
                    <Paragraph>No details available at the moment.</Paragraph>
                  }
                </ElementWrapper>
              </ElementWrapper>
            </div>
          </div>
        </div>
        {relatedProducts?.length > 0 &&
          <section className='related-products-section'>
            <div className='related-products-header'>
              <Subtitle>Related Products</Subtitle>
            </div>
            <div className='related-products-container'>
              {relatedProducts?.length > 0 && relatedProducts.filter((_, index) => index < 4).map((product) => {
                return (
                  <CompactCard key={product.id} id={product.id} name={product.name} price={product.discount ? discountPrice(product.price, product.discount) : product.price} image={product.image} handleCart={handleCart} />
                )
              })}
            </div>
          </section>}
      </PageWrapper>
    </PageContainer>
  )
}

export default Product