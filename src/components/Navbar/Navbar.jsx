
import { Outlet, useNavigate, Link } from 'react-router-dom'
import {Header, Logo, SearchConteiner, Nav, Button} from './style/navbar.js'
import SearchIcon from '@mui/icons-material/Search';
import 'styled-components'
import { useForm } from 'react-hook-form'; 
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
const seachSchema = z.object({
    title: z.string().nonempty({message: "Pesquisa não pode ser vazia"})
})

export default function Navbar(){
    // eslint-disable-next-line no-undef, no-unused-vars
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: zodResolver(seachSchema)
    })
    const navigate = useNavigate()

    function onSearch(data){
        const {title} = data
        navigate(`/search/${title}`)
        reset()
    }

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
                    <a href="./cad-evt.html">Divulgar evento</a>
                    <Link to={"/auth"}><Button>Entrar</Button></Link>
                </div>
            </Nav>
            <div className="sub-nav">
                <i className="fa-solid fa-bars" id="btn-menu"></i>
            </div>
        </Header>
        {errors.title && <span>{errors.title.message}</span>}
        <Outlet/>
    </header>
  )
}