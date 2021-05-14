import React from "react";
import styled from "styled-components";
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaFechada } from "./PerguntaFechada";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class InformacoesGerais extends React.Component{
    render(){
        return (
            <Container>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <PerguntaAberta pergunta={'5. Por que você não terminou um curso de graduação?'}/>
                <PerguntaFechada pergunta={'6. Você fez algum curso complementar?'} opcoes={[
                    'Nenhum',
                    'Curso Técnico',
                    'Inglês'
                ]}/>
            </Container>
        )
    }
}