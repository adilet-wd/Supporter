import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as DigitalStrategyLogo } from '../../assets/icons/digital-strategy.svg';
import Underline from '../../Components/Underline/Underline';
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
                </div>
            </div>
            <Underline></Underline>
        </Container>
        </>
    );
}

export default DigitalStrategy;
