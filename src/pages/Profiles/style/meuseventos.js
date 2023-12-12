import styled from "styled-components";
export const EvtConteiner =  styled.div`
    width: fit-content;
    height: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 auto;
`
export const Main = styled.main` 
    position: absolute;
    top: 50%;
    left: 50%;
    transition: translate(-50%, -50%);
    /* display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    margin-top:  10%;
    h2{
        font-size: 1.2rem;
        padding-left: 20px;
    }
    @media(min-width: 1024px){
        margin-top:  160%;
        width: 100vw;
        height:100%;
        h2{
        font-size: 1.2rem;
        padding-left: 15%;
        }
    } */
`