import axios from 'axios'
import React from 'react'

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

    render(){
        return(
            <div>
                <button onClick={this.props.trocarParaListar}>Ver usuários</button>
                <h3>Cadastre-se</h3>
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
                <button onClick={this.cadastrarUsuario}>Cadastrar</button>
            </div>
        )
    }
}