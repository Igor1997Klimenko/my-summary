import styled from 'styled-components';

export const HomeProject = styled.header`
    height: 100vh;
    padding-top: 7rem;
    overflow: hidden;

    @media screen and (max-width: 1024px){
        height: 68vh; 
    }

    @media screen and (max-width: 600px){
        height: 100vh; 
        padding-top: 4rem;
    }
`;

export const HeaderContainer = styled.div`
    text-align: center;
    height: 100%;
    position: relative;
`;

// CTA

export const CTA = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
`;

// SOCIALS

export const SocialsIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    &:after{
        content: '';
        width: 1px;
        height: 2rem;
        background: var(--color-primary);
    }

    @media screen and (max-width: 600px){
        display: none;
    }
`;

// ME

export const MyFoto = styled.div`
background: linear-gradient(var(--color-primary),transparent);
    width: 20rem;
    height: auto;
    position: absolute;
    left: calc(50% - 10rem);
    margin-top: 4rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 5rem 1.5rem 1.5rem 1rem;
`;

// SCROLL DOWN

export const SrollDOwn = styled.a`
    position: absolute;
    right: -2.5rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;

    @media screen and (max-width: 600px){
        display: none;
    }
`;

/* =========== MEDIA QUERIES (SMALL DEVICES) ============ */

