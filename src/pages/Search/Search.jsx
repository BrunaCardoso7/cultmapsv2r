import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchEventos } from "../../services/postServices"

export default function Search() {
    
    const { title } = useParams()
    
    console.log(typeof title)
    const [eventos, setEventos] = useState([])

    async function getSearch(){
        try {       
            const evtApi = await searchEventos(title)
    
            setEventos(evtApi.data)
            console.log(eventos)
        } catch (error) {
            console.log(error)
            setEventos([])
        }
    }

    useEffect(()=>{
        getSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title])

    return(
        <h1>{title}</h1>
    )
}