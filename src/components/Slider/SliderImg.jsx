import { Descricao, TextBox } from './style/slider.js'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default  function SliderImg(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Tempo de troca automática de slides em milissegundos
      };
    
      return (
        <div style={{ width: '100vw', height: '95vh' }}>
          <Slider {...settings}>
            <div>
              <img src="https://images.sympla.com.br/64efa6a10bc88-lg.jpg" alt="Imagem 1" style={{ width: '100vw', height: '95vh', position: 'relative'}} />
              <Descricao>
                    <TextBox>
                      <h1><span>DOMINGO - WASHINGTON BRASILEIRO<br/></span><div>12 nov - 2023 • 18:00 / 13 nov - 2023 • 05:00</div></h1>
                      <button>Conheça</button>
                    </TextBox>
                </Descricao>
            </div>
            <div>
              <img src="https://images.sympla.com.br/648cc7d130488-lg.jpg" alt="Imagem 1" style={{ width: '100vw', height: '95vh', position: 'relative'}} />
              <Descricao>
                    <TextBox>
                      <h1><span>Numanice | Curitiba<br/> </span><div>25 nov - 2023 • 14:00 / 25 nov - 2023 • 23:30</div></h1>
                      <button>Conheça</button>
                    </TextBox>
                </Descricao>
            </div>
            <div>
              <img src="https://images.sympla.com.br/65415c1f62623-lg.png" alt="Imagem 1" style={{ width: '100vw', height: '95vh', position: 'relative'}} />
              <Descricao>
                    <TextBox>
                      <h1><span>Numanice | Curitiba<br/> </span><div>25 nov - 2023 • 14:00 / 25 nov - 2023 • 23:30</div></h1>
                      <button>Conheça</button>
                    </TextBox>
                </Descricao>
            </div>
          </Slider>
        </div>
      );
}
