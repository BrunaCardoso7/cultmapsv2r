
import { Outlet, useNavigate, Link } from 'react-router-dom'
import {Header, Logo, SearchConteiner, Nav, Button, UserSpace, UserInfo, ModalUser, ConfigUser, Space} from './style/navbar.js'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { useForm } from 'react-hook-form'; 
import {zodResolver} from '@hookform/resolvers/zod'
import { searchSchema } from '../../Schema/searchcSchema.js';
import { userLogged } from '../../services/userServices.js';
import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { UserContext } from '../../assets/UserProvider.jsx';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`
const Menu = styled.div`
    display:  ${(props) => (props.visible ? 'block' : 'none')};  
    background-color: orange;
    position: absolute;
    top:100%;    
    right: 12%;
    width:300px;
    height: 300px;
    border-radius: 14px;
    padding:20px;
`

export default function Navbar(){
    const {user, setUser} = useContext(UserContext);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleModal = () => {
      setMenuVisible((menuVisible) => !menuVisible);
      console.log(menuVisible)
    };

    // eslint-disable-next-line no-undef, no-unused-vars
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(searchSchema)
    })
    const navigate = useNavigate()

    function onSearch(data){
        const {title} = data
        navigate(`/search/${title}`)
        reset()
    }

    async function findUserLogged(){
        const response = await userLogged();
        setUser(response.data);  
        console.log(response.data)
    }

    function logout(){
        Cookies.remove('token')
        setUser(undefined)
        navigate("/")
    }

    useEffect(()=>{
        findUserLogged()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



  return(
    <header>
        <Header>
            <StyledLink to={'/'}>
                <Logo>
                    <img src="images/favicon_io/WhatsApp-Image-2023-11-02-at-19.41.41-removebg-preview.png" alt=""/>
                    <h2>Cult Maps</h2>
                </Logo>
            </StyledLink>
            <form onSubmit={handleSubmit(onSearch)}>
                <SearchConteiner>
                    <input {...register("title")} type="text" placeholder="Pesquisar eventos"/>
                    <button type='submit'>
                      <SearchIcon style={{position:"absolute", left: "88%", top: "10%", color: "gray"}}/>
                    </button>
                </SearchConteiner>  
            </form>
            <Nav>
                <div className="nav">
                    <a href="index.html">Página inicial</a>
                    <a href="eventos.html">Eventos</a>
                  
                </div>
            </Nav>
            {user? (
                <UserSpace>
                    <Space onClick={handleModal}>
                        <p>{[user.nome]}</p>
                         {user.perfil && user.perfil.src && (
                            <img src={user.perfil.src} alt="" />
                        )}
                    </Space>
                    <Menu visible={menuVisible}>
                        <ModalUser >
                            <UserInfo>
                                 {user.perfil && user.perfil.src && (
                                <img src={user.perfil.src} alt="" />
              )}    
                                <div className="infor">
                                    <h5>{user.nome}</h5>
                                    <p>{user.email}</p>
                                </div>
                            </UserInfo>
                            <ConfigUser>
                                <StyledLink to={"/profile"}>Configurações do perfil</StyledLink>  
                                <StyledLink to={"/"}>Compartilhar evento</StyledLink>   
                                <StyledLink to={"/"}>Zona de criação</StyledLink>  
                            </ConfigUser>
                                <button onClick={logout}>signout</button>
                        </ModalUser>
                    </Menu>
                </UserSpace>
            ):( 
                <div className="sign">
                    <StyledLink to={"/auth"}><Button>Criar conta</Button></StyledLink>
                    <StyledLink to={"/login"}><Button>Entrar</Button></StyledLink>
                </div>
            )}
            
            <div className="sub-nav">
                <i className="fa-solid fa-bars" id="btn-menu"></i>
            </div>
        </Header>
        {errors.title && <span>{errors.title.message}</span>}
        <Outlet/>
    </header>
  )
}