import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail} from "react-icons/bi";
import { NavContent, NavLink } from "./Navigation.styles";
import s from '../Global.module.css';
import { useState } from "react";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <NavContent>
      <NavLink href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? s.LinkActive : ''}><AiOutlineHome /></NavLink>
      <NavLink href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? s.LinkActive : ''}><AiOutlineUser/></NavLink>
      <NavLink href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? s.LinkActive : ''}><BiBook/></NavLink>
      <NavLink href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? s.LinkActive : ''}><RiServiceLine/></NavLink>
      <NavLink href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? s.LinkActive : ''}><BiMessageSquareDetail/></NavLink>
    </NavContent>
  )
}

export default Navigation