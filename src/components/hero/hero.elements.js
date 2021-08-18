/* eslint-disable */

import styled, { keyframes } from 'styled-components'
import {
    MdArrowDownward,
    MdKeyboardArrowDown,
} from 'react-icons/md'

const elasticus = keyframes`
    0% {
        -webkit-transform-origin: 0% 0%;
        -ms-transform-origin: 0% 0%;
        -moz-transform-origin: 0% 0%;
        -o-transform-origin: 0% 0%;
        transform-origin: 0% 0%;
        -webkit-transform: scale(1, 0);
        -ms-transform: scale(1, 0);
        -moz-transform: scale(1, 0);
        -o-transform: scale(1, 0);
        transform: scale(1, 0);
    }
    50% {
        -webkit-transform-origin: 0% 0%;
        -ms-transform-origin: 0% 0%;
        -moz-transform-origin: 0% 0%;
        -o-transform-origin: 0% 0%;
        transform-origin: 0% 0%;
        -webkit-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -moz-transform: scale(1, 1);
        -o-transform: scale(1, 1);
        transform: scale(1, 1);
    }
    50.1% {
        -webkit-transform-origin: 0% 100%;
        -ms-transform-origin: 0% 100%;
        -moz-transform-origin: 0% 100%;
        -o-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
        -webkit-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -moz-transform: scale(1, 1);
        -o-transform: scale(1, 1);
        transform: scale(1, 1);
    }
    100% {
        -webkit-transform-origin: 0% 100%;
        -ms-transform-origin: 0% 100%;
        -moz-transform-origin: 0% 100%;
        -o-transform-origin: 0% 100%;
        transform-origin: 0% 100%;
        -webkit-transform: scale(1, 0);
        -ms-transform: scale(1, 0);
        -moz-transform: scale(1, 0);
        -o-transform: scale(1, 0);
        transform: scale(1, 0);
    }

`

export const HeroContainer = styled.div`
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: calc(100vh - 80px);
    position: relative;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

`

export const HeroContent = styled.div`
    margin-top: -80px;
    position: absolute;
`

export const HeroH1 = styled.h1`
    font-size: 60px;
    text-align: center;
	text-transform: uppercase;
    font-size: calc(1.5vw + 1.5vh + 2.8vmin);
    font-weight: 500;
    white-space: nowrap;
    
    &:after{
		content: 'Arief Rahman Y';
		font-size: calc(1.5vw + 1.5vh + 2.8vmin);
		margin-left: 3%;
        background: #ddd6f3; 
        background: #00B4DB;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


		-webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}

`

export const HeroP = styled.p `
    color: #242424;
    margin-right: -3%;
    font-size: 1.7rem;
    font-size: calc(.8vw + .8vh + .1vmin);
	text-transform: uppercase;
    font-weight: 400;
    text-align: right;
    letter-spacing: calc(.1vw + .1vh + .1vmin);
`

export const HeroButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: bottom;
    bottom: 5vh;
`

export const HeroButtonText = styled.p `
    color: #242424;
    font-size: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 488px) {
        font-size: .8rem;
    }
`

export const Arrow = styled(MdArrowDownward)`
    font-size: 32px;
    color: #0466c8;
    transition: ${elasticus};
` 

export const ArrowDown = styled(MdKeyboardArrowDown)`
    font-size: 32px;
    color: #0466c8;
    transition: ${elasticus};

`