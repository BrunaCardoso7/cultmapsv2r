import Cards from '../../components/Cards/Cards'
import CategoriaMenu from '../../components/Categoria/CategoriaMenu'
import Slider from '../../components/Slider/SliderImg'
import './style/home.js'
import { Main, Section } from './style/home.js'
import { SubSlider } from '../../components/SubSlider/SubSlider'
export default function Home(){
    return(
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
    )
}