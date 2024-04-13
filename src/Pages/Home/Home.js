import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as ServiceIT } from '../../assets/icons/service-it.svg';
import { ReactComponent as ServiceDesign } from '../../assets/icons/service-design.svg';
import { ReactComponent as DigitalStrategy } from '../../assets/icons/digital-strategy.svg';
import { ReactComponent as ServiceAI } from '../../assets/icons/service-ai.svg';


import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Container className='home-container'>
                <div className='header__sections'>
                    <Link to="/it-service" className='header__section'>
                        <div className='section__logo'>
                            <ServiceIT></ServiceIT>
                        </div>
                        <div className='section__text'>
                            <h2>IT Service</h2>
                        </div>
                    </Link>
                    <Link to="/design-service" className='header__section'> 
                        <div className='section__logo'>
                            <ServiceDesign></ServiceDesign>
                        </div>
                        <div className='section__text'>
                            <h2>Design Service</h2>
                        </div>
                    </Link>
                    <Link to="/digital-strategy" className='header__section'>
                        <div className='section__logo'>
                            <DigitalStrategy></DigitalStrategy>
                        </div>
                        <div className='section__text'>
                            <h2>Digital Strategy</h2>
                        </div>
                    </Link>
                    <Link to="/ai-services" className='header__section'>
                        <div className='section__logo'>
                            <ServiceAI></ServiceAI>
                        </div>
                        <div className='section__text'>
                            <h2>AI Services</h2>
                        </div>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default Home;
