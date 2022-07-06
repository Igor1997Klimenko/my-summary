import styled from 'styled-components';

export const ExperienceFrontend = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px){
        gap: 1rem;
    }
`;

export const ExperienceFrontendBlock = styled.div`
    background: #2c2c6c;
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: all 400ms ease;

    &:hover{
        background: transparent;
        border-color: rgba(77, 181, 255, 0.4);
        cursor: default;
    }

    @media screen and (max-width: 1024px){
        width: 80%;
        padding: 2rem;
        margin: 0 auto;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        padding: 2rem 1rem;
    }
`;

export const Developer = styled.h3`
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
`;

export const ExperienceContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;

    @media screen and (max-width: 1024px){
        padding: 1rem;
    }
`;

export const ExperienceDetails = styled.article`
    display: flex;
    gap: 1rem;
`;

export const ExperienceIcon = styled.div`
    margin-top: 6px;
    color: var(--color-primary);
`;