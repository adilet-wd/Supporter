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
            <Underline></Underline>
        </Container>
        </>
    );
}

export default AiService;
