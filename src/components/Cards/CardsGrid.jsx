import { useState, useEffect } from 'react'
import './styles/cards.css'
import Card from './Card.jsx'
import { getAllEventos } from '../../services/postServices'
import { ConteinerCards, EventosCont } from './styles/cards';

import 'swiper/css';
import 'swiper/css/pagination';


// eslint-disable-next-line react/prop-types
export function CardsGrid({title}) {
    // eslint-disable-next-line no-unused-vars
    const [eventos, seteventos] = useState([])
    
    console.log("quantidade de cards na api: ", eventos.length)

    async function findAlleventos() {
          const response = await getAllEventos();
          let dados = response.data.results
          seteventos(dados)
    }

    useEffect(()=>{
            findAlleventos()
    }, [])

    return (
    
        <ConteinerCards>
        <h2>{title}</h2>
            <EventosCont>
                {
                    eventos.filter(evento => evento.categoria === title)
                    .map((evento, index) => (
                            <Card key={index} {...evento} />
                    ))
                }
            </EventosCont>

        </ConteinerCards>
  );
}
