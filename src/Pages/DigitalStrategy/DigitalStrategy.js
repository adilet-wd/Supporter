import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as DigitalStrategyLogo } from '../../assets/icons/digital-strategy.svg';

const DigitalStrategy = () => {
    return (
        <>
        <Container className='section-container it-container'>
            <div className='section__title'>
                <div className='section__logo'>
                    <DigitalStrategyLogo></DigitalStrategyLogo>
                </div>
                <div className='section__text'>
                <h1>Digital Strategy</h1>
                <div className='section__about'>
                    <p>A plan for leveraging online platforms to create an online presence and accomplish particular marketing goals is known as a digital marketing strategy. These channels may consist of your website, social media, paid advertisements, organic search, and other web-based platforms.</p>
                </div>
                </div>
            </div>
        </Container>
        </>
    );
}

export default DigitalStrategy;
