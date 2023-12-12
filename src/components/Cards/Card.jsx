/* eslint-disable react/prop-types */
import { StyledLink } from "../Navbar/style/navbar"
import { CardElement, Image,Evento } from "./styles/card"

// eslint-disable-next-line react/prop-types
export default function Card(props) {
    const id = props.id
    // };
    // eslint-disable-next-line react/prop-types
    console.log(props.nome)

    return (
        <CardElement>
            <Image src={props.image}/>
            <Evento>
                <a href="#">{props.categoria}</a>
                <h5>{props.nome}</h5>
                <p>{props.data}<span> | </span>{props.localizacao}</p>
               <StyledLink to={`/vermais/${id}`}><button >Ver Evento</button></StyledLink> 
            </Evento>
        </CardElement>

    )
}
