import React from 'react';
import Cv from '../../../images/cv.pdf';
import s from '../../Global.module.css';
import { CTA } from '../Header.styles';

const BtnHeader = () => {
    const classTwo = s.btn + ' ' + s.btnPrimary;
  return (
    <CTA>
          <a href={Cv} className={s.btn}>Download CV</a>
          <a href="#contact" className={classTwo}>Let's Talk</a>
    </CTA>
  )
}

export default BtnHeader