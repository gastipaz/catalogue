import React from 'react'
import {ElementWrapper, PageContainer, PageWrapper, Title} from '../elements/PagesElements'
import data from './aboutus/AboutData.json'
import SectionRow from './aboutus/SectionRow'

const AboutUs = () => {
  return (
    <>
      <PageContainer id="aboutus">
        <PageWrapper style={{paddingTop: '0px'}}>
          <div className='discount-products-container'>
          <ElementWrapper className='offers-header'><Title className='title'>About us</Title></ElementWrapper>
          {data.map((item, index)=> {
            return (
              <SectionRow key={index} title={item.title} description={item.description} image={item.image} alignment={item.alignment}/>
            )
          })}
          </div>
        </PageWrapper>
      </PageContainer>
    </>
  )
}   

export default AboutUs