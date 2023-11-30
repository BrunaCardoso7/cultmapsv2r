import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { searchEventos } from "../../services/postServices" 
import Card from "../../components/Cards/Card"
import { CardsConteiner, ConteinerSearch, TextP } from "./style/search"
import Footer from "../../components/Footer/Footer"

export default function Search() {
    
    const { title } = useParams()
    
    const [posts, setPosts] = useState([])

    async function search(){
         try {
            const response = await searchEventos(title)
            setPosts(response)
            console.log("teste: ",posts)
         } catch (error) {
            console.log(error)
            setPosts([])
         }
    }
    useEffect(()=>{
        search()
    }, [title])
    return( 
        <body>
            <ConteinerSearch>
                <h3>Pesquisa: {title}</h3>
                <TextP>eventos encontrados: {posts.length}</TextP>
                <CardsConteiner>
                    {
                        posts.map((evento, index)=>(
                            <Card
                                key={index}
                                events={evento}
                            />
                        ))
                    }
                </CardsConteiner>
            <Footer/>
            </ConteinerSearch>
        </body>
    )
}