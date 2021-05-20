import React from 'react'
import styled from 'styled-components'

const ContainerDetalhes = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    h2 {
        align-self: center;
    }

    button{
        margin: 0 4px;
        border: none;
        padding: 8px 8px;
        border-radius: 10px;
        background-color: lightsteelblue;
        color: black;
        align-self: center;

        :hover {
            background-color: lightskyblue;
        }
    }
`

export default class DetalheUsuario extends React.Component {
    render() {
        return (
            <ContainerDetalhes>
                <h2>Detalhes do Usuário</h2>
                <p>Nome: {this.props.nome}</p>
                <p>Email: {this.props.email}</p>
                <button onClick={() => this.props.deletarUsuario(this.props.id)}>Deletar Usuário</button>
            </ContainerDetalhes>
        )
    }
}