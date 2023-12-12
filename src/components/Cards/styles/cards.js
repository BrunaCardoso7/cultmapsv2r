import styled from 'styled-components'

export const ConteinerCards = styled.div`
    margin:  auto;
    width: fit-content;

    height: max-content;
    display: flex;
    flex-direction: column;
    h2{
        color: rgb(74, 74, 74);
        margin-bottom: 30px;
        text-align: start;
        font-size: 1.3rem;
        margin-left: 10px;
    }
    
`
export const EventosCont = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 auto;
`