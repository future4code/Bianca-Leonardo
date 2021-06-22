import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10vh;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 30vw;
    gap: 15px;
    margin-bottom: 10px;

    @media(max-width: 700px){
        width: 100%;
    }
`