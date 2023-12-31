import { useState, useEffect } from 'react'
import './styles/cards.css'
import Card from './Card.jsx'
import { getAllEventos } from '../../services/postServices'
import { ConteinerCards } from './styles/cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// eslint-disable-next-line react/prop-types
export default function Cards({title}) {
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
      <Swiper 
       
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 50
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 140
          },
        }}
      >
        {
            eventos.filter(evento => evento.categoria === title)
            .map((evento, index) => (
                <SwiperSlide key={index}>
                    <Card key={index} {...evento}/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </ConteinerCards>
  );
}
