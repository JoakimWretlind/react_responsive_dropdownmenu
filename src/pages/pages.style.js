import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.h1`
    font-family: 'montserrat', sans-serof;
    font-size: clamp(2rem, 10vw, 14rem);
    letter-spacing: clamp(.1rem, 2vw, .5rem);
    text-transform: uppercase;
`;