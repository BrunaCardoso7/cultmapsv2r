import styled from 'styled-components'

export const Header = styled.div`
    width: 100vw;
    margin: auto;
    background-color:white;
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 6%;
    box-shadow: 0 0 5px rgb(217, 217, 217);
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
`
export const SearchConteiner  = styled.div`
    position: relative;
    input{
        display: block;
        width: 20vw;
        height: 30px;
        border-radius: 14px;
        border: none;
        font-size: .8em;
        padding: 0 40px;
        background-color: rgba(255, 255, 255, 0.397);
        box-shadow: 0px 0px 5px rgb(255, 188, 121);
        color: rgb(134, 134, 134);
    }
    :focus{
    outline: 1px solid rgb(172, 172, 172);
    background-color: rgb(255, 255, 255);
    font-size: .8em;
    color: #696868;
    }

`

export const Button = styled.button`
    text-decoration: none;
    background-color:  rgb(255, 115, 0);
    border-radius: 14px;
    font-weight: 500;
    font-size: 1em;
    color: white;
    padding: 5px 15px;
    border: none;
    :hover{
        background-color: rgb(225, 83, 32);
    }
`
export const Nav = styled.nav`
    div{
        display: flex;
        flex-direction: row;
        gap: 30px;
        a{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            justify-content: center;
            font-weight: 300;
            font-size: 1em;
            color: black;
            text-align: center;

        }a:hover{
            color: rgb(255, 115, 0);
        }
    }
`