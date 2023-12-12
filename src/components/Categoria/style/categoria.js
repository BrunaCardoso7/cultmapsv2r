import styled from 'styled-components'

export const ConteinerMenu = styled.div`
    margin-top: 69px;
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background-color: white;
    width: 100vw;
    padding: 10px 0;
    @media(min-width: 1024px){
        position: fixed;
        top: 64px;
        left: 0;    
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 30px;
        background-color: white;
        width: 100vw;
        padding: 10px 0;
    }
`
export const Select = styled.select`
    padding: 5px 15px;
    border-radius: 10px;
    margin-right: 5%;
    width: 300px;
    background-color: transparent;
`
export const ConteinerCategoria = styled.div`
    display: none;
    @media(min-width: 1024px){
        display:block
        width: 60vw;
        display: flex;
        white-space: nowrap;
        overflow-x: hidden;
        user-select: none;
    }

`
export const ButtonCategoria = styled.button`
    display: inline-block;
    border: none;
    padding: 2px 20px;
    border-radius: 24px;
    background-color: transparent;
    margin: 0 5px; /* Adapte conforme necessário */
    cursor: pointer;
    &:hover {
        transition: .3s;
        background-color: rgb(255, 115, 0);
        color: white;
    }
`