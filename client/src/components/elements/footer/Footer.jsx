import React from 'react'
import { PageWrapper, ElementWrapper, Subtitle, Paragraph, Title } from '../PagesElements'
import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior:'smooth'});
    }

    return (
        <>
            <PageWrapper className='footer-container'>
            <div className='footer-row' >
                    <div className='footer-column'>   
                        <Title className='company-logo' onClick={()=>scrollToElement('top')}>Company</Title>
                    </div>
                    </div>
                    <div className='footer-row' >
                    <div className='footer-column' >
                        <ElementWrapper className='footer-title-wrapper'>
                            <Subtitle>Where to find us</Subtitle>
                            <ElementWrapper>
                                <FaMapMarkerAlt />
                                <ElementWrapper className='footer-text-wrapper'>
                                    <a className='footer-link' href="https://www.google.com/maps/" target="_blank" rel='noreferrer'>
                                        <Paragraph className='footer-link'> Company's address</Paragraph>
                                    </a>
                                </ElementWrapper>
                            </ElementWrapper>
                        </ElementWrapper>
                    </div>
                    <div className='footer-column'>
                        <ElementWrapper className='footer-title-wrapper'>
                            <Subtitle>Follow our socials</Subtitle>
                            <ElementWrapper className='footer-title-wrapper'>
                                <ElementWrapper className='footer-list-wrapper'>
                                    <FaFacebook />
                                    <ElementWrapper className='footer-text-wrapper'>
                                        <a className='footer-link' href="https://www.facebook.com" target="_blank" rel='noreferrer'>
                                            <Paragraph className='footer-link'>Company's Facebook</Paragraph>
                                        </a>
                                    </ElementWrapper>
                                </ElementWrapper>
                                <ElementWrapper className='footer-list-wrapper'>
                                    <FaInstagram />
                                    <ElementWrapper className='footer-text-wrapper'>
                                        <a className='footer-link' href="https://www.instagram.com" target="_blank" rel='noreferrer'>
                                            <Paragraph className='footer-link'>Company's Instagram</Paragraph>
                                        </a>
                                    </ElementWrapper>
                                </ElementWrapper>
                            </ElementWrapper>
                        </ElementWrapper>
                    </div>
                    <div className='footer-column'>
                        <ElementWrapper className='footer-title-wrapper'>
                            <Subtitle>Contact us</Subtitle>
                            <ElementWrapper className='footer-title-wrapper'>
                                <ElementWrapper className='footer-list-wrapper'>
                                    <FaPhone />
                                    <ElementWrapper className='footer-text-wrapper'>
                                        <a className='footer-link' href="tel:123-456-789" target="_blank" rel='noreferrer'>
                                            <Paragraph className='footer-link'>Company's number</Paragraph>
                                        </a>
                                    </ElementWrapper>
                                </ElementWrapper>
                                <ElementWrapper className='footer-list-wrapper'>
                                    <FaEnvelope />
                                    <ElementWrapper className='footer-text-wrapper'>
                                        <a className='footer-link' href="mailto:company@example.com" target="_blank" rel='noreferrer'>
                                            <Paragraph className='footer-link'>company@example.com</Paragraph>
                                        </a>
                                    </ElementWrapper>
                                </ElementWrapper>
                            </ElementWrapper>
                        </ElementWrapper>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}

export default Footer