import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {NavHashLink} from 'react-router-hash-link'

export const BackgroundOpacity = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: ${({isOpen}) => (isOpen ? '80' : '-10')};
    background: black;
    opacity: ${({isOpen}) => (isOpen ? '0.5' : '0')};
    transition: opacity 0.2s ease-in-out;
`;

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 50%;
    height: 100%;
    background: #b48fff;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fce77e;

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-right: 20px;
`;

export const SidebarLink = styled(Link)`
    display: flex;
    font-family: Montserrat;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fce77e;
    cursor: pointer;
    margin: 20px;

    &:hover {
        color:#8e5bf5;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;
export const ScrollLink = styled(NavHashLink)`
    color: #fce77e;
    display: flex;
    font-family: Montserrat;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;
    margin: 20px;
    
    &:hover {
        color:#8e5bf5;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;