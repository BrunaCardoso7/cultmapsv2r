
import {Header, Logo, SearchConteiner, Nav, Button} from './style/navbar.js'
import 'styled-components'
export default function Navbar(){
  return(
    <header>
        <Header>
            <Logo>
                <img src="images/favicon_io/WhatsApp-Image-2023-11-02-at-19.41.41-removebg-preview.png" alt=""/>
                <h2 className="logo-cult" id="logo">Cult Maps</h2>
            </Logo>
            <SearchConteiner>
                <input type="text" name="pesquisa" id="search-box" placeholder="Pesquisar eventos"/>
                <i className="bi bi-search-heart-fill"></i>
            </SearchConteiner>
            <Nav>
                <div className="nav">
                    <a href="index.html">Página inicial</a>
                    <a href="eventos.html">Eventos</a>
                    <a href="./cad-evt.html">Divulgar evento</a>
                    <Button>Cadastrar-se</Button>
                </div>
            </Nav>
            <div className="sub-nav">
                <i className="fa-solid fa-bars" id="btn-menu"></i>
            </div>
        </Header>
    </header>
  )
}