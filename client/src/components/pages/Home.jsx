import React, {useState, useEffect} from 'react'
import {PageContainer, PageWrapper, ElementWrapper, Title, Subtitle, Paragraph} from '../elements/PagesElements'
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'
import {offers} from './home/SliderData'
import AboutUs from './AboutUs'
import OffersDisplay from './home/OffersDisplay'
import {getData} from './../elements/context/APIHooks'
import Card from "./catalog/Card"
import './home/Home.css'

const Home = ({navigate}) => {

    const [offerProducts, setOfferProducts] = useState([]);
    const [offersFilter, setOffersFilter] = useState(null);
    const [currentOffer, setCurrentOffer] = useState(0);

    const goLeft = () => {
      setCurrentOffer((prevState) => prevState > 0 ? prevState - 1 : prevState + offers.length - 1)
    }
    const goRight = () => {
      setCurrentOffer((prevState) => prevState < offers.length - 1 ? prevState + 1 : prevState - prevState)
    }

    function DisplayDiscounts() {
      return (
        !offersFilter ? (
          <div className='discounts-wrapper'>
            {offerProducts?.length > 0 ? 
              offerProducts.map(product =>
                <div key={product.id} className='offer-wrapper'>
                  <Card id={product.id} price={product.price}
                  discount={product.discount} name={product.name} image={product.image} stock={product.stock}/>
                </div> ) :
                <Subtitle>No offers available at the moment</Subtitle>
          }
          </div>
        ) : (
          <div className='discounts-wrapper'>
            {offerProducts?.length > 0 ? 
              offerProducts.filter(product => product.subcategory === offersFilter).map(product=>
                <div key={product.id}  className='offer-wrapper'>
                  <Card id={product.id} price={product.price}
                  discount={product.discount}  name={product.name} image={product.image} stock={product.stock}/>
                </div> ) :
                <Subtitle>No offers available at the moment</Subtitle>
            }
          </div>
        )
      )
    }

    useEffect(()=> {
      async function fetchData() {
        const result = await getData("/withDiscount");
        console.log(result.data?.discounts)
        setOfferProducts(result.data?.discounts)
      } 
      fetchData()
    },[])

  return (
    <>
    <PageContainer id="home">
      <PageWrapper style={{background:'rgba(227, 214, 254, 0.411)'}}>
        <ElementWrapper className='home-row'>
          <button className='btn-arrow left' onClick={goLeft}>
            <BiLeftArrow className='arrow prev'/>
          </button>
          <button className='btn-arrow right' onClick={goRight}>
            <BiRightArrow className='arrow next'/>
          </button>
          {offers.map((offer, index) => (
            index === currentOffer && (
              <OffersDisplay key={index} currentOffer={currentOffer} index={index} 
              description={offer.description} image={offer.image} products={offer.products} 
              navigate={navigate} setOffersFilter={setOffersFilter}/>
            )
          ))}
        </ElementWrapper>
        <div className='discount-products-container'>
          <ElementWrapper className='offers-header'>
            <Title className='title'>Today's offers</Title>
            <Paragraph className='remove-filter' onClick={()=>setOffersFilter(null)}>See all</Paragraph>
          </ElementWrapper>
          {DisplayDiscounts()}
        </div>
        <AboutUs/>
      </PageWrapper>
    </PageContainer>
    </>
  )
}

export default Home