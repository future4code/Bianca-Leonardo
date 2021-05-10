import React from "react";
import styled from "styled-components";

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
                <p>1. Qual o seu nome?</p>
                <input />
                <p>2. Qual sua idade?</p>
                <input />
                <p>1. Qual seu email?</p>
                <input />
                <p>1. Qual a sua escolaridade</p>
                <select name='ensino' id='ensino'>
                    <option value='medio-incompleto'>Ensino Médio Incompleto</option>
                    <option value='medio-completo'>Ensino Médio Completo</option>
                    <option value='superior-completo'>Ensino Superior Completo</option>
                    <option value='superior-incompleto'>Ensino Superior Incompleto</option>
                </select>
            </Container>
        )
    }
}