import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import TelaCriarPlaylist from './components/TelaCriarPlaylist'
import TelaListaMusicas from './components/TelaListaMusicas'
import TelaPlaylist from './components/TelaPlaylist'

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const ContainerConteudo = styled.div`
  height: 100vh;
`


export default class App extends React.Component {

  state = {
    pagina: 'telaPlayList',
    playlistId: ''
  }

  onChangeCriarPlaylist = () => {
    this.setState({
      pagina: 'telaCriarPlaylist'
    })
  }

  onChangePlaylist = () => {
    this.setState({
      pagina: 'telaPlayList'
    })
  }

  // passa junto com o onchande o id da playlist
  onChangeListaMusicas = (id) => {
    this.setState({
      pagina: 'telaListaMusicas',
      playlistId: id
    })
  }

  paginaAtual = () => {
    switch (this.state.pagina) {
      case 'telaCriarPlaylist':
        return <TelaCriarPlaylist />;
      case 'telaPlayList':
        return <TelaPlaylist 
        onChangeListaMusicas={this.onChangeListaMusicas}
        id={this.state.playlistId}
        />
      case 'telaListaMusicas':
        return <TelaListaMusicas 
          id={this.state.playlistId}
          onChangePlaylist={this.onChangePlaylist}
        />

      default:
        break;
    }
  }

  render() {
    return (
      <Conatiner>
        {/* Envia props para Header.js */}
        <Header
          onChangeCriarPlaylist={this.onChangeCriarPlaylist}
          onChangePlaylist={this.onChangePlaylist}
        />
        <ContainerConteudo>
          {this.paginaAtual()}
        </ContainerConteudo>

      </Conatiner>
    );
  }
}
