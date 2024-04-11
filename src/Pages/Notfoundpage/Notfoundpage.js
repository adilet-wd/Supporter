import React from 'react';
import { Container } from 'react-bootstrap';
import "./Notfoundpage.scss";


const Notfoundpage = () => {

    return (    
        <div className='notFound'>
            <Container className='notFound__text'>
                <h1>404</h1>
                <p>Page not found</p>
            </Container>
        </div>
    );
}

export default Notfoundpage;
