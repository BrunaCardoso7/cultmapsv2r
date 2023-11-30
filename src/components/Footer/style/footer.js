import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const StyledInstagramIcon = styled(InstagramIcon)(
    {
        fontSize: "2rem !important",
        '&:hover':{
            color: "white",  
        },
    }
)
export const StyledFacebookIcon = styled(FacebookIcon)(
    {
        fontSize: "2rem !important",
        marginRight: "10px",
        '&:hover':{
            color: "white",  
        },
        '@media (min-width: 1024px)': {}
        }
)


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
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    gap: 20px;
`
export const HeaderCOnt = styled.div`
width: 100vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30%;
`
export const Image = styled.img`
    display: block;
    width: 50px;
    height:50px;

`
export const FooterHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    .logo{
        display: flex;
    }
` 
export const NavFooter = styled.div`
    /* margin: 0 auto; */
    width: 95vw;
    display: flex;
    flex-direction: row;
    padding-left: 15px;
    /* gap:20px; */
    justify-content: space-between;
    @media(min-width: 1024px){
        justify-content: space-around;
    }
`
export const MenuFooter = styled.div`
    display: flex;
    flex-direction: column;  
    a{
        text-decoration: none;
        color: white;
        text-align: start;
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