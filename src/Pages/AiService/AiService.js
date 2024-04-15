import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as AiServiceLogo } from '../../assets/icons/service-ai.svg';
import { ReactComponent as Workspace  } from '../../assets/icons/Workspace.svg';
import { ReactComponent as Software  } from '../../assets/icons/Software.svg';
import { ReactComponent as Hardware   } from '../../assets/icons/Hardware.svg';
import { ReactComponent as Landing  } from '../../assets/icons/Landing.svg';
import { ReactComponent as Printer  } from '../../assets/icons/Printer.svg';


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
                    <SectionElement><Workspace /><div>PC workspace maintenance</div></SectionElement>
                    <SectionElement><Landing/><div>Landing web pages</div></SectionElement>
                    <SectionElement><Printer/><div>Printer maintenance</div></SectionElement>
                    <SectionElement><Hardware/><div>Hardware repair</div></SectionElement>
                    <SectionElement><Software/><div>Software maintenance</div></SectionElement>
                </SectionList>
            </SectionBlock> 
        </Container>
        </>
    );
}

export default AiService;
