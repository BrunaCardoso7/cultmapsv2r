import {  useContext, useState } from "react"
import { UserContext } from "../../assets/UserProvider"
import { ProfilerConteiner, Body, Aside,NavProfiler, MenuButton, PerfilProfile } from "./style/profile"
// import { Link } from "react-router-dom"
import { Conta } from "./Conta"

export function Profile(){
    const [ buttonActive, setbuttonActive ]= useState("Conta")
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


    return (
        <Body>
            <ProfilerConteiner>
                <Aside>
                    <h2>Zona de criação</h2>
                    <NavProfiler>

                        <MenuButton clicked ={buttonActive === "Conta"} onClick={()=>handleRoute("Conta")}>Conta</MenuButton>
                        <MenuButton clicked ={buttonActive === "Meus Eventos"} onClick={()=>handleRoute("Meus Eventos")}>Meus Eventos</MenuButton>
                        <MenuButton clicked ={buttonActive === "Divulgar Evento"} onClick={()=>handleRoute("Divulgar Evento")}>Divulgar Evento</MenuButton>
                    </NavProfiler>
                </Aside>
                <PerfilProfile>
                    <Conta/>
                </PerfilProfile>
            </ProfilerConteiner>
        </Body>
    );
}