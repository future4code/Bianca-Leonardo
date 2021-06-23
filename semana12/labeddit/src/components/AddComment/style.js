import { Card, CardActions, CardContent, IconButton, TextField } from "@material-ui/core";
import styled from "styled-components";

export const CardContainer = styled(Card)`
    width: 50vw;
    margin: 10px 0;
    display: flex;

    @media(max-width: 700px){
        width: 90%;
    }
`

export const FormContainer = styled.form`
    width: 50vw;
    margin: 10px 0;
    display: flex;

    @media(max-width: 700px){
        width: 90%;
    }
`

export const ContainerContent = styled(CardContent)`
    width: 90%;
`

export const ContainerButtons = styled(CardActions)`
    display: flex;
    margin-top: 16%;

    @media(max-width: 700px){
        margin-top: 35%;
    }

`

export const ContainerSend = styled(IconButton)`
    display: flex;
`

export const ContainerText = styled(TextField)`
    width: 110%;

    @media(max-width: 700px){
        width: 125%;
    }
`