import React from 'react';
import { Container } from 'react-bootstrap';
import './OurProjects.scss';
import { Helmet } from 'react-helmet';

const OurProjects = () => {
    return (
        <>
        <Helmet>
            <title>Supporter - Our projects</title>
            <meta name="description" content="Supporter - Our projects" />
        </Helmet>
        <Container className='section-container projects-container'>
            <div className='section__title'>
                <div className='section__text'>
                    <h1 className='text-center'>Our Projects</h1>
                    <div className='section__about our-projects__about'>
                        <p>A civic service at the service of students and companies. Following the example of the law clinics in which students, supervised by professors, carry out "pro bono" legal work in the service of the general interest, the AI Clinic will borrow the same model in the direction of organizations.</p>
                        <p>There is a twofold interest.</p>
                        <p>Enable students to learn data science & AI while practicing. The AI Clinic will require 6 to 9 hours of work per week and the projects they will be working on will be an integral part of the training.</p>
                        <p>Promote simple and free access to all organizations that need artificial intelligence to achieve their ambitions: small and medium enterprises, associations and non-profit organizations.</p>
                    </div>
                </div>
            </div>      
        </Container>
        </>
    );
}

export default OurProjects;
