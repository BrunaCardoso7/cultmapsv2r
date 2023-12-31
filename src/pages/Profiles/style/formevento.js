import styled from "styled-components";

export const ConteinerPage = styled.div`
    margin: 0px auto;
    margin-top: 80px;
    width:100vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{ 
        text-align: start;
        margin-left: 20px;
        color: rgb(66, 66, 66);
    }
    form{
        display: flex;
        flex-direction: column;
    }
    @media(min-width: 1024px){
        margin: 0px auto;
        margin-top: -80px;
        width:100vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{ 
            text-align: start;
            margin-left: 20px;
            color: rgb(66, 66, 66);
        }
        form{
            display: flex;
            flex-direction: column;
        }
    }
` 
