import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as AiServiceLogo } from '../../assets/icons/service-ai.svg';
import SectionBlock from '../../Components/SectionBlock/SectionBlock';
import SectionList from '../../Components/SectionList/SectionList';
import SectionElement from '../../Components/SectionElement/SectionElement';

const AiService = () => {
    return (
        <>
        <Container className='section-container ai-container'>
            <div className='section__title'>
                <div className='section__logo'>
                    <AiServiceLogo></AiServiceLogo>
                </div>
                <div className='section__text'>
                    <h1>Ai Services</h1>
                    <div className='section__about'>
                        <p>Stay ahead of the curve with our AI-powered solutions designed to revolutionize your business processes. From machine learning algorithms to intelligent automation, we leverage the latest advancements in artificial intelligence to unlock new opportunities and drive innovation.</p>
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
