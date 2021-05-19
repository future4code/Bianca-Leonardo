import axios from 'axios'
import React from 'react'

export default class ListarUsuario extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.listarUsuarios()
    }

    listarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.get(url, header)
        .then((res) => {
            this.setState({
                usuarios: res.data
            })
            console.log(res.data)
        })
        .catch((err) => {
            alert('Erro')
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const header = {
            headers: {
                Authorization: 'bianca-leonardo-paiva'
            }
        }

        axios.delete(url, header)
        .then((res) => {
            alert('Usuário(a) excluido(a) com sucesso!')
            this.listarUsuarios()
        })
        .catch((err) => {
            alert('ERRO ao excluir')
        })
    }

    render(){

        const ListandoUsuarios = this.state.usuarios.map((usuario) => {
            return <div key={usuario.id}>
                <p>{usuario.name}</p>
                <button onClick={() => this.deletarUsuario(usuario.id)}>Excluir</button>
            </div>
        })

        return(
            <div>
                <button onClick={this.props.trocarParaCadastrar}>Se cadastre</button>
                <h3>Lista de Usuários</h3>
                <div>
                {ListandoUsuarios}
                </div>
            </div>
        )
    }
}