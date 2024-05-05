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
import { ReactComponent as TShirt  } from '../../assets/icons/t-shirt-design.svg';
import { ReactComponent as Flyer  } from '../../assets/icons/flyer-design.svg';
import { ReactComponent as Business  } from '../../assets/icons/business-design.svg';
import { ReactComponent as Web  } from '../../assets/icons/web-design.svg';
import { ReactComponent as Photo  } from '../../assets/icons/photo-design.svg';
import { ReactComponent as Event  } from '../../assets/icons/event-design.svg';
import { ReactComponent as SocialMediaKit  } from '../../assets/icons/social-media-design.svg';
import { ReactComponent as IdCard  } from '../../assets/icons/id-design.svg';
import { ReactComponent as Leaflet  } from '../../assets/icons/leaflet-design.svg';
import { ReactComponent as Catalogue  } from '../../assets/icons/catalogue-design.svg';
import { Helmet } from 'react-helmet';

import SectionBlock from '../../Components/SectionBlock/SectionBlock';
import SectionList from '../../Components/SectionList/SectionList';
import SectionElement from '../../Components/SectionElement/SectionElement';

const DesignService = () => {
    return (
        <>
        <Helmet>
            <title>Supporter - Design Service</title>
            <meta name="description" content="Supporter - Design Service" />
        </Helmet>
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
                    <SectionElement><Branding/><div>Branding Design</div></SectionElement>
                    <SectionElement><Social/><div>Social Media Creative</div></SectionElement>
                    <SectionElement><Illustration/><div>Illustration Design</div></SectionElement>
                    <SectionElement><Presentation/><div>Presentation Design</div></SectionElement>
                    <SectionElement><LogoDesign/><div>Logo Design</div></SectionElement>
                    <SectionElement><Product/><div>Product Design</div></SectionElement>
                    <SectionElement><Motion/><div>Motion Design</div></SectionElement>
                    <SectionElement><Web/><div>Web Design</div></SectionElement>
                    <SectionElement><Event/><div>Event Design</div></SectionElement>
                    <SectionElement><TShirt/><div>T-Shirt Design</div></SectionElement>
                    <SectionElement><Photo/><div>Photo Editing</div></SectionElement>
                    <SectionElement><SocialMediaKit/><div>Social Media Kit Design</div></SectionElement>
                    <SectionElement><Flyer/><div>Flyer Design</div></SectionElement>
                    <SectionElement><Catalogue/><div>Catalogue Design</div></SectionElement>
                    <SectionElement><UI/><div>UI UX Design</div></SectionElement>
                    <SectionElement><Label/><div>Label Design</div></SectionElement>
                    <SectionElement><IdCard/><div>ID Card Design</div></SectionElement>
                    <SectionElement><Leaflet/><div>Leaflet Design</div></SectionElement>
                    <SectionElement><Business/><div>Business Card Design</div></SectionElement>
                </SectionList>
            </SectionBlock>
        </Container>
        </>
    );
}

export default DesignService;
