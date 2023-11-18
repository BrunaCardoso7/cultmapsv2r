import './style/subslider.css'  
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Title = styled.h2`
    text-align: start;
    color: rgb(74, 74, 74); 
    margin-bottom: 20px;
`
const SlideContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-around;
    margin-left: 50px;
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
`;

const Description = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h1{
    color: white;
  }
`;


export function SubSlider(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='conteiner' style={{ width: '85vw', height: '60vh', margin: "0 auto"}}>
      <Title>Essa semana ainda tem!</Title>
      <Slider {...settings}>
        <div>
          <SlideContainer>
            <Image src="https://images.sympla.com.br/64efa6a10bc88-lg.jpg" alt="Imagem 1" />
            <Description>
              <h1>Teste</h1>
              <p>Descrição do slide 1...</p>
            </Description>
          </SlideContainer>
        </div>
        <div>
          <SlideContainer>
            <Image src="https://images.sympla.com.br/64efa6a10bc88-lg.jpg" alt="Imagem 2" />
            <Description>
              <h1>Teste</h1>
              <p>Descrição do slide 2...</p>
            </Description>
          </SlideContainer>
        </div>
        <div>
          <SlideContainer>
            <Image src="https://images.sympla.com.br/64efa6a10bc88-lg.jpg" alt="Imagem 3" />
            <Description>
              <h1>Teste</h1>
              <p>Descrição do slide 3...</p>
            </Description>
          </SlideContainer>
        </div>
      </Slider>
    </div>
  );
}