import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: #fff;
    display: ${({isOpen}) => (isOpen ? 'grid' : 'none')};
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    bottom: ${({isOpen}) => (isOpen ? '0' : '100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #000;

    &:hover {
        color: #FCA311;
        transition: 0.2s ease-in-out;
    }
`

export const Icon = styled.div`
    padding: 10px 2.5px;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #000;
    max-width: 100vw;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media and screen(max-width: 466px) {
        grid-template-rows: repeat(4, 60 px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s easi-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #FCA311;
        transition: 0.2s ease-in-out;
    }
`