import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getAllEventos } from "../../services/postServices";
import { Body, ConteinerText } from "./style/vermais";
import { ButtonMain } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
    margin: 0 auto;
`


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
        <Body >
            <img src={eventoPage.image} alt="" />
            <h1>{eventoPage.nome}</h1>
            <ConteinerText>
                <h3>Localização: <span>{eventoPage.localizacao}</span></h3>
                <h3>Data: <span>{eventoPage.data}</span></h3>
                <p>{eventoPage.descricao}</p>
                 <LinkStyled to={'/'}><ButtonMain text={'Voltar para home'}/></LinkStyled>
            </ConteinerText>
        </Body>
    )
}