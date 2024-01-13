import { getAllEventos, getEventsUser } from '../../services/postServices';
import { useEffect, useState } from 'react';
// import Card from '../../components/Cards/Card';
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';
import { Outlet } from 'react-router-dom';
// import { EvtConteiner, Main } from './style/meuseventos.js';
import { ContaConteiner } from './style/conta.js';

export function MeusEventos(){
    const [ eventos, setEventos] = useState([])



    const token = Cookies.get('token')
    console.log("token: "+ token)
    if(!token){
        console.log('não tem token')
    }
    const decodde = jwtDecode(token)
    console.log(decodde)
    const userId = decodde.id
    console.log("id: "+userId)


    async function findByUser(){
        try {
            const response = await getEventsUser();
            let dados = response.data.results;
            console.log(dados)
            setEventos(dados);
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
        }
    }
    useEffect(()=>{
        findByUser()
    }, [])
    return(
        <ContaConteiner>


                <h2>Todos os eventos postados por você: </h2>

                <Outlet/>

        </ContaConteiner>
    )
}