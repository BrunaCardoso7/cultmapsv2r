import styled from "styled-components";

export const Body = styled.div`
    margin-top: 120px;
    background-color: white !important;
    width: 100vw;
    height: max-content;
    position: relative;
    display: flex;
    flex-direction: column;
    img{
        width: 80%;
        border-radius: 0 0 10px 10px;
    }
    h1{
        margin: 30px 0; 
    }
`
export const ConteinerText = styled.div`
    margin: 20px 0;
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    h3{
        color: rgb(44, 58, 87);
    }
    span{
        font-weight: 400;
    }
    p{
        margin: 10px 0 50px 0;
        text-align: justify;
    }
`

export const Main = styled.main`
    height: 100%;
    width: 100vw;
    position: relative;
`
export const Section = styled.section`
    height: max-content;
`   