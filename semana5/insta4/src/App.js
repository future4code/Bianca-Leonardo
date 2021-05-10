import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormularioPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 10px;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/id/123/50/50',
        fotoPost: 'https://picsum.photos/id/124/200/150'
      },
      {
        nomeUsuario: 'Roberta',
        fotoUsuario: 'https://picsum.photos/id/129/50/50',
        fotoPost: 'https://picsum.photos/id/269/200/150'
      },
      {
        nomeUsuario: 'Paulo',
        fotoUsuario: 'https://picsum.photos/id/234/50/50',
        fotoPost: 'https://picsum.photos/id/324/200/150'
      }
    ],

    inputNomeUsuario: '',
    inputFotoUsuario: '',
    inputFotoPost: ''
  }

  adicinaPost = () => {
    let post = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    let novosPosts = [...this.state.posts, post]

    this.setState({
      posts: novosPosts,
      inputNomeUsuario: '',
      inputFotoUsuario: '',
      inputFotoPost: ''
    })
  }

  onChangeNomeUsuario = (event) => {
    this.setState({
      inputNomeUsuario: event.target.value
    })
  }

  onChangeFotoUsuario = (event) => {
    this.setState({
      inputFotoUsuario: event.target.value
    })
  }

  onChangeFotoPost = (event) => {
    this.setState({
      inputFotoPost: event.target.value
    })
  }

  render() {

    let listaPosts = this.state.posts.map((post) => {
      return <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    })

    return (
      <MainContainer>
        <FormularioPost>
          <input
            placeholder={'Nome do Usuário'}
            onChange={this.onChangeNomeUsuario}
            value={this.state.inputNomeUsuario}
          />
          <input
            placeholder={'Link da foto de Usuário'}
            onChange={this.onChangeFotoUsuario}
            value={this.state.inputFotoUsuario}
          />
          <input
            placeholder={'Link da foto de Postagem'}
            onChange={this.onChangeFotoPost}
            value={this.state.inputFotoPost}
          />
          <button onClick={this.adicinaPost}>Enviar</button>
        </FormularioPost>
        <div>{listaPosts}</div>
      </MainContainer>
    );
  }
}

export default App;
