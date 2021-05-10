import React from "react";
import styled from "styled-components";

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
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input />
                <p>6. Você fez algum curso complementar?</p>
                <select name='curso' id='curso'>
                    <option value='nenhum'>Nenhum</option>
                    <option value='tecnico'>Curso Técnico</option>
                    <option value='ingles'>Inglês </option>
                </select>
            </Container>
        )
    }
}