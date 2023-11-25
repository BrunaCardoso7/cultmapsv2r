import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
export const Header = styled.div`
    margin: auto;
    position: fixed;
    top:0;
    width: 100vw;
    background-color:white;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: %;
    box-shadow: 0 0 5px rgb(217, 217, 217);
    z-index: 10;    
    padding: 7px 40px;
    img{
        height: 50px;
        object-fit: cover;
    }
    h2{
        color: rgb(255, 115, 0);
    }
`
export const Logo  = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    h2{
        text-decoration: none;
        font-size: 1.5em;
        color: black;
        font-weight: 700;
    }
    img{
        height: 50px;
    }
`
export const SearchConteiner  = styled.div`
    position: relative;
    display: flex;
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

`
export const StyledSearchIcon = styled(SearchIcon)({
    position: 'absolute',
    left: '92%',
    top: '20%',
    color: 'gray',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgb(255, 119, 1)',
      fontSize: '24px',
    },
});

export const ButtonSignin = styled.button`
    text-decoration: none;
    background-color: transparent;
    border-radius: 24px;
    font-weight: 500;
    font-size: 1em;
    color: black;
    padding: 10px 35px;
    border: none;   
    margin-right: 10px;
    &:hover{
       color: gray;
    }
`
export const Buttonsignup = styled.button`
    text-decoration: none;
    background-color: black;
    border-radius: 24px;
    font-weight: 500;
    font-size: 1em;
    color: white;
    padding: 10px 35px;
    border: none;
    &:hover{
        background-color:gray;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    a{
        text-decoration: none;
        font-weight: 600;
        font-size: 1em;
        color: rgb(255, 119, 1) ;
    }:hover{
        color: orange;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`
export const UserSpace = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50px;
    width: fit-content;
    img{
        height: 40px;
        border-radius: 100%;
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
        font-weight: 600;
        padding: 10px 20px;
        border: 2px solid black;
        border-radius: 14px;
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