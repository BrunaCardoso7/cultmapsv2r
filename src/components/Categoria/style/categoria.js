import styled from 'styled-components'

export const ConteinerMenu = styled.div`
    margin-top: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 30px;
`
export const Select = styled.select`
    padding: 5px 15px;
    border-radius: 10px;
    background-color: transparent;
`
export const ConteinerCategoria = styled.div`
    width: 50vw;
    display: flex;
    white-space: nowrap;
    overflow-x: hidden;
    user-select: none;
    cursor: grab;

`
export const ButtonCategoria = styled.button`
    display: inline-block;
    border: none;
    padding: 2px 20px;
    border-radius: 24px;
    background-color: transparent;
    margin: 0 5px; /* Adapte conforme necessário */
    :hover {
        transition: .3s;
        background-color: rgb(255, 115, 0);
        color: white;
    }
`