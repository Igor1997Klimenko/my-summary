import s from '../Global.module.css';
import BtnHeader from './BtnHeader/BtnHeader';
import Me from '../../images/me.png';
import HeaderSocials from './HeaderSocials/HeaderSocials';
import { HomeProject } from './Header.styles';
import { HeaderContainer, SrollDOwn} from './Header.styles';
import { MyFoto } from './Header.styles';

const Header = () => {
  return (
    <HomeProject>
      <HeaderContainer className={s.container }>
        <h5>Hello I'm</h5>
        <h1>Igor Klimenko</h1>
        <h5 className={s.textLight}>Frontend Developer</h5>
        <BtnHeader />
        <HeaderSocials/>
        <MyFoto>
          <img src={Me} alt="me" />
        </MyFoto>
        <SrollDOwn href="#contact" className=''>Scroll Dawn</SrollDOwn>
      </HeaderContainer>
    </HomeProject>
  )
}

export default Header