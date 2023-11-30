/* eslint-disable react/prop-types */
import styled from "styled-components";
const Button = styled.button`
    margin: 10px auto;
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
`
export function ButtonMain({text}) {
    return<Button>
        {text}
    </Button>
}
