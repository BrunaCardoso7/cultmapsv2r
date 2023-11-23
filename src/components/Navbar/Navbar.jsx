
import { Outlet, useNavigate, Link } from 'react-router-dom'
import {Header, Logo, SearchConteiner, Nav, Button, UserSpace, Menu, UserInfo, ModalUser, ConfigUser, Space} from './style/navbar.js'
import SearchIcon from '@mui/icons-material/Search';
import 'styled-components'
import { useForm } from 'react-hook-form'; 
import {zodResolver} from '@hookform/resolvers/zod'
import { searchSchema } from '../../Schema/searchcSchema.js';
import { userLogged } from '../../services/userServices.js';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

export default function Navbar(){
    const [user, setUser] = useState();
    const [menuVisible, setMenuVisible] = useState(false);

    const handleModal = () => {
      setMenuVisible((prevState) => !prevState);
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
    }

    useEffect(()=>{
        findUserLogged()
    },[])



  return(
    <header>
        <Header>
            <Link to={'/'}>
                <Logo>
                    <img src="images/favicon_io/WhatsApp-Image-2023-11-02-at-19.41.41-removebg-preview.png" alt=""/>
                    <h2>Cult Maps</h2>
                </Logo>
            </Link>
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
                        <img src={user.perfil.src} alt="" />
                    </Space>
                    <Menu>
                        <ModalUser visible={menuVisible}>
                            <UserInfo>
                                <img src={user.perfil.src} alt="" />    
                                <div className="infor">
                                    <h5>{user.nome}</h5>
                                    <p>{user.email}</p>
                                </div>
                            </UserInfo>
                            <ConfigUser>
                                <Link to={"/"}>Compartilhar evento</Link>   
                                <Link to={"/"}>Zona de criação</Link>  
                                <Link to={"/"}>Configurações do perfil</Link>  
                            </ConfigUser>
                                <button onClick={logout}>signout</button>
                        </ModalUser>
                    </Menu>
                </UserSpace>
            ):( 
                <div className="sign">
                    <Link to={"/auth"}><Button>Criar conta</Button></Link>
                    <Link to={"/login"}><Button>Entrar</Button></Link>
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