import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default class Final extends React.Component{
    render(){
        return (
            <Container>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito Obrigado por participar! Entraremos em contato</p>
            </Container>
        )
    }
}