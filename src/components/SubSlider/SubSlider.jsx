import './style/subslider.css'  
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { ButtonMain } from '../Button/Button';
const Title = styled.h2`
    text-align: start;
    color: rgb(74, 74, 74); 
    margin-bottom: 20px;
    width: max-content;
    font-size: 1.2em;
    @media(min-width: 1024px){
      font-size: 1.8em;
    }
`
const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 0 30px;
    justify-content: center;
    margin-left: 0px;
    @media(min-width: 1024px){
        flex-direction: row;
        align-items: center;
        height: 100%;
        justify-content: space-around;
        margin-left: 50px;
    }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
 @media(min-width: 1024px){
   width: 45%;
   height: 80% !important;
   margin-top: 10px;
   object-fit: cover;
   border-radius: 14px;
 }
`;

const Description = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: flex-start;
  h1{
    color: rgb(255, 119, 1);
    font-size: 1em;
    width: ;
  }
  p{
    margin: 0 auto;
    text-align: center;
    margin-top: 12px;
    font-weight: 600;
    color: gray;

  }
 @media(min-width: 1024px){
  width: 50%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1{
    font-size: 1.3em;
  }
  p{
    font-size: .8rem;
  }
 }
 
`;


export function SubSlider(){
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div className='conteiner' style={{ width: '85vw', height: 'fit-content', margin: "70px auto"}}>
      <Title>Essa semana ainda tem!</Title>
      <Slider {...settings}>
        <div>
          <SlideContainer>
            <Image src="https://images.sympla.com.br/64efa6a10bc88-lg.jpg" alt="Imagem 1" />
            <Description>
              <h1>Evento presencial em Clube do Congresso, Brasília - DF</h1>
              <p>11-02-2023 <b>até</b> 13-02-2023</p>
              <ButtonMain text={"ver evento"}/>
            </Description>
          </SlideContainer>
        </div>
        <div>
          <SlideContainer>
            <Image src="https://images.sympla.com.br/64efa6a10bc88-lg.jpg" alt="Imagem 2" />
            <Description>
              <h1>Teste com um texto maior</h1>
              <p>Descrição do slide 2...</p>
            </Description>
          </SlideContainer>
        </div>
        <div>
          <SlideContainer>
            <Image src="https://images.sympla.com.br/64efa6a10bc88-lg.jpg" alt="Imagem 3" />
            <Description>
              <h1>Teste com um texto maior</h1>
              <p>Descrição do slide 3...</p>
            </Description>
          </SlideContainer>
        </div>
      </Slider>
    </div>
  );
}