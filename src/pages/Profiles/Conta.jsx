import { BackgroundConteiner, ContaConteiner, ImageConteiner,InfomationUser } from "./style/conta";
import { UserContext } from "../../assets/UserProvider";
import { useContext } from "react";
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
                <ImageConteiner>
                    <img src={user.perfil.src} alt="" />
                </ImageConteiner>
            </BackgroundConteiner>
            <InfomationUser>
                <h2>{user.nome}</h2>
                <h3>{user.email}</h3>
                <i className={"fa-solid fa-wand-magic-sparkles"}></i>
            </InfomationUser>
        </ContaConteiner>
    )
}
