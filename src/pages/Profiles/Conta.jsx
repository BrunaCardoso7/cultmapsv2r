import { BackgroundConteiner, ContaConteiner, ImageConteiner,InfomationUser, AboutUser, EditButton } from "./style/conta";
import { UserContext } from "../../assets/UserProvider";
import { useContext } from "react";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import 'font-awesome/css/font-awesome.min.css';
export function Conta () {
    const { user } = useContext(UserContext)
    if(!user){
        <p>carregando...</p>
    }

    return(
        <ContaConteiner>
            <BackgroundConteiner>
                <img src={user.background.src} alt="" />
                <ModeEditOutlineIcon/>
                <ImageConteiner>
                    <img src={user.perfil.src} alt="" />
                    <ModeEditOutlineIcon/>
                </ImageConteiner>
            </BackgroundConteiner>
            <InfomationUser>
                <h2>{user.nome}</h2>
                <h3>{user.email}</h3>
                <i className={"fa-solid fa-wand-magic-sparkles"}></i>
            </InfomationUser>
            <AboutUser>
                <h3>Sobre</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error ipsa quis perspiciatis 
                    inventore dolor numquam adipisci sit est quae! Vel tempore iure odio sint nam. Incidunt corporis modi voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error ipsa quis perspiciatis. 
                </p>
                <h3>Redes Sociais</h3>
                
                <h4>YouTube: <a href="/">twice divulgações</a></h4>
                <h4>instagram: <a href="/">twice divulgaçõesOfficial</a></h4>
                
            </AboutUser>
            <EditButton>Editar perfil</EditButton>
        </ContaConteiner>
    )
}
