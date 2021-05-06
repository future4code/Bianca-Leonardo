import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

    img {
        width: 70px;
        margin-right: 15px;
        border-radius: 50%;
    }

`

const Conteudo = styled.div`
    span {
        color: gray;
        font-size: 14px;
    }

    p {
        margin-top: 10px;

    }
`

export default function ExperienciaProfissional(props) {
    return (
        <Container>
            <img src={ props.imagem }/>
            <Conteudo>
                <h4>{ props.cargo }</h4>
                <span>{ props.nomeEmpresa }</span>
                <p>{ props.descricao}</p>
            </Conteudo>
            
        </Container>
    )
}