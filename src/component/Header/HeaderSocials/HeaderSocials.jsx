import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import '../../Global.module.css';
import { SocialsIcons } from "../Header.styles";

const HeaderSocials = () => {
  return (
    <SocialsIcons>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><AiFillGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
    </SocialsIcons>
  )
}

export default HeaderSocials