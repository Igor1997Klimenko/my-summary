import styled from 'styled-components'; 

export const AboutContainer = styled.section`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        gap: 0;
    }
`; 

export const AboutMe = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
        45deg,
        transparent,
        #4db5ff,
        transparent
    );
    display: grid;
    place-items: center;

    @media screen and (max-width: 1024px){
        width: 50%;
        margin: 2rem auto 4rem;
    }

    @media screen and (max-width: 768px){
        width: 65%; 
        margin: 0 auto 3rem;
    }
`; 

export const AboutMeImage = styled.section`
    border-radius: 2rem;
    margin: 0;
    height: auto;
    overflow: hidden;
    transform: rotate(10deg);
    transition: all 400ms ease;

    &:hover{
        transform: rotate(0);
    }
`;

export const AboutCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        gar: 1rem;
    }
`;

export const AboutCard = styled.article`
    background: #2c2c6c;
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 400ms ease;

    &:hover{
        background: transparent;
        border-color: rgba(77, 181, 255, 0.4);
        cursor: default;
    }
`;

export const AboutIcon = styled.div`
    color: #4db5ff;
    font-size: 1.4rem;
    margin-bottom: 1rem;
`;

export const ParagraphFive = styled.h5`
    font-size: 0.95rem;
`;

export const AboutcardSmall = styled.small`
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
`;

export const ContentParagraph = styled.p`
    margin: 2rem 0 2.6rem;
    color: rgba(255, 255, 255, 0.6);

    @media screen and (max-width: 1024px){
        margin: 1rem 0 1.5rem;
    }

    @media screen and (max-width: 768px){
        margin: 1.5rem 0;
    }
`;

export const AboutContent = styled.div`
    @media screen and (max-width: 768px){
        text-align: center;
    }
`;