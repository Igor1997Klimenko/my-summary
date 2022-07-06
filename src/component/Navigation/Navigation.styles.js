import styled from 'styled-components';

export const NavContent = styled.nav`
    background: rgba(0, 0, 0, 0.3);
    width: max-content;
    display: flex;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    bottom: 2rem;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
`;

export const NavLink = styled.a`
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 400ms ease;

    &:hover{
        background: rgba(0, 0, 0, 0.3);
    }

`;
