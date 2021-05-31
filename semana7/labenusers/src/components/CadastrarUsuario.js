import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const ContainerUsuario = styled.div`
    display: flex;
    flex-direction: column;

    button {
        align-self: center;
        border: none;
        padding: 8px 8px;
        border-radius: 10px;
        background-color: lightsteelblue;
        color: black;

        :hover {
            background-color: lightskyblue;
        }
    }
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;

    input {
        margin: 5px 0;
        width: 300px;
        border-radius: 10px;
        padding: 8px;
        outline: none;
        border: 1px solid lightgrey;
    }
`

export default class CadastrarUsuario extends React.Component {

    state = {
        inputName: '',
        inputEmail: ''
    }

    handleInputName = (e) => {
        this.setState({
            inputName: e.target.value
        })
    }
    handleInputEmail = (e) => {
        this.setState({
            inputEmail: e.target.value
        })
    }

    cadastrarUsuario = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }

        axios.post(url, body, header)
            .then((res) => {
                alert('Usuario(a) cadastrado(a) com sucesso!')
                this.setState({
                    inputName: '',
                    inputEmail: ''
                })
            })
            .catch((err) => {
                alert('Erro', err.data)
            })
    }

    render() {
        return (
            <ContainerUsuario>
                <button onClick={this.props.trocarParaListar}>Ver usuários</button>
                <h3>Cadastre-se</h3>
                <ContainerInput>
                    <input
                        placeholder={'Digite seu nome'}
                        value={this.state.inputName}
                        onChange={this.handleInputName}
                    />
                    <input
                        placeholder={'Digite seu email'}
                        value={this.state.inputEmail}
                        onChange={this.handleInputEmail}
                    />
                </ContainerInput>
                <button onClick={this.cadastrarUsuario}>Cadastrar</button>
            </ContainerUsuario>
        )
    }
}