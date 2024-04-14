import React from 'react';
import './Footer.scss';
import { Container } from 'react-bootstrap';
import { ReactComponent as FacebookLogo } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramLogo } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/icons/linkedin.svg';
import { ReactComponent as PinterestLogo } from '../../assets/icons/pinterest.svg';
import { ReactComponent as TelegramLogo } from '../../assets/icons/telegram.svg';
import { ReactComponent as TikTokLogo } from '../../assets/icons/tiktok.svg';
import { ReactComponent as WeChatLogo } from '../../assets/icons/wechat.svg';
import { ReactComponent as XLogo } from '../../assets/icons/x.svg';
import { ReactComponent as YouTubeLogo } from '../../assets/icons/youtube.svg';



const Footer = () => {
    return (
        <footer className='footer'>
            <Container className='footer-container'>
                <div className='underline'>
                </div>
                <h3 className='footer__title text-center'>Follow us for more updates</h3>
                <div className='footer__socials'>

                    <a href='#' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <FacebookLogo></FacebookLogo>
                    </a>
                    <a href='https://ae.linkedin.com/in/supporters-dubai-194522303' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <LinkedInLogo></LinkedInLogo>
                    </a>
                    <a href='https://t.me/971555561505' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <TelegramLogo></TelegramLogo>
                    </a>
                    <a href='#' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <WeChatLogo></WeChatLogo>
                    </a>
                    <a href='https://www.instagram.com/supporter_ae?igsh=cjV1M2Z3eXhsYXo5' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <InstagramLogo></InstagramLogo>
                    </a>
                    <a href='https://youtube.com/@Supporter_ae?si=wgQh0I6r3Is768Eo' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <YouTubeLogo></YouTubeLogo>
                    </a>
                    <a href='https://www.pinterest.com/supporterdubai/' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <PinterestLogo></PinterestLogo>
                    </a>
                    <a href='https://www.tiktok.com/@supporter_ae?_t=8lSsMARAJo8&_r=1' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <TikTokLogo></TikTokLogo>
                    </a>
                    <a href='https://x.com/Supporter_ae?t=1QFev_tH6Wdq2fMh2Qp5DA&s=09' target="_blank" rel="noopener noreferrer" className='footer__social'>
                        <XLogo></XLogo>
                    </a>
                </div>
            </Container>
            <div className='footer-copyright'>
                <Container >
                    <div className='footer-copyright__text'>
                        <span>Copyright © 2024 supporter.ae</span>
                        <span>Powered by supporter.ae</span>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
