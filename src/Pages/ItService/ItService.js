import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as ServiceIT } from '../../assets/icons/service-it.svg';
import { ReactComponent as Workspace  } from '../../assets/icons/Workspace.svg';
import { ReactComponent as Software  } from '../../assets/icons/Software.svg';
import { ReactComponent as Hardware   } from '../../assets/icons/Hardware.svg';
import { ReactComponent as Landing  } from '../../assets/icons/Landing.svg';
import { ReactComponent as Printer  } from '../../assets/icons/Printer.svg';
import { Helmet } from 'react-helmet';



import SectionBlock from '../../Components/SectionBlock/SectionBlock';
import SectionList from '../../Components/SectionList/SectionList';
import SectionElement from '../../Components/SectionElement/SectionElement';

const ItService = () => {
    return (
        <>
        <Helmet>
            <title>Supporter - It Service</title>
            <meta name="description" content="Supporter - It Service" />
        </Helmet>
        <Container className='section-container it-container'>
            <div className='section__title'>
                <div className='section__logo'>
                    <ServiceIT></ServiceIT>
                </div>
                <div className='section__text'>
                    <h1>IT Service</h1>
                    <div className='section__about'>
                    <p>At Supporter, we pride ourselves on delivering top-notch IT services to address all your technical needs. From troubleshooting hardware issues like printer malfunctions to optimizing computer processors for peak performance, our team of skilled technicians is dedicated to resolving any IT problem you encounter swiftly and effectively. Whether you're a small business or a large corporation, we offer tailored solutions to keep your technology running smoothly, allowing you to focus on what matters most - your business.</p>
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

export default ItService;
