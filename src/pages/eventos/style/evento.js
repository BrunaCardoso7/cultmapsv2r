import styled from "styled-components";

export const Body = styled.body`
    width: 100vw;
    background-color: white !important;
    height: max-content;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;

    @media(min-width: 1024px){
        background-color: white !important;
        height: max-content;
        position: relative;
    }
`
export const Main = styled.main`
 margin-top: 80px;     
    width: 100vw;
    height: max-content;
@media(min-width: 1024px){
    margin-top: 150px;      
    width: 100vw;
    height:100%;
}
`
export const Section = styled.section`
    height: max-content;
`   