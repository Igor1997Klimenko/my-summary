import s from '../Global.module.css';
import { BsCheck2All } from "react-icons/bs";
import { ServicesContainer, ColumnArt, ServicesHead, ServicesZag, ServicesList, ServicesItem, ServicesIcon, ServicesText } from './Services.styles';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <ServicesContainer className={s.container }>
        <ColumnArt>
          <ServicesHead>
            <ServicesZag>UI/UX Design</ServicesZag>
          </ServicesHead>

          <ServicesList>
            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

          </ServicesList>
        </ColumnArt>

        <ColumnArt>
          <ServicesHead>
            <ServicesZag>Web Development</ServicesZag>
          </ServicesHead>

          <ServicesList>
            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>
          </ServicesList>
        </ColumnArt>

        <ColumnArt>
          <ServicesHead>
            <ServicesZag>Content Creation</ServicesZag>
          </ServicesHead>

          <ServicesList>
            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

            <ServicesItem>
              <ServicesIcon>
                <BsCheck2All />
              </ServicesIcon>
              <ServicesText>Lorem ipsum dolor, sit amet consectetur adipisicing elit</ServicesText>
            </ServicesItem>

          </ServicesList>
        </ColumnArt>
      </ServicesContainer>
    </section>
  )
}

export default Services;