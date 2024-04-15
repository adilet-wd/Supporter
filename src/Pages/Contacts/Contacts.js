import React from 'react';
import { Container } from 'react-bootstrap';
import './Contacts.scss';

const Contacts = () => {
    return (
        <>
        <Container className='section-container contacts-container'>
            <div className='section__title'>
                <div className='section__text'>
                    <h1 className='text-center'>Contacts</h1>
                    <div className='section__about'>
                        <div className='contact__info'>
                            <div className='contact__item'>
                                <h3>Headquarter</h3>
                                <p>Dubai, UAE</p>
                            </div>
                            <div className='contact__item'>
                                <h3>Email</h3>
                                <p><a className="contact__link" href="mailto:info@supporter.com">supp.store.dubai@gmail.com</a></p>
                            </div>
                            <div className='contact__item'>
                                <h3>Phone</h3>
                                <p><a className="contact__link" href="tel:+971555561505">+971 55 55 61 505</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </Container>
        </>
    );
}

export default Contacts;
