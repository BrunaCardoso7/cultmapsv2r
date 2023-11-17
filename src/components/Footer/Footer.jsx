import { FooterComp, FooterWrapper, FooterHeader, NavFooter, MenuFooter } from './style/footer.js'
export default function Footer(){
    return(
        <FooterComp>
            <FooterWrapper>
                <FooterHeader>
                    <div className="logo">
                        <h2 id="logo-cult">Cult</h2>
                        <h2 id="logo-maps">Maps</h2>
                    </div>
                    <div className="rede-sociais">
                        <i className="fa-brands fa-square-instagram">logo</i>
                        <i className="fa-brands fa-facebook">logo   </i>
                    </div>
                </FooterHeader>
                <NavFooter>
                    <MenuFooter>
                        <a href="" className="destac">Regiao</a>
                        <a href="">Piauí</a>
                        <a href="">São Luis</a>
                        <a href="">Maranhão</a>
                        <a href="">Porto ALegre</a>
                    </MenuFooter>
                    <MenuFooter>
                        <a href="" className="destac">Categorias</a>
                        <a href="">Anime</a>
                        <a href="">Música</a>
                        <a href="">Artes</a>
                        <a href="">Tecnologia</a>
                        <a href="">Cinema</a>
                    </MenuFooter>
                    <MenuFooter>
                        <a href="" className="destac">Planeje seu evento</a>
                        <a href="">DIvulgar evento</a>
                    </MenuFooter>
                </NavFooter>
                <p>cultMaps © Copyright 2023</p>
            </FooterWrapper>
        </FooterComp>
    )
}
