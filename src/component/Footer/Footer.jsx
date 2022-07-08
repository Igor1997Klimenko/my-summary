import { BsTelegram, BsInstagram } from "react-icons/bs";
import { FooterSite, FooterLink, FooterLogo } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterSite>
      <FooterLogo href="#">EGATOR</FooterLogo>

      <ul>
        <li><FooterLink href="#">Home</FooterLink></li>
        <li><FooterLink href="#about">About</FooterLink></li>
        <li><FooterLink href="#experience">Experience</FooterLink></li>
        <li><FooterLink href="#services">Services</FooterLink></li>
        <li><FooterLink href="#portfolio">Portfolio</FooterLink></li>
        <li><FooterLink href="#testimonials">Testimonials</FooterLink></li>
        <li><FooterLink href="#contact">Contact</FooterLink></li>
      </ul>

      <div>
        <FooterLink href="https://t.me/jwigor097"><BsTelegram/></FooterLink>
        <FooterLink href="https://instagram.com/jwigor97?igshid=YmMyMTA2M2Y="><BsInstagram/></FooterLink>
      </div>

      <div>
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </FooterSite>
  )
}

export default Footer