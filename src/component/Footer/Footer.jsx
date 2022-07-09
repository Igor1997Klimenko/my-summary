import { BsTelegram, BsInstagram } from "react-icons/bs";
import { FooterSite, FooterLink, FooterLogo, PermaLinks, FooterSocials, FooterSocialsLink, FooterCopyright } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterSite>
      <FooterLogo href="#">EGATOR</FooterLogo>

      <PermaLinks>
        <li><FooterLink href="#">Home</FooterLink></li>
        <li><FooterLink href="#about">About</FooterLink></li>
        <li><FooterLink href="#experience">Experience</FooterLink></li>
        <li><FooterLink href="#services">Services</FooterLink></li>
        <li><FooterLink href="#portfolio">Portfolio</FooterLink></li>
        <li><FooterLink href="#testimonials">Testimonials</FooterLink></li>
        <li><FooterLink href="#contact">Contact</FooterLink></li>
      </PermaLinks>

      <FooterSocials>
        <FooterSocialsLink href="https://t.me/jwigor097"><BsTelegram/></FooterSocialsLink>
        <FooterSocialsLink href="https://instagram.com/jwigor97?igshid=YmMyMTA2M2Y="><BsInstagram/></FooterSocialsLink>
      </FooterSocials>

      <FooterCopyright>
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </FooterCopyright>
    </FooterSite>
  )
}

export default Footer