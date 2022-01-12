import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavToggler = styled.div`
    position: absolute;
    display: block;
    color: ${({ navbar }) => (navbar ? "#fff" : "#000")};
    top: 3rem;
    left: 2rem;
    font-size: 1.8rem;
    transition: .25 ease-out;
    z-index: 2000;
    &:hover {
        cursor: pointer;
        color: red;
    }
    @media screen and (min-width: 516px){
        display: none;
    }
`;

export const Nav = styled.nav`
    position: fixed;
    top: ${({ navbar }) => (navbar ? "0" : "-100vh")};
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
    transition: .4s ease-out;
    @media screen and (min-width: 516px){
        top: 0;
        height: 8rem;
    }
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 116rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5vh 3rem; 
    @media screen and (min-width: 516px){
        margin-top: 0;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem; 
    }
`;

export const NavLink = styled(Link)`
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    color: #f1f1f1;
    padding: 1rem 2rem;
    &:hover{
        color: red;
    }
    &.active{
        color: aqua;
    }
    @media screen and (min-width: 516px){
        padding: 0 2rem;
    }
`;

export const NavSpan = styled.span`
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    color: #f1f1f1;
    padding: 1rem 2rem;
    &:hover{
        color: red;
    }
    &.active{
        color: aqua;
    }
    @media screen and (min-width: 516px){
        padding: 0 2rem;
    }
`;