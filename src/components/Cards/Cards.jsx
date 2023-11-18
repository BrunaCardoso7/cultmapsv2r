import './styles/cards.js'
import { Eventos } from '../../Datas.js'
import { ConteinerCards } from './styles/cards.js'
import Card from './Card.jsx'
export default function Cards() {
    return(
        <ConteinerCards>
            {
                Eventos.map((evento, index)=>{
                   return <Card key={index} events={evento}/>
                })
            }
        </ConteinerCards>
    )
}