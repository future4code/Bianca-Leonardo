import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";

export const CardContainer = styled(Card)`
    width: 50vw;
    margin: 10px 0;

    @media(max-width: 700px){
        width: 90%;
    }
`

export const ContainerButtons = styled(CardActions)`
    display: flex;
    padding: 0;
`
export const ContainerContant = styled(CardContent)`
    padding-bottom: 2px;
`