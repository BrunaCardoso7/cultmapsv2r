import { CategoriaMenu } from "../../components/Categoria/CategoriaMenu"
import { useState, useEffect } from "react"

import { getAllEventos } from '../../services/postServices'
import { CardsGrid } from "../../components/Cards/CardsGrid"
import { Body, Main, Section } from "./style/evento.js"

export function Eventos() {
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

    return(
        <Body>
            <CategoriaMenu/>
            <Main >
            <Section>
                <CardsGrid title={"Cursos e Workshops"}/>
            </Section> 
            <Section>
                <CardsGrid title={"Tecnologia Games e Geeks"}/>
            </Section>  
            <Section>
                <CardsGrid title={"Congresso e Palestras"}/>
            </Section> 
            <Section>
                <CardsGrid title={"Festas e Shows"}/>
            </Section>  
            <Section>
                <CardsGrid title={"Artes Cinemas e Lazer"}/>
            </Section>  
            <Section>
                <CardsGrid title={"Infantil"}/>
            </Section>  
            <Section>
                <CardsGrid title={"Pride"}/>
            </Section>  
            <Section>
                <CardsGrid title={"Esporte"}/>
            </Section>  
            <Section>
                <CardsGrid title={"Saúde e Bem estar"}/>
            </Section> 
            <Section>
                <CardsGrid title={"Moda e Beleza"}/>
            </Section> 
            </Main>
        </Body>
    )
}