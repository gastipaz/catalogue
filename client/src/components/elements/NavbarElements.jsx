import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {NavHashLink} from 'react-router-hash-link'


export const Nav = styled.nav`
    position: absolute;
    width: 100%;
    max-width: 100vw;
    background: #8e5bf5;
    top: 0;
    height: 60px;
    justify-content: center;
    align-items: center;
    z-index: 100;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
`

export const NavbarContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 60px;
    z-index: 1;
    width: 100%;
    /* padding: 0 24px; */
    max-width: 100%;
`
export const NavLogo = styled(Link)`
    color: #fce77e;
    text-decoration: none;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    width: fit-content;
    height: 60px;
    font-family: Montserrat;
    transition: all 0.2s ease-in-out;

    &.active {
        color: white;
        font-size: 20px;
        transition: all 0.2s ease-in-out;
    }
    
    &:hover {
        color: black;
        transition: all 0.2s ease-in-out;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    list-style: none;
    margin-left: auto;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavLink = styled(Link)`
    color: #fce77e;
    display: flex;
    font-family: Montserrat;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 60px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &.active {
        color: white;
        font-size: 20px;
        transition: all 0.2s ease-in-out;
    }
    
    &:hover {
        color: black;
        transition: 0.2s ease-in-out;
    }
`
export const ScrollLink = styled(NavHashLink)`
    color: #fce77e;
    display: flex;
    font-family: Montserrat;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 60px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &.active {
        color: white;
        font-size: 20px;
        transition: all 0.2s ease-in-out;
    }
    
    &:hover {
        color: black;
        transition: 0.2s ease-in-out;
    }
`
export const MobileIcon = styled.div`
    display: none;
    align-items: center;
    width: fit-content;


    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: -10px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fce77e;
    }

    &:hover {
        color: black;
        }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`