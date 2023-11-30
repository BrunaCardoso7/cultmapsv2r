import { FooterComp, FooterWrapper, FooterHeader, NavFooter, MenuFooter,Image,HeaderCOnt, StyledInstagramIcon, StyledFacebookIcon } from './style/footer.js'
export default function Footer(){
    return(
        <FooterComp>
            <FooterWrapper>
                <HeaderCOnt>
                    <FooterHeader>
                        <Image src="/4594c240-b078-4b13-ae58-d75772d76e81.png" alt="" />
                        <div className="logo">
                            <h2 id="logo-cult" className="notranslate">Cult</h2>
                            <h2 id="logo-maps" className="notranslate">Maps</h2><small>BR</small>
                        </div>
                        <div className="rede-sociais">
                            <small>Development</small>
                        </div>
                    </FooterHeader>
                    <div className='social'>
                        <StyledFacebookIcon/>
                        <StyledInstagramIcon/>
                    </div>
                </HeaderCOnt>
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
