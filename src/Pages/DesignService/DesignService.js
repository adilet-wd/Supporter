import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as DesignServiceLogo } from '../../assets/icons/service-design.svg';
import { ReactComponent as Branding  } from '../../assets/icons/Branding.svg';
import { ReactComponent as Presentation } from '../../assets/icons/Presentation.svg';
import { ReactComponent as Motion  } from '../../assets/icons/Motion.svg';
import { ReactComponent as Label  } from '../../assets/icons/Label.svg';
import { ReactComponent as Social  } from '../../assets/icons/Social.svg';
import { ReactComponent as LogoDesign } from '../../assets/icons/LogoDesign.svg';
import { ReactComponent as UI  } from '../../assets/icons/UI.svg';
import { ReactComponent as Illustration  } from '../../assets/icons/Illustration.svg';
import { ReactComponent as Product  } from '../../assets/icons/Product.svg';


import SectionBlock from '../../Components/SectionBlock/SectionBlock';
import SectionList from '../../Components/SectionList/SectionList';
import SectionElement from '../../Components/SectionElement/SectionElement';

const DesignService = () => {
    return (
        <>
        <Container className='section-container design-container'>
            <div className='section__title'>
                <div className='section__logo'>
                    <DesignServiceLogo></DesignServiceLogo>
                </div>
                <div className='section__text'>
                <h1>Design Service</h1>
                <div className='section__about'>
                    <p>Elevate your brand with our expert design services at Supporter. Our creative team specializes in crafting visually stunning logos, captivating templates, and engaging graphics that resonate with your audience. Whether you're launching a new venture or refreshing your brand identity, we work closely with you to understand your vision and bring it to life through innovative design solutions. With our attention to detail and passion for creativity, we'll help you make a lasting impression in today's competitive market.</p>
                </div>
                </div>
            </div>
            <SectionBlock>
                <SectionList>
                    <SectionElement><Branding/>Branding Design</SectionElement>
                    <SectionElement><Social/>Social Media Creative</SectionElement>
                    <SectionElement><Illustration/>Illustration Design</SectionElement>
                    <SectionElement><Presentation/>Presentation Design</SectionElement>
                    <SectionElement><LogoDesign/>Logo Design</SectionElement>
                    <SectionElement><Product/>Product Design</SectionElement>
                    <SectionElement><Motion/>Motion Design</SectionElement>
                    <SectionElement>Web Design</SectionElement>
                    <SectionElement>Event Design</SectionElement>
                    <SectionElement>T-Shirt Design</SectionElement>
                    <SectionElement>Photo Editing</SectionElement>
                    <SectionElement>Social Media Kit Design</SectionElement>
                    <SectionElement>Flyer Design</SectionElement>
                    <SectionElement>Catalogue Design</SectionElement>
                    <SectionElement><UI/>UI UX Design</SectionElement>
                    <SectionElement><Label/>Label Design</SectionElement>
                    <SectionElement>ID Card Design</SectionElement>
                    <SectionElement>Leaflet Design</SectionElement>
                    <SectionElement>Business Card Design</SectionElement>
                </SectionList>
            </SectionBlock>
        </Container>
        </>
    );
}

export default DesignService;
