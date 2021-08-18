import styled from 'styled-components'

export const ProfileContainer = styled.div`
    height: calc(100vh - 80px);
    padding: 20px;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`

export const ProfileDescription = styled.div`
    padding: 20px;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`

export const Description = styled.h2`
    max-width: 80%;
    font-size: 1.8rem;
    letter-spacing: 1px;
    line-height: 2.7rem;
    text-align: center;
    font-weight: 300;

    q {
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
        line-height: 2rem;
        letter-spacing: 0.1;
    }

    @media screen and (max-width: 468px) {
        font-size: 1rem;
    }

`

export const ProfilePicture = styled.div`
    padding: 20px;
    width: 40%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        height: fit-content;
    }
    `
    
export const PictureName = styled.h2`
    font-size: 3rem;
    color: #000;
    font-weight: 300;

    span {
        color: #0466c8;
        font-weight: 700;
    }

    @media screen and (max-width: 468px) {
        font-size: 2rem;
    }
`

export const Picture = styled.img`
    max-height: 30vh;
    max-width: auto;

    @media screen and (max-width: 768px) {
        max-height: 30vh;
    }
`

export const PicturePDF = styled.a`
    padding: 8px 12px;
    margin-top: 24px;
    font-size: 1rem;
    color: #0466c8;
    border: 1.2px solid #0466c8;
    border-radius: .4rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #0466c8;
        color: #fff;
        transition: all .3s ease-in-out;
    }
`