import styled from "styled-components";
import LaunchIcon from '@mui/icons-material/Launch';

export const OpenMenu = styled(LaunchIcon)({
    marginLeft: "90%",
    position: "absolute",
    top: "8%",
    left: "10%",
    backgroundColor: "gray",
    fontSize: "3rem !important",
    padding: "5px",
    color: "white" ,
    '@media (min-width: 1024px)': {
        top: "9%",
    }

})
export const ProfilerConteiner = styled.div`
    padding-top: 30px;
    @media(min-width: 1024px){ 
        padding-top: 130px;
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`
export const Body = styled.body`
    width: 100vw;
    overflow-x: hidden;
    background-color: white;
`
export const Aside = styled.aside`
    display: ${(props)=>(props.view? 'block': 'none')};
    background-color: #FFFFFF;
    position: fixed;    
    top: 0;
    left:0;
    height: 100vh;
    width: 60vw;
    padding-top: 100px;
    box-shadow: 0 0 5px gray;
    padding-right: 10px;
    z-index: 999;
    h2{
        padding-left: 30px;
        color: rgb(96, 96, 96);
        font-size: 1.2em;
        font-weight: 500;
        text-align: start;
    }
    @media(min-width: 1024px){
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
    }
`
export const MenuButton = styled.button`
    padding: 15px 20px;
    border: none;
    width: 100%;
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