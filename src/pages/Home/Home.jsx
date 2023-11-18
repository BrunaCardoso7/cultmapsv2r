import Cards from '../../components/Cards/Cards'
import CategoriaMenu from '../../components/Categoria/CategoriaMenu'
import Slider from '../../components/Slider/SliderImg'
import './style/home.js'
import { Main, Section } from './style/home.js'
export default function Home(){
    return(
        <Main>
            <Section>
                <Slider/>
            </Section>
            <Section>
                <CategoriaMenu/>
                <Cards/>
            </Section>
        </Main>
    )
}