import React from 'react';
import { Container } from 'react-bootstrap';
import "./Notfoundpage.scss";
import { Link } from 'react-router-dom';

const Notfoundpage = () => {

    return (    
        <div className='notFound'>
            <Container>
                <div className='notFound__text'>
                    <Link to={'/'}>
                        <h1>404</h1>
                        <p>Page not found</p>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default Notfoundpage;
