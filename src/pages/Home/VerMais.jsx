import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getAllEventos } from "../../services/postServices";
import { Body, Main } from "./style/vermais";

export default function VerMais() {
    const [eventos, seteventos] = useState([])
    async function findAlleventos() {
        const response = await getAllEventos();
        let dados = response.data.results
        seteventos(dados)
    }

    useEffect(()=>{
            findAlleventos()
    }, [])
    const { id } = useParams()

    const eventoPage = eventos.filter((evento) => {
        return String(evento.id) === String(id);
    });

    console.log(eventoPage)
    console.log(typeof id)

    return( 
        <>
          {eventoPage.length > 0 ? (
                eventoPage.map((evento) => (
                    <Evento {...evento} key={evento.id} />
                ))
                ) : (
                <p>não encontrado</p>
            )}
        </>
    )
}

function Evento (eventoPage){
    return(
        <Body>
            <img src={eventoPage.image} alt="" />
            <h1>{eventoPage.nome}</h1>
            <p>{eventoPage.descricao}</p>
        </Body>
    )
}