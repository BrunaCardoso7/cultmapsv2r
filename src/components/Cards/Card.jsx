/* eslint-disable react/prop-types */
import { CardElement, Image,Evento } from "./styles/card"

// eslint-disable-next-line react/prop-types
export default function Card({events}) {
    // eslint-disable-next-line react/prop-types
    console.log(events.author)
    return (
        <CardElement>
            <Image src={events.img}/>
            <Evento>
                <a href="#">{events.categoria}</a>
                <h5>{events.nome}</h5>
                <p>{events.data}<span> | </span>{events.local}</p>
                <button>Ver Evento</button>
            </Evento>
        </CardElement>
    )
}