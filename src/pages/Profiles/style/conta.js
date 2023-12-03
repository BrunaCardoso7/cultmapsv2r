import styled from "styled-components";

export const ContaConteiner = styled.div`
    margin-top: -90px;
    padding-bottom: 20px;
    /* margin-left: 25vw; */
    width:100vw;
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
export const AboutUser = styled.div`
    margin-top: 50px;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    background-color: transparent;
    width: 60vw;
    padding: 20px;
    display: flex;rgb(66, 66, 66)
    flex-direction: column;
    align-items: start;
    h3{
        color:  black; 
        font-weight: 500;
       padding: 20px 0;
    }
    h4{
        color:  black; 
        font-weight: 500;
        padding: 5px 0;
    }
    p{
        padding: 5px;
        text-align: justify;
        color: rgb(66, 66, 66); 
    }
`
export const EditButton = styled.button`
    border-radius: 14px;
    border: none;
    padding: 10px 30px;
    background-color:  rgb(255, 115, 0);
    color: white;
    font-weight: 500;
    margin: 20px 0;
    
`