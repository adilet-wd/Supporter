import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as AiServiceLogo } from '../../assets/icons/service-ai.svg';
import SectionBlock from '../../Components/SectionBlock/SectionBlock';
import SectionList from '../../Components/SectionList/SectionList';
import SectionElement from '../../Components/SectionElement/SectionElement';
import Underline from '../../Components/Underline/Underline';

const AiService = () => {
    return (
        <>
        <Container className='section-container it-container'>
            <div className='section__title'>
                <div className='section__logo'>
                    <AiServiceLogo></AiServiceLogo>
                </div>
                <div className='section__text'>
                <h1>Ai Services</h1>
                <div className='section__about'>
                <p>A civic service at the service of students and companies.
                Following the example of the law clinics in which students, supervised by professors, carry out "pro bono" legal work in the service of the general interest, the AI Clinic will borrow the same model in the direction of organizations.</p>
                <p>There is a twofold interest.</p>
                <p>Enable students to learn data science & AI while practicing.
                The AI Clinic will require 6 to 9 hours of work per week and the projects they will be working on will be an integral part of the training.</p>
                <p>Promote simple and free access to all organizations that need artificial intelligence to achieve their ambitions: small and medium enterprises, associations and non-profit organizations.</p>
                </div>
                </div>
            </div>
            <SectionBlock>
                <SectionList>
                    <SectionElement>PC workspace maintenance</SectionElement>
                    <SectionElement>Landing web pages</SectionElement>
                    <SectionElement>Printer maintenance</SectionElement>
                    <SectionElement>Network installment</SectionElement>
                    <SectionElement>Hardware repair</SectionElement>
                    <SectionElement>Software maintenance</SectionElement>
                    <SectionElement>Network maintenance</SectionElement>
                </SectionList>
            </SectionBlock> 
        </Container>
        </>
    );
}

export default AiService;
