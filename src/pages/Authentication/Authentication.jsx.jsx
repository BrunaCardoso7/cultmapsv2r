import styled from "styled-components";
import SignUpForm from "./SingUp";
import SignIn from "./Singin";

const ConteinerAuthentication = styled.div`

`
const Section = styled.div`

`

export default function Authentication() {
    return(
        <ConteinerAuthentication>
            <Section type='signup'>
                <SignUpForm/>
            </Section>
            <Section type='signin'>
                <SignIn/>
            </Section>
        </ConteinerAuthentication>
    )
}