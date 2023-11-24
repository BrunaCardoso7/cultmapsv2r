import styled from "styled-components";


export const ProfilerConteiner = styled.div`
    padding-top: 60px;
    display: grid;
    grid-template-columns: 1fr 2fr;
`
export const Body = styled.body`
    width: 100vw;
    height: 100vh;
    background-color: white;
`
export const Aside = styled.aside`
    background-color: #FFFFFF;
    position: fixed;    
    top: 0;
    left:0;
    height: 100vh;
    width: 20vw;
    padding-top: 100px;
    h2{
        padding-left: 30px;
        color: rgb(96, 96, 96);
        font-size: 1.2em;
        font-weight: 500;
        text-align: start;
    }
`
export const MenuButton = styled.button`
    padding: 15px 20px;
    border: none;
    border-radius: 14px;
    color: rgb(66, 66, 66);
    text-align: start;
    font-weight: ${(props)=> props.clicked? "600" : "400" };
    background-color: ${(props)=> props.clicked? "rgb(242, 242, 242)" : "#FFFFFF"}
`
export const NavProfiler = styled.div`
    padding-top: 20px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
`
export const PerfilProfile = styled.div`

`