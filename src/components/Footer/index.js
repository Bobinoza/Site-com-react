import React from 'react';
import { animateScroll as scroll } from 'react-scroll'; // 3:33:00 Básicamente é para dar um efeito bacana quando clicamos na logo e a página sobe.
import { FaFacebook,  FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {  
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  // Função que faz a page subir ao clicar na logo.
  const toggleHome = () => { 
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © 
              {new Date().getFullYear()}
              All rights reserved.
            </WebsiteRights>
            <SocialIcons>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink 
                href="/" 
                target="_blank" 
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>

            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
