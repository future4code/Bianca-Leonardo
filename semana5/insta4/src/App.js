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
  render() {
    return (
      <MainContainer>
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
