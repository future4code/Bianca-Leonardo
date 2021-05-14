import React from "react";
import styled from "styled-components";
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaFechada } from "./PerguntaFechada";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class DadosGerais extends React.Component {
    render() {
        return (
            <Container>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <PerguntaAberta pergunta={'1. Qual o seu nome?'}/>
                <PerguntaAberta pergunta={'2. Qual sua idade?'}/>
                <PerguntaAberta pergunta={'3. Qual seu email?'}/>
                <PerguntaFechada pergunta={'4. Qual a sua escolaridade'} opcoes={[
                    'Ensino Médio Incompleto',
                    'Ensino Médio Completo',
                    'Ensino Superior Completo',
                    'Ensino Superior Incompleto'
                ]}/>
            </Container>
        )
    }
}