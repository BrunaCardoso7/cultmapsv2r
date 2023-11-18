import './styles/cards.css'
import { useState, useEffect, useRef } from 'react'
import { Eventos } from '../../Datas.js'
import { ConteinerCards } from './styles/cards.js'
import Card from './Card.jsx'
import { motion } from 'framer-motion'
// eslint-disable-next-line react/prop-types
export default function Cards({title}) {
    const carrosel = useRef()
    const [width, setWidth] = useState(0)
    useEffect(()=>{
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    }, [])
    return(
        <ConteinerCards >
            <h2>{title}</h2>

            <motion.div ref={carrosel} className='carrosel'
                whileTap={{cursor: "grabbing"}}
            >
                <motion.div className='inner'
                    dragConstraints={{right: 0, left: -width}}
                    drag="x"
                >
                    {
                        Eventos.map((evento, index)=>{
                           return <Card key={index} events={evento}/>
                        })
                    }
                </motion.div>
            </motion.div>
        </ConteinerCards>
    )
}