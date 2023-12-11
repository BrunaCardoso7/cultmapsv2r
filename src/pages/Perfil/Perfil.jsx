import { useContext, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './perfil.css';
import { ContaConteiner } from '../Profiles/style/conta';
import { UserContext } from '../../assets/UserProvider';
import { useForm } from 'react-hook-form';
import { putEvents } from '../../services/userServices';
import styled from 'styled-components';

const PerfilConterner = styled(ContaConteiner)`
    margin-top: 0px;
    
  @media(min-width: 1024px){
    margin-top: 350px;
    padding-bottom: 20px;
    /* margin-left: 25vw; */
    width:100vw;
    min-height: 100vh;
    height: max-content;
    background-color: ;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function Perfil() {
  const {
    register: registerUser,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    // formState: { errors }
    } = useForm()
    const { user } = useContext(UserContext)
    // eslint-disable-next-line no-unused-vars
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
  
    const handleImageChange = (event, setImageFunction) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          setImageFunction(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
    
    async function imagensProfile (data){
      try {
        const response = await putEvents(data)
        return response
        
      } catch (error) {
        console.log(error)
      }
    }

    const bannerStyle = {
      backgroundImage: `url(${user.background.src})`,
    };
    


    return (
      <PerfilConterner>
        <form onSubmit={handleSubmit(imagensProfile)}>
          <label htmlFor="inputr" className="banner" style={bannerStyle}>
            <input
              id="inputr"
              type="file"
              name='perfil'
              {...registerUser('perfil')}
              onChange={(e) => handleImageChange(e, setBackgroundImage)}
              accept="image/*"
            />
            <div className="banner-content">
              <p>
                <i className="fas fa-pen"></i>Selecione uma imagem
              </p>
            </div>
          </label>
          <label htmlFor="inputrPerfil" className="imgPerfil">
            <input
              id="inputrPerfil"
              type="file"
              name='background'
              {...registerUser('background')}
              onChange={(e) => handleImageChange(e, setProfileImage)}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <div className='camera'>
              <i className="fa-solid fa-camera"></i>
            </div>
            {profileImage && <img src={user.perfil.src} alt="Imagem do Perfil" />}
          </label>
          <button type="submit">salva alteração</button>
        </form>
  
        <div className="conteinetInfo">
            <div className="nome">
              <h1>{user.nome}</h1>
              <div className='otos'>
              <a>Seguindo</a> <a className="seguidores">Seguidores</a>
               </div>
            </div>
            <div className="publicar">
              <button>Publicar evento</button>
            </div>
        </div>
  
        <div className="caminhos">
          <p>Publicações</p>
          <p>Curtidos</p>
          <p>Favoritos</p>
        </div>
  

          <div className="boxPost">

            <div className="toda">
              <h3>Todas as Publicações</h3>
            </div>

            <div className="postagem">
              <div className="miniImg">
                <img src="tanj.jpg" alt="Miniatura da Postagem" />
                <p>
                  Nome
                  <br />
                  22/22/22
                </p>
              </div>
            </div>
          </div>
      </PerfilConterner>
    );
}