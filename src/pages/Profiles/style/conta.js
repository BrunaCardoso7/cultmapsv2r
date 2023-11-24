import styled from "styled-components";

export const ContaConteiner = styled.div`
    position: fixed;
    right:0;
    width:79vw;
    min-height: 100vh;
    height: max-content;
    background-color: ;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const BackgroundConteiner = styled.div`
    margin-top: 10px;
    background-color: gray;
    width: 80%;
    height: 25vh;
    border-radius: 14px;
    position: relative; 
    img{
        width: 100%;
        height: 100%;
        border-radius: 14px;
    }
`
export const ImageConteiner = styled.div`
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 100%;
    position: absolute;
    top: 35%;
    left: 2%;

    img{
        width: 100%;
        height: 100%;
    }
`
export const InfomationUser = styled.div`
    margin-top: 20px;
    width: 80%;
    background-color: transparent;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 35px;
    h2{
        font-weight: 400;
        color: rgb(255, 115, 0);
    }
    h3{
        font-weight: 300;
        color: gray;
    }
`