import styled from 'styled-components'
    
export const Header = styled.div`
    position: fixed;
    top:0;
    width: 100vw;
    margin: auto;
    background-color:white;
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 5%;
    padding: 7px 0;
    box-shadow: 0 0 5px rgb(217, 217, 217);
    z-index: 10;    
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
    }
`
export const SearchConteiner  = styled.div`
    position: relative;
    display: flex;
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
    button{
        background-color: transparent;
        border: none;
    }

`

export const Button = styled.button`
    text-decoration: none;
    background-color:  rgb(255, 115, 0);
    border-radius: 14px;
    font-weight: 500;
    font-size: .8em;
    color: white;
    padding: 5px 35px;
    border: none;
    &:hover{
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
export const UserSpace = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50px;
    width: fit-content;
   
    img{
        height: 30px;
    }
`
export const Space = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    border: 1px solid gray;
    padding: 5px 20px;
    border-radius: 14px;
    cursor: pointer;
`
// export const Menu = styled.div`
//     display: ${({visible}) => (visible ? console.log('block') : console.log('none'))};  
//     background-color: orange;
//     position: absolute;
//     top:100%;    
//     right: 15%;
//     width:300px;
//     height: 300px;
//     border-radius: 14px;
//     padding:20px;
// `
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
    align-items: center;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid white;
    img{
        width:40px;
        height: 40px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: start;
        h5{
            color: blue;
        }
        p{
            color: white;
            font-size: .9rem;
        }
    }
`
export const ConfigUser = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 10px;
    padding: 25px 0px ;
    width: 73%;
`