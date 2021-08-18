import styled from 'styled-components'

export const Header = styled.h1`
    margin-bottom: 10px;
    margin-inline: auto;
    padding: 0 20px;
    display: flex;
    height: 80px;
    width: fit-content;
    align-items: center;
    font-size: 3rem;
    color: #000;
    border-bottom: 5px solid #0466c8; 
    text-transform: uppercase;
    letter-spacing: 2px;
    background: #f7fafc;

    @media screen and (max-width: 768px) {
        font-size: 2.4rem;
        letter-spacing: 1.4px;
    }

    @media screen and (max-width: 468px) {
        font-size: 1.8rem;
        letter-spacing: 1px;
    }
`

export const Container = styled.div`
    height: calc(100% - 90px);
    width: 100%;
    display: flex;

    @media screen and (max-width: 768px) {
        min-height: calc(100% - 90px);
        flex-direction: column;
    }
`