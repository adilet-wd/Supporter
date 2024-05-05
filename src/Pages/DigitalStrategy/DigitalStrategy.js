import React from 'react';
import { Container } from 'react-bootstrap';
import './DigitalStrategy.scss';
import { ReactComponent as DigitalStrategyLogo } from '../../assets/icons/digital-strategy.svg';
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramLogo } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/icons/linkedin.svg';
import { ReactComponent as PinterestLogo } from '../../assets/icons/pinterest.svg';
import { ReactComponent as TelegramLogo } from '../../assets/icons/telegram.svg';
import { ReactComponent as TikTokLogo } from '../../assets/icons/tiktok.svg';
import { ReactComponent as WeChatLogo } from '../../assets/icons/wechat.svg';
import { ReactComponent as XLogo } from '../../assets/icons/x.svg';
import { ReactComponent as YouTubeLogo } from '../../assets/icons/youtube.svg';
import { ReactComponent as WhatsappLogo } from '../../assets/icons/whatsapp.svg';
import { Helmet } from 'react-helmet';

const DigitalStrategy = () => {
    return (
        <>
        <Helmet>
            <title>Supporter - Digital Strategy</title>
            <meta name="description" content="Supporter - Digital Strategy" />
        </Helmet>
        <Container className='section-container digital-container'>
            <div className='section__title'>
                <div className='section__logo'>
                    <DigitalStrategyLogo></DigitalStrategyLogo>
                </div>
                <div className='section__text'>
                    <h1>Digital Strategy</h1>
                    <div className='section__about'>
                        <p>A plan for leveraging online platforms to create an online presence and accomplish particular marketing goals is known as a digital marketing strategy. These channels may consist of your website, social media, paid advertisements, organic search, and other web-based platforms.</p>
                    </div>
                </div>
            </div>
            <div className='digital__block'>
                <div className='digital__socials'> 
                    <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <FacebookLogo></FacebookLogo>
                    </a>
                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <InstagramLogo></InstagramLogo>
                    </a>
                    <a href='https://x.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <XLogo></XLogo>
                    </a>
                    <a href='https://youtube.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <YouTubeLogo></YouTubeLogo>
                    </a>
                    <a href='https://www.pinterest.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <PinterestLogo></PinterestLogo>
                    </a>
                    <a href='https://www.tiktok.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <TikTokLogo></TikTokLogo>
                    </a>
                    <a href='https://wa.me/971555561505' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <WhatsappLogo></WhatsappLogo>
                    </a>
                    <a href='https://www.wechat.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <WeChatLogo></WeChatLogo>
                    </a>
                    <a href='https://ae.linkedin.com/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <LinkedInLogo></LinkedInLogo>
                    </a>
                    <a href='https://t.me/' target="_blank" rel="noopener noreferrer" className='digital__social'>
                        <TelegramLogo></TelegramLogo>
                    </a>
                </div>
            </div>
        </Container>
        </>
    );
}

export default DigitalStrategy;
