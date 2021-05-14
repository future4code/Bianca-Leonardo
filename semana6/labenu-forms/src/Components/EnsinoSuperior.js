import React from "react";
import styled from "styled-components";
import { PerguntaAberta } from "./PerguntaAberta";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class EnsinoSuperior extends React.Component{
    render(){
        return (
            <Container>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <PerguntaAberta pergunta={'5. Qual o curso?'}/>
                <PerguntaAberta pergunta={'6. Qual a unidade de ensino?'}/>
            </Container>
        )
    }
}