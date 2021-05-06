import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
        nomeUsuario:'Roberta',
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
    inputFotoUsuario:'',
    inputFotoPost: ''
  }

  adicinaPost = () => {
    let post = {
      usuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    let novosPosts = [...posts, post]

  }

  onChangeNomeUsuario = (event) => {
    this.setState({
      inputNomeUsuario: event.target.value
    })
  }

  onChangeFotoUsuario = (event) => {
    this.setState ({
      inputFotoUsuario: event.target.value
    })
  }

  onChangeFotoPost = (event) => {
    this.setState ({
      inputFotoPost: event.target.value
    })
  }

  render() {
    return (
      <MainContainer>
        <div>
          <input
            placeholder={'Nome do Usuário'}
            onChange={this.onChangeNomeUsuario}
          />
          <input 
            placeholder={'Link da foto de Usuário'}
            onChange={this.onChangeFotoUsuario}
          />
          <input 
            placeholder={'Link da foto de Postagem'}
            onChange={this.onChangeFotoPost}
          />
          <button onClick={this.adicinaPost}>Enviar</button>
        </div>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/123/50/50'}
          fotoPost={'https://picsum.photos/id/124/200/150'}
        />
        <Post
          nomeUsuario={'Roberta'}
          fotoUsuario={'https://picsum.photos/id/129/50/50'}
          fotoPost={'https://picsum.photos/id/269/200/150'}
        />
        <Post
          nomeUsuario={'Paulo'}
          fotoUsuario={'https://picsum.photos/id/234/50/50'}
          fotoPost={'https://picsum.photos/id/324/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
