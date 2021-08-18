import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.05), 0 4px 24px 0 rgba(0,0,0,.1);


    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-wdith: 1100px;
`

export const NavLogo = styled(LinkRouter)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;

    span {
        color: #0466c8;
    }
`

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: #242424;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1vw;
    height: 100%;
    cursor: pointer;
    margin: 0px 10px;
    font-weight: 500;
    letter-spacing: .4px;    

    &.active {
        border-bottom: 3px solid #FCA311;
    }
`

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const IconButton = styled.a`
    display: flex;
    align-items: center;
    padding: 0 1vw;
    height: 100%;
    cursor: pointer;
    font-size: 1.8rem;
`