
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'; 
// import {zodResolver} from '@hookform/resolvers/zod'
// import { searchSchema } from '../../Schema/searchcSchema.js';
import { userLogged } from '../../services/userServices.js';
import { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { UserContext } from '../../assets/UserProvider.jsx';
import {Header, 
    Logo, 
    SearchConteiner, 
    Nav, ButtonSignin,
    Buttonsignup, 
    UserSpace, 
    UserInfo, 
    Menu,
    ModalUser, 
    ConfigUser, 
    Space, 
    StyledSearchIcon, 
    StyledLink,
    AddIconStyled
    } from './style/navbar.js'
import { searchEventos } from '../../services/postServices.js';

  


export default function Navbar(){
    const { register, handleSubmit } = useForm()
        
    const {user, setUser} = useContext(UserContext);
    const [menuVisible, setMenuVisible] = useState(false);
    // const [inputVisible, setInputVisible] = useState(false);
    const navigate = useNavigate()

    
    async function handleSubmitSearch(data){
        const response = await searchEventos(data.title)
        navigate(`/search/${data.title}`)
        console.log(response)
    }

    const handleModal = () => {
      setMenuVisible((menuVisible) => !menuVisible);
      console.log(menuVisible)
    };




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
    
            <Header>
                <StyledLink to={'/'}>
                    <Logo>
                        <img src="images/favicon_io/WhatsApp-Image-2023-11-02-at-19.41.41-removebg-preview.png" alt=""/>
                        <h2 className="notranslate">CultMaps</h2>
                    </Logo>
                </StyledLink>
                <Nav>
                        <StyledLink to={'/'}><a href="index.html">Home </a></StyledLink>
                        <a href="#" style={{color: "black", fontSize:".8em"}}> | </a>
                        <StyledLink to={"/eventos"}> Eventos</StyledLink>
                </Nav>
                        <form onSubmit={handleSubmit(handleSubmitSearch)}>
                            <SearchConteiner>
                                        <input {...register("title")} type="text" placeholder="Pesquisar eventos"/>
                                        <button type='submit'>
                                            <StyledSearchIcon/>
                                        </button>
                            </SearchConteiner>
                        </form>
                {user !== null && (
                    // menu do perfil
                    <UserSpace>
                        <Space >
                             {user.perfil && user.perfil.src && (
                                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                                    <StyledLink to={'/profile/cad_evento'}><AddIconStyled/></StyledLink>
                                    <button type='submit'>
                                        <StyledSearchIcon/>
                                    </button>
                                    <StyledLink to={'/profile/cad_evento'}><p>Zona de criação</p></StyledLink>
                                  <img src={user.perfil.src} onClick={handleModal} alt="" />
                                </div>
            
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
                                    </div>
                                </UserInfo>
                                <ConfigUser>
                                    <StyledLink to={"/profile/conta"}><p>Perfil</p></StyledLink>
                                    <StyledLink to={"/"}><p>Configuração</p></StyledLink>
                                </ConfigUser>
                                    <button onClick={logout}>signout</button>
                            </ModalUser>
                        </Menu>
                    </UserSpace>
                )}
                {
                    user && Object.keys(user).length === 0 &&(
                        <div className="sign" style={{display: "flex"}}>
                            <StyledLink to={"/auth"}><ButtonSignin>Registre-se</ButtonSignin></StyledLink>
                            <StyledLink to={"/login"}><Buttonsignup>Entrar</Buttonsignup></StyledLink>
                        </div>
                    )
                }
            
            </Header>

  )
}

  