// import { useState } from "react";
import { ConteinerMenu, Select, ButtonCategoria, ConteinerCategoria } from "./style/categoria"
export function CategoriaMenu() {
    
    return(
        <ConteinerMenu >
            <Select name="opt">
                <optgroup>
                    <option value="-1" selected>Categoria</option>
                    <option value="Tecnologia Games e Geeks">Tecnologia Games e Geeks</option>
                    <option value="Festas e Shows" >Festas e Shows  </option>
                    <option value="Artes Cinemas e Lazer">Artes Cinemas e Lazer</option>
                    <option value="Infantil">Infantil</option>
                    <option value="Pride">Pride</option>
                    <option value="Esporte">Esporte</option>
                    <option value="Cursos e Workshops">Cursos e Workshops</option>
                    <option value="Congresso e Palestras">Congresso e Palestras</option>
                    <option value="Cursos e Workshops">Cursos e Workshops</option>
                    <option value="Saúde e Bem estar">Saúde e Bem estar</option>
                    <option value="Moda e Beleza">Moda e Beleza</option>
                </optgroup>
            </Select>
            <ConteinerCategoria>
                <ButtonCategoria value={'Festas e Shows'}>Shows</ButtonCategoria>
                <ButtonCategoria value="Infantil">Infantil</ButtonCategoria>
                <ButtonCategoria value="Pride">Pride</ButtonCategoria>
                <ButtonCategoria value="Tecnologia Games e Geeks">Tecnologia</ButtonCategoria>
                <ButtonCategoria value="Artes Cinemas e Lazer">Cinema</ButtonCategoria>
                <ButtonCategoria value="Cursos e Workshops">Cursos</ButtonCategoria>
                <ButtonCategoria value="Esporte">Esportes</ButtonCategoria>
                <ButtonCategoria value="Artes Cinemas e Lazer">Artes</ButtonCategoria>
            </ConteinerCategoria>
        </ConteinerMenu>
    )
}