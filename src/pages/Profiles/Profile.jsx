import {  useContext, useState } from "react"
import { UserContext } from "../../assets/UserProvider"
import { ProfilerConteiner, Body, Aside,NavProfiler, MenuButton, PerfilProfile, OpenMenu } from "./style/profile"
// import { Link } from "react-router-dom"
// import { Conta } from "./Conta"
import { Link, Routes } from "react-router-dom"
import styled from "styled-components"
import { FormEventos } from "./FormEventos"
import { Route } from "react-router-dom"
import { Conta } from "./Conta"
import Home from "../Home/Home"


const LinkedStyle = styled(Link)`
    text-decoration: none;

`

export function Profile(){
    const [ buttonActive, setbuttonActive ]= useState("Conta")
    const [menuActive, setMenuActive]= useState(true)
    const {user} = useContext(UserContext)
    
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
                <OpenMenu onClick={handdleMenu}/>
                <Aside view={menuActive}>
                    <NavProfiler>
                        <h2>Zona de criação</h2>
                    {/* <LinkedStyle to={"/profile/conta"}><MenuButton clicked ={buttonActive === "Conta"} onClick={()=>handleRoute("Conta")}>Conta</MenuButton></LinkedStyle> */}
                        <LinkedStyle to={"/profile/conta"}>
                            <MenuButton clicked={buttonActive === "Conta"} onClick={() => handleRoute("Conta")}>Conta</MenuButton>
                        </LinkedStyle>
                        <LinkedStyle to={"/profile/eventos"}>
                            <MenuButton clicked ={buttonActive === "Meus Eventos"} onClick={()=>handleRoute("Meus Eventos")}>Meus Eventos</MenuButton>
                        </LinkedStyle>
                        <LinkedStyle to={"/profile/cad_evento"}>
                            <MenuButton clicked ={buttonActive === "Divulgar Evento"} onClick={()=>handleRoute("Divulgar Evento")}>Divulgar Evento</MenuButton>
                        </LinkedStyle>
                    </NavProfiler>
                </Aside>
                <PerfilProfile>
                    <Routes>
                        <Route path="/conta" element={<Conta />} /> 
                        <Route path="/eventos" element={<Home/>}/>
                        <Route path="/cad_evento" element={<FormEventos/>}/>
                    </Routes>
                    {/* <FormEventos/> */}
                </PerfilProfile>
            </ProfilerConteiner>
        </Body>
    );
}