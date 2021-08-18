import styled from 'styled-components'

export const PortfolioContainer = styled.div`
    width: calc(100vw - 20px);
    padding: 20px;
    background: #f7fafc;
`

export const ItemContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
    
export const PortfolioItem = styled.div`
    flex: 40%;
    margin: 10px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
    border-radius: .5rem;
    
    @media screen and (max-width: 688px) {
        flex: 100%;   
    }
`
    
export const PortfolioImage = styled.div`
    margin-top: 20px;
    border-radius: .4rem;
    height: 300px;
    background-image: url('${({background}) => (background) ? background : ''}');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: inherit center;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: .5;
        transition: 0.3s ease-in-out;
    }
`

export const PortfolioName = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    opcity: .5;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
`

export const ItemContainerTools = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: inherit;
    width: 100%;
`

export const Item = styled.div`
    flex: 10%;
    margin: 10px;
    padding: 10px;
    background: #0466c8;
    border-radius: .5rem;
    text-align: center;
    color: #fff;
`

