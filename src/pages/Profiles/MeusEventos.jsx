import { getAllEventos } from '../../services/postServices';
import { useEffect, useState } from 'react';
import Card from '../../components/Cards/Card';
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode';
import { Outlet } from 'react-router-dom';
import { EvtConteiner, Main } from './style/meuseventos.js';
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

    eventos.forEach(evento=>{
        // if(evento.userId === userId){
            console.log("userid evento: "+ evento.userId.toString() == userId.toString())
            console.log("userid api: "+ userId.toString())
        // }
        // console.log('sem username')
    })
    
    async function findall(){
        try {
            const response = await getAllEventos();
            let dados = response.data.results;

            setEventos(dados);
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
        }
    }
    useEffect(()=>{
        findall()
    }, [])
    return(
        <ContaConteiner>

                <Main>

                    <h2>Todos os eventos postados por você: </h2>
                    <EvtConteiner>
                        
                        {
                            // eventos.filter(evento => console.log(evento.userId.toString() === userId.toString()))
                            // .map( (evento, index) =>(
                            //         <Card key={index} events={evento}/>
                            // ))
                        }
                    </EvtConteiner>
                </Main>
                <Outlet/>

        </ContaConteiner>
    )
}