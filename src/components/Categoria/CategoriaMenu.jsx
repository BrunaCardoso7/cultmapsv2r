import { useState } from "react";
import { ConteinerMenu, Select, ButtonCategoria, ConteinerCategoria } from "./style/categoria"
export default function CategoriaMenu() {
    const [isDragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
  
    const handleMouseDown = (e) => {
      setDragging(true);
      setStartX(e.pageX - e.currentTarget.scrollLeft);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = startX - e.pageX ;
      e.currentTarget.scrollLeft = startX + x;
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    const handleMouseLeave = () => {
      if (isDragging) setDragging(false);
    };
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
            <ConteinerCategoria
                
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
            >
                <ButtonCategoria>Favoritos</ButtonCategoria>
                <ButtonCategoria>Shows</ButtonCategoria>
                <ButtonCategoria>Infantil</ButtonCategoria>
                <ButtonCategoria>Pride</ButtonCategoria>
                <ButtonCategoria>Tecnologia</ButtonCategoria>
                <ButtonCategoria>Cinema</ButtonCategoria>
                <ButtonCategoria>Cursos</ButtonCategoria>
                <ButtonCategoria>Esportes</ButtonCategoria>
                <ButtonCategoria>Artes</ButtonCategoria>
                <ButtonCategoria>Esportes</ButtonCategoria>
                <ButtonCategoria>Esportes</ButtonCategoria>

            </ConteinerCategoria>
        </ConteinerMenu>
    )
}