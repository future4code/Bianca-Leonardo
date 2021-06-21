import styled from "styled-components";

export const ContainerApplication = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;

    @media(max-width: 700px){
        width: 100%;
    }
`

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
    width: 100%;

    @media(max-width: 700px){
        width: 90%;
    }
`

