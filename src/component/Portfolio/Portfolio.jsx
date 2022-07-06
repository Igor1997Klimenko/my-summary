import s from '../Global.module.css';
import { PortfolioContainer, PortfolioItem, PortfolioImages, PortfolioText, PortfolioCTA } from './Portfolio.styles';
import IMG1 from '../../images/portfolio1.jpg';
import IMG2 from '../../images/portfolio2.jpg';
import IMG3 from '../../images/portfolio3.jpg';
import IMG4 from '../../images/portfolio4.jpg';
import IMG5 from '../../images/portfolio5.png';
import IMG6 from '../../images/portfolio6.jpg';

const Portfolio = () => {
  const PrimaryBtn = s.btn + ' ' + s.btnPrimary;

  return (
    <section id='portfolio'>
      <h5>Me Recent Work</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer className={s.container }>
        <PortfolioItem>
          <PortfolioImages>
            <img src={IMG1} alt="IMG1" />
          </PortfolioImages>
          <PortfolioText>This is a portfolio title</PortfolioText>
          <PortfolioCTA>
            <a href="https://github.com" className={s.btn} target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className={PrimaryBtn} target='_blank' rel="noreferrer">Live Demo</a>
          </PortfolioCTA>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImages>
            <img src={IMG2} alt="IMG2" />
          </PortfolioImages>
          <PortfolioText>This is a portfolio title</PortfolioText>
          <PortfolioCTA>
            <a href="https://github.com" className={s.btn} target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className={PrimaryBtn} target='_blank' rel="noreferrer">Live Demo</a>
          </PortfolioCTA>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImages>
            <img src={IMG3} alt="IMG3" />
          </PortfolioImages>
          <PortfolioText>This is a portfolio title</PortfolioText>
          <PortfolioCTA>
            <a href="https://github.com" className={s.btn} target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className={PrimaryBtn} target='_blank' rel="noreferrer">Live Demo</a>
          </PortfolioCTA>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImages>
            <img src={IMG4} alt="IMG4" />
          </PortfolioImages>
          <PortfolioText>This is a portfolio title</PortfolioText>
          <PortfolioCTA>
            <a href="https://github.com" className={s.btn} target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className={PrimaryBtn} target='_blank' rel="noreferrer">Live Demo</a>
          </PortfolioCTA>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImages>
            <img src={IMG5} alt="IMG5" />
          </PortfolioImages>
          <PortfolioText>This is a portfolio title</PortfolioText>
          <PortfolioCTA>
            <a href="https://github.com" className={s.btn} target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className={PrimaryBtn} target='_blank' rel="noreferrer">Live Demo</a>
          </PortfolioCTA>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImages>
            <img src={IMG6} alt="IMG6" />
          </PortfolioImages>
          <PortfolioText>This is a portfolio title</PortfolioText>
          <PortfolioCTA>
            <a href="https://github.com" className={s.btn} target='_blank' rel="noreferrer">Github</a>
            <a href="https://dribble.com/Alien_pixels" className={PrimaryBtn} target='_blank' rel="noreferrer">Live Demo</a>
          </PortfolioCTA>
        </PortfolioItem>
      </PortfolioContainer>
    </section>
  )
}

export default Portfolio