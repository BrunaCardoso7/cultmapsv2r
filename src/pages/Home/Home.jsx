import Cards from '../../components/Cards/Cards'
import CategoriaMenu from '../../components/Categoria/CategoriaMenu'
import Slider from '../../components/Slider/SliderImg'
import './style/home.js'
import { Main, Section, Body } from './style/home.js'
import { SubSlider } from '../../components/SubSlider/SubSlider'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export default function Home(){
    useEffect(()=>{
        console.log(Cookies.get("token"))
    }, [])


    return(
        <Body>
            <Main>
                <Section>
                    <Slider/>
                </Section>
                <Section>
                    <CategoriaMenu/>
                    <Cards title={"Tecnologia Animes e Geeks"}/>
                    <SubSlider/>
                    <Cards title={"Cursos e Workshops"}/>
                </Section>
            </Main>
        </Body>
    )
}