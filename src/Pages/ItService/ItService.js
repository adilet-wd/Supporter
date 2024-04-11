import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as ServiceIT } from '../../assets/icons/service-it.svg';
import "./ItService.scss";
import SectionBlock from '../../Components/SectionBlock/SectionBlock';
import SectionList from '../../Components/SectionList/SectionList';
import SectionElement from '../../Components/SectionElement/SectionElement';
import Underline from '../../Components/Underline/Underline';

const ItService = () => {
    return (
        <>
        <Container className='section-container it-container'>
            <div className='section__title'>
                <div className='section__logo'>
                    <ServiceIT></ServiceIT>
                </div>
                <div className='section__text'>
                <h1>IT Service</h1>
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

export default ItService;
