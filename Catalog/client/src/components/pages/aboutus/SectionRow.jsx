import React from 'react'
import { ElementWrapper, Title, Paragraph } from '../../elements/PagesElements'
import './AboutUs.css'

const SectionRow = ({title, description, image, alignment}) => {
    return (
        <>
            <ElementWrapper className='about-us-section'>
                <ElementWrapper className='about-us-wrapper' style={{justifyContent: alignment}}>
                    <img className='section-background-image'src={image} alt="hs"/>
                    <ElementWrapper className='section-text-wrapper'>
                        <ElementWrapper className='offers-header'><Title className='title'>{title}</Title></ElementWrapper>
                        <Paragraph className='about-description'>
                            {description.map((line, index) => {
                                return (<li key={index}><strong>{line}</strong></li>)
                            })}
                        </Paragraph>
                    </ElementWrapper>
                </ElementWrapper>
            </ElementWrapper>
        </>
    )
}

export default SectionRow