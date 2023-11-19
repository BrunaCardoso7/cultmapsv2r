import { useState, useEffect, useRef } from 'react'

import './styles/cards.css'
import Card from './Card.jsx'
import { ConteinerCards } from './styles/cards.js'
import { motion } from 'framer-motion'
import { getAllEventos } from '../../services/postServices'

// eslint-disable-next-line react/prop-types
export default function Cards({title}) {
    const carrosel = useRef()
    const [eventos, seteventos] = useState([])
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    }, [])


    async function findAlleventos() {

        const response = await getAllEventos();
        
        let dados = response.data.results

        seteventos(dados)
    }

    useEffect(()=>{
            findAlleventos()
    }, [])

    return(
        <ConteinerCards >
            <h2>{title}</h2>

            <motion.div ref={carrosel} className='carrosel'
                whileTap={{cursor: "grabbing"}}>
                <motion.div className='inner'
                    dragConstraints={{right: 0, left: -width}}
                    drag="x">
                    {
                        eventos.map((evento, index)=>{
                           return <Card 
                                    key={index} 
                                    events={evento}/>
                        })
                    }
                </motion.div>
            </motion.div>
        </ConteinerCards>
    )
}