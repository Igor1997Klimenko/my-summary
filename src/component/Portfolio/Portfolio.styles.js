import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        gap: 1.2rem;  
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        gap: 1rem; 
    }
`;

export const PortfolioItem = styled.article`
    background: var(--color-bg-variant);
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover{
        border-color: var(--color-primary-variant);
        background: transparent;
    }
`;

export const PortfolioImages = styled.div`
    border-radius: 1.5rem;
    overflow: hidden;
`;

export const PortfolioText = styled.h3`
    padding: 1.2rem 0 2rem;
`;

export const PortfolioCTA = styled.h3`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;