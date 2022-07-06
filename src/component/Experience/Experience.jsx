import s from '../Global.module.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { ExperienceFrontend, ExperienceFrontendBlock, Developer, ExperienceContent, ExperienceIcon, ExperienceDetails } from './Experience.styles';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Me Experience</h2>

      <ExperienceFrontend className={s.container}>
        <ExperienceFrontendBlock>
          <Developer>Frontend Development</Developer>
          <ExperienceContent>
            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              
              <div>
                <h4>HTML</h4>
                <small className={s.textLight}>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>CSS</h4>
                <small className={s.textLight}>Intermediate</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>JavaScript</h4>
                <small className={s.textLight}>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>Redux/Redux toolkit</h4>
                <small className={s.textLight}>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>React</h4>
                <small className={s.textLight}>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>Bootstrap</h4>
                <small className={s.textLight}>Experienced</small>
              </div>
            </ExperienceDetails>
          </ExperienceContent>
        </ExperienceFrontendBlock>


        <ExperienceFrontendBlock>
          <Developer>Backend Development</Developer>
            <ExperienceContent>
            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>Node JS</h4>
                <small className={s.textLight}>Experienced</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>MongoDB</h4>
                <small className={s.textLight}>Intermediate</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>PHP</h4>
                <small className={s.textLight}>Intermediate</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>MySQL</h4>
                <small className={s.textLight}>Basic</small>
              </div>
            </ExperienceDetails>

            <ExperienceDetails>
              <ExperienceIcon>
                <BsPatchCheckFill />
              </ExperienceIcon>
              <div>
                <h4>Python</h4>
                <small className={s.textLight}>Experienced</small>
              </div>
            </ExperienceDetails>

          </ExperienceContent>
        </ExperienceFrontendBlock>
      </ExperienceFrontend>
    </section>
  )
}

export default Experience