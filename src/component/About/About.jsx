import Me from '../../images/me-about.jpg';
import { BsFillAwardFill, BsFillPersonLinesFill, BsFolderSymlinkFill } from "react-icons/bs";
import { AboutContainer, AboutMe, AboutMeImage, AboutCard, AboutCards, AboutIcon, ParagraphFive, AboutcardSmall, ContentParagraph, AboutContent } from './About.styles';
import s from '../Global.module.css';

const About = () => {

  const classTwo = s.btn + ' ' + s.btnPrimary;
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <AboutContainer className={s.container}>
        <AboutMe>
          <AboutMeImage>
            <img src={Me} alt="" />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutCards>
            <AboutCard>
                <AboutIcon>
                  <BsFillAwardFill />
                </AboutIcon>
              <ParagraphFive>Experience</ParagraphFive>
              <AboutcardSmall>3 + Ears Working</AboutcardSmall>
            </AboutCard> 

            <AboutCard>
                <AboutIcon>
                  <BsFillPersonLinesFill />
                </AboutIcon>
              <ParagraphFive>Clients</ParagraphFive>
              <AboutcardSmall>200 + Worlwide</AboutcardSmall>
            </AboutCard> 

            <AboutCard>
                <AboutIcon>
                  <BsFolderSymlinkFill />
                </AboutIcon>
              <ParagraphFive>Project</ParagraphFive>
              <AboutcardSmall>80 + Completed</AboutcardSmall>
            </AboutCard> 
          </AboutCards>
          <ContentParagraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum labore porro rerum dolor maxime aperiam ut quod, eligendi itaque enim consectetur pariatur nobis ipsam, id adipisci reiciendis odio praesentium voluptas.
          </ContentParagraph>
          <a href="#contact" className={classTwo}>Let's Talk</a>
        </AboutContent>
      </AboutContainer>
    </section>
  )
}

export default About