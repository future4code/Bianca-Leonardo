import axios from 'axios'
import React from 'react'

export default class App extends React.Component {

  state = {
    usuarios: [],
    inputName: '',
    inputEmail: '',
  }

  componentDidMount() {
    this.getUsers()
  }

  handleName = (e) => {
    this.setState({
      inputName: e.target.value
    })
  }
  handleEmail = (e) => {
    this.setState({
      inputEmail: e.target.value
    })
  }

  getUsers = () => {
    const header = {
      headers: {
        Authorization: 'bianca-leonardo-paiva'
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    axios.get(url, header)
      .then((res) => {
        this.setState({
          usuarios: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  createUser = () => {
    const header = {
      headers: {
        Authorization: 'bianca-leonardo-paiva'
      }
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post(url, body, header)
      .then((res) => {
        alert('Usuário adicionado')
        this.setState({
          inputName: '',
          inputEmail: ''
        })
        this.getUsers()
      }).catch((err) => {
        console.log(err)
      })
  }

  deleteUser = (id) => {
    const header = {
      headers: {
        Authorization: 'bianca-leonardo-paiva'
      }
    }


    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    axios.delete(url, header)
    .then((res) => {
      alert('Usuário removido com sucesso!')
      this.getUsers()
    })
    .catch((err) => {
      alert(err)
    })
  }

  render() {

    const usuarios = this.state.usuarios.map((usuario) => {
      return <div key={usuario.id}>
        <p>{usuario.name}</p>
        <button onClick={() => this.deleteUser(usuario.id)}>Deletar</button>
      </div>
    })
    return (
      <div className="App">
        <h3>Criar Usuário</h3>
        <input
          placeholder={'Nome'}
          value={this.state.inputName}
          onChange={this.handleName}
        />
        <input
          placeholder={'E-mail'}
          value={this.state.inputEmail}
          onChange={this.handleEmail}
        />
        <button onClick={this.createUser}>Criar</button>
        <button>Visualizar Cadastros</button>
        <div>
          {usuarios}
        </div>
      </div>
    );
  }
}

