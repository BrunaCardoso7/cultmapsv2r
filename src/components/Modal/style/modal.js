import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
export const ConteinerModal = styled.div`
    margin-top: 10vh;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-height: 100vh;
    overflow-y: auto;
    background-color: white;
    border-radius: 24px;
    img{
        width: 100%;
        height: 30vh;
        background-position: top;
        background-size: cover;
    }
`
export const Default = styled.div`
    display: none;
    z-index: 999;
    position: fixed;
    top: 9%; 
    left: 0%; 
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.891);
` 
export const CloseIconStyled = styled(CloseIcon)({
    position: "absolute",
    top: '10%',
    zIndex: '999'
})