import styled from "styled-components";

export const Slide = styled.div`

    height: fit-content;
    display: flex;
    flex-direction: column;
    img{
        object-fit: fill;
        width: 100%;
    }
    @media(min-width: 1024px){
        img{
            width: 100vw;
            position: relative;
        }
    }
`

export const Descricao = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    position: static;
    margin: auto;
    width: 100vw;
    height: 15vh;
    justify-content: start;
    z-index: 999;
    @media(min-width: 1024px){
        background: linear-gradient(360deg, black 20%, transparent);
        position: absolute;
        top: 50%;
        height: 60vh;
    }
`
export const TextBox = styled.div`
        background-color:  transparent;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 10px;
        margin-left: 20px;
        width: 100vw;
        h1{
            text-align: start;
            color:rgb(255, 115, 0);
            font-size: .6em;
            text-shadow: 0 0 0 10px black;
        }span{
            margin-left: 200px;
            font-size: 1rem;
            width: max-content;
            color: white;
            text-shadow: 0 0 0 10px black;
            margin: auto;
            width: max-content;
        }   
        button{
            text-decoration: none;
            background-color: white;
            border-radius: 14px;
            font-weight: 500;
            font-size: 1em;
            color: rgb(255, 115, 0);
            padding: 5px 15px;
            width: 330px;
            border: none;
            button:hover{
            background-color: rgb(225, 83, 32);
            }
        }
    @media(min-width: 1024px){
        background-color:  transparent;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 30px;
        margin-left: 100px;
        h1{
            text-align: start;
            color:rgb(255, 115, 0);
            font-size: 1.5em;
            text-shadow: 0 0 0 10px black;
        }span{
            margin-left: 200px;
            font-size: 1em;
            color: white;
            text-shadow: 0 0 0 10px black;
            margin: auto;
            width: max-content;
        }   
        button{
            text-decoration: none;
            background-color: white;
            border-radius: 14px;
            font-weight: 500;
            font-size: 1em;
            color: rgb(255, 115, 0);
            padding: 5px 15px;
            width: 330px;
            border: none;
            button:hover{
            background-color: rgb(225, 83, 32);
            }
        }
    }
`