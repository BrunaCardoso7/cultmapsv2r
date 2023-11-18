import styled from 'styled-components'

export const FooterComp = styled.footer`
    margin: auto;
    width: 100%;
    background-color: rgb(255, 115, 0);
    box-shadow: 0px 0px 5px rgba(255, 106, 0, 0.482);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 20px;
`
export const FooterHeader = styled.div`
    display: flex;
    justify-content: center;
    gap: 70vw;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    .logo{
        display: flex;
    }
` 
export const NavFooter = styled.div`
    width: 95vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const MenuFooter = styled.div`
    display: flex;
    flex-direction: column;  
    margin-bottom: 20px;
    a{
        text-decoration: none;
        color: white;
    }  
    a:hover{
        text-decoration: none;
        color: black;
    }   
    .destac{
        font-weight: 600;
    }
    .destac:hover{
        color: white;
    }
`