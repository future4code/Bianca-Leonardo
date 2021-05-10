import React from "react";
import styled from "styled-components";

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
                <p>5. Qual o curso?</p>
                <input />
                <p>6. Qual a unidade de ensino?</p>
                <input />
            </Container>
        )
    }
}