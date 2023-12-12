import {  useContext, useState } from "react"
import { UserContext } from "../../assets/UserProvider"
import { ProfilerConteiner, Body,NavProfiler, MenuButton, PerfilProfile, OpenMenu } from "./style/profile"
// import { Link } from "react-router-dom"
// import { Conta } from "./Conta"
import { Link, Routes } from "react-router-dom"
import styled from "styled-components"
import { FormEventos } from "./FormEventos"
import { Route } from "react-router-dom"
import Perfil from "../Perfil/Perfil"
import { MeusEventos } from "./MeusEventos"

const LinkedStyle = styled(Link)`
    text-decoration: none;
`
const Aside = styled.aside`
  transform: ${(props) => (props.view ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.2s ease-in-out;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60vw;
  padding-top: 100px;
  box-shadow: 0 0 5px gray;
  padding-right: 10px;
  h2 {
    padding-left: 30px;
    color: rgb(96, 96, 96);
    font-size: 1.2em;
    font-weight: 500;
    text-align: start;
  }
  @media (min-width: 1024px) {
    transform: ${(props) => (props.view ? 'translateX(0)' : 'translateX(-85%)')};
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 20vw;
    padding-top: 100px;
    h2 {
      padding-left: 30px;
      color: rgb(96, 96, 96);
      font-size: 1.2em;
      font-weight: 500;
      text-align: start;
    }
  }
`;


export function Profile(){
    const [ buttonActive, setbuttonActive ]= useState("Conta")
    const {user} = useContext(UserContext)
    const [menuActive, setMenuActive]= useState(true)
    
    function handleRoute(buttonNamed){
        if(buttonNamed !== buttonActive){
            setbuttonActive(buttonNamed)
            console.log(buttonNamed)
        }
    }

    if (!user) {
        return <p>Carregando...</p>;
    }

    function handdleMenu(){
        setMenuActive(!menuActive)
        console.log(menuActive)
    }

    return (
        <Body>
            <ProfilerConteiner>
                <Aside view={menuActive}>
                <OpenMenu onClick={handdleMenu}/>
                    <NavProfiler>
                        <h2>Zona de criação</h2>
                        <LinkedStyle to={"/profile/conta"}>
                            <MenuButton clicked={buttonActive === "Conta"} onClick={() => handleRoute("Conta")}>Perfil</MenuButton>
                        </LinkedStyle>
                        <LinkedStyle to={"/profile/meuseventos"}>
                            <MenuButton clicked ={buttonActive === "Meus Eventos"} onClick={()=>handleRoute("Meus Eventos")}>Meus Eventos</MenuButton>
                        </LinkedStyle>
                        <LinkedStyle to={"/profile/cad_evento"}>
                            <MenuButton clicked ={buttonActive === "Divulgar Evento"} onClick={()=>handleRoute("Divulgar Evento")}>Divulgar Evento</MenuButton>
                        </LinkedStyle>
                    </NavProfiler>
                </Aside>
                <PerfilProfile>
                    <Routes>
                        <Route path="/conta" element={<Perfil/>} /> 
                        <Route path="/meuseventos" element={<MeusEventos/>}/>
                        <Route path="/cad_evento" element={<FormEventos/>}/>
                    </Routes>
                </PerfilProfile>
            </ProfilerConteiner>
        </Body>
    );
}