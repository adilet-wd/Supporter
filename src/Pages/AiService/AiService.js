import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as AiServiceLogo } from '../../assets/icons/service-ai.svg';
import { ReactComponent as Fitness  } from '../../assets/icons/fitness-ai.svg';
import { ReactComponent as HealtCare  } from '../../assets/icons/healthcare-ai.svg';
import { ReactComponent as Office   } from '../../assets/icons/office-ai.svg';
import { ReactComponent as Security  } from '../../assets/icons/security-ai.svg';


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
                    <SectionElement><Fitness /><div>Ai fitness trainer</div></SectionElement>
                    <SectionElement><HealtCare/><div>Ai health care</div></SectionElement>
                    <SectionElement><Office/><div>Ai office manager</div></SectionElement>
                    <SectionElement><Security/><div>Ai security</div></SectionElement>
                </SectionList>
            </SectionBlock> 
        </Container>
        </>
    );
}

export default AiService;
