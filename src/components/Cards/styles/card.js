import styled from "styled-components";

export const CardElement = styled.div`
    width: 220px;
    height: 240px;
    background: linear-gradient(to top, rgba(255, 115, 0, 0.483), #ffff 60%);
    border-radius: 14px;
    overflow: hidden;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    &:hover{
        box-shadow: 0 0 8px rgb(216, 216, 216);
    }
`
export const Image = styled.img`
    width: 100%;
    max-height: 50%;
    object-fit: cover;
    border-radius: 14px 14px 0 0;
`
export const Evento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    a{
        font-size: .7rem;
        text-decoration: none;
        color: white;
        background-color:rgb(255, 115, 0);
        padding: 0 5px;
        border-radius: 14px;
    }
    h5{
        color: rgb(72, 72, 72);
    }
    p{
        font-size: .8rem;
        color:rgb(255, 115, 0);
        font-weight: 600;
    }
    button{
        border: none;
        background-color: white;
        padding: 5px 15px;
        color: white;
        color: rgb(72, 72, 72);
        box-shadow: 0 0 5px rgba(255, 68, 0, 0.516);
        font-weight: 600;
        border-radius: 14px
       
    }
    button:hover{
        background-color: ;
    }
    
`