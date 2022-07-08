import styled from 'styled-components';

export const ContactContainer = styled.div`
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12%;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    @media screen and (max-width: 768px){
        width: var(--container--width-ms);
    }
`;

export const ContactSprite = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const ContactOptions = styled.article`
    
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover{
        background: transparent;
        border-color: var(--color-primary-variant);
    }
`;

export const ContactIcon = styled.div`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const ContactLink = styled.a`
    margin: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
`;

// Form

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const ContactInput = styled.input`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
`;

export const ContactTextarea = styled.textarea`
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
`;