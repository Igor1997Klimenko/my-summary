import styled from 'styled-components';

export const FooterSite = styled.footer`
    background: var(--color-primary);
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;
`;

export const FooterLink = styled.a`
    color: var(--color-bg);
    display: inline-block; 
`;

export const FooterLogo = styled.a`
color: var(--color-bg);
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block; 
`;

export const PermaLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    gap: 2rem;
    margin: 0 auto 3rem;

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const FooterSocials = styled.div`
    display: flex;
    justify-content: center; 
    gap: 1rem;
    margin-bottom: 4rem;

    @media screen and (max-wedth: 768px){
        margin-bottom: 2.6rem;
    }
`;

export const FooterSocialsLink = styled.a`
    color: var(--color-white);
    display: flex; 
    background: var(--color-bg);
    padding: 0.8rem;
    border-radius: 0.7rem;
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover{
        background: transparent;
        color: var(--color-bg);
        border-color: var(--color-bg);
    }
`;

export const FooterCopyright = styled.div`
    color: var(--color-bg);
    margin-bottom: 4rem;
`;