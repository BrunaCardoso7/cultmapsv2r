import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const Header = styled.header`
        margin: auto;
        position: fixed;
        top:0;
        left: 0;
        width: 100vw;
        background-color:white;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 5px rgb(217, 217, 217);
        z-index: 999;    
        padding: 14px 5px;
        -webkit-position: fixed;    
        img{
            height: 50px;
            object-fit: cover;
        }
        h2{
            color: rgb(255, 115, 0);
        }
    @media(min-width: 1024px){
        padding: 7px 40px;
    }
`
export const Logo  = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    h2{
        text-decoration: none;
        font-size: 1.4em;
        color: black;
        font-weight: 700;
    }
    img{
        height: 40px;
    }
    @media(min-width: 1024px){
        cursor: pointer;
        h2{
            font-size: 1.5em;
        }
        img{
            height: 50px;
        }
    }
`
export const SearchConteiner  = styled.div`
        position: relative;
        display: flex;
        input{
            display: none;
            width: 40vw;
            height: 37px;
            border-radius: 34px;
            border: 1px solid gray;
            font-size: 1em;
            padding: 0 40px;
            background-color: rgba(255, 255, 255, 0.397);
            color: rgb(134, 134, 134);
        }
        button{
            display: none;
            background-color: white;
            border: none;
        }
    @media(min-width: 1024px){
        input{
            display: block;
            width: 40vw;
            height: 37px;
            border-radius: 34px;
            border: 1px solid gray;
            font-size: 1em;
            padding: 0 40px;
            background-color: rgba(255, 255, 255, 0.397);
            color: rgb(134, 134, 134);
        }
        :focus{
        outline: 1px solid rgb(172, 172, 172);
        border: none;
        background-color: rgb(255, 255, 255);
        font-size: 1em;
        color: #696868;
        }
        button{
            background-color: transparent;
            border: none;
        }
    }

`
export const StyledSearchIcon = styled(SearchIcon)({
    fontSize: '3em !important',
    color: 'black',
    marginTop: '8px',
    '@media (min-width: 1024px)': {
        fontSize: '2.5em !important',
        position: 'absolute',
        left: '-28%',
        top: '9%',
        color: 'gray',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
        color: 'rgb(255, 119, 1)',

        },
    },
});

export const ButtonSignin = styled.button`
    display: none;
    text-decoration: none;
    background-color: transparent;
    border-radius: 24px;
    font-weight: 500;
    font-size: 1em;
    color: black;
    padding: 10px 35px;
    border: none;   
    &:hover{
       color: gray;
    }
    @media(min-width: 1024px){
        display: block;
        margin-right: 10px;
    }
`
export const Buttonsignup = styled.button`
    position: fixed;
    top: 1.5%;
    right:1%;
    text-decoration: none;
    background-color: black !important; 
    border-radius: 24px;
    font-weight: 500;
    font-size: 1em;
    color: white;
    padding: 10px 35px;
    border: none;
    &:hover{
        background-color: gray !important;
    }
    @media(min-width: 1024px){
        position: static;
        text-decoration: none;
        background-color: black !important;
        border-radius: 24px;
        font-weight: 500;
        font-size: 1em;
        color: white;
        padding: 10px 35px;
        border: none;
        &:hover{
            background-color: gray !important;
        }
    }
`
export const Nav = styled.nav`
    display: none;
    align-items: center;
    justify-content: center;
    gap: 30px;
    a{
        text-decoration: none;
        font-weight: 600;
        font-size: 1em;
        color: rgb(255, 119, 1) ;
        margin-left: 8px;
    }:hover{
        color: orange;
    }
    @media(min-width: 1024px){
        display: block;
        margin: 0 40px;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    p{
        color: black;
    }
`
export const UserSpace = styled.div`
        position: fixed;
        right: 0;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        width: fit-content;
        img{
            height: 40px;
            border-radius: 100%;
        }
        button{
            background-color: white;
            border: none;
        }
    @media(min-width: 1024px){
        gap: 10px;
        margin-left: 50px;
        img{
            margin-left: 50px;
        }
        button{
            background-color: white;
            border: block;
        }
    }
`
export const Space = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 5px 20px;
    border-radius: 14px;
    cursor: pointer;
    p{
        display: none;
    }
    @media(min-width: 1024px){
        p{
            display: block;
            font-weight: 600;
            padding: 10px 20px;
            border: 2px solid black;
            border-radius: 14px;
        }
    }
`
export const Menu = styled.div`
    display:  ${(props) => (props.visible ? 'block' : 'none')};  
    background-color:    white;
    border: 2px solid rgb(68, 68, 68);
    position: absolute;
    top:100%;    
    right: 6%;
    width:300px;
    height: 300px;
    border-radius: 7px;
    padding:10px;
    
`
export const ModalUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        position: absolute;
        bottom: 0;
        width: 70%;
        margin-bottom: 10px;
        padding: 5px;
        border: none;
        border-radius: 14px;
    }
`
export const UserInfo = styled.div`
    display: flex;  
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    border-radius: 7px;
    border-bottom: 1px solid white;
    background-color:   rgb(68, 68, 68);
    img{
        width:50px;
        height: 50px;
        border-radius: 100%;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        h5{
            color: white;
            font-weight: 400;
            font-size: 1em;
        }
    }
`
export const ConfigUser = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap:0px;
    p{  
        text-align: start;
        width: 100%;
        padding: 12px 48px ;
        color: black;
        font-size: .9em;
        font-weight: 500;
    }:hover{
        border-radius: 14px;
        background-color: rgb(229, 229, 229);

    }
`
export const AddIconStyled = styled(AddIcon)({
    display: "block !important",
    color: "black",
    backgroundColor: "white",
    fontSize: "2em !important",
    borderRadius: "100%",
    border: "2px solid black",
    '@media (min-width: 1024px)': {
        display: "none !important"
    },
})