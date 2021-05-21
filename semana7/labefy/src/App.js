import React from 'react'
import TelaCriarPlaylist from './components/TelaCriarPlaylist'
import TelaMusicas from './components/TelaMusicas'
import TelaPlaylists from './components/TelaPlaylists'
import TelaAdicionarMusica from './components/TelaAdicionarMusica'
import axios from 'axios'

export default class App extends React.Component {

  state = {
    pagina: 'telaPlaylist',
    playLists: []
  }

  componentDidMount(){
    this.getPlaylist()
  }


  paginaAtual = () => {
    switch (this.state.pagina) {
      case 'telaPlaylist':
        return <TelaPlaylists
          playLists={this.state.playLists}
          onChangeTelaCriarPlaylist={this.onChangeTelaCriarPlaylist}
          onChangeTelaMusicas={this.onChangeTelaMusicas}
        />;
      case 'telaMusicas':
        return <TelaMusicas
          onChangeTelaPlaylist={this.onChangeTelaPlaylist}
        />;
      case 'telaCriarPlaylist':
        return <TelaCriarPlaylist
          onChangeTelaPlaylist={this.onChangeTelaPlaylist}
        />;
        case 'telaAdicionarMúsica':
          return <TelaAdicionarMusica/>;
      default:
        break;
    }
  }

  onChangeTelaPlaylist = () => {
    this.setState({
      pagina: 'telaPlaylist'
    })
  }

  onChangeTelaMusicas = () => {
    this.setState({
      pagina: 'telaMusicas'
    })
  }

  onChangeTelaCriarPlaylist = () => {
    this.setState({
      pagina: 'telaCriarPlaylist'
    })
  }

  getPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    const header = {
      headers: {
        Authorization: 'bianca-leonardo-paiva'
      }
    }

    axios.get(url, header)
    .then((res) => {
      this.setState({
        playLists: res.data.result.lis
      })
    })
    .catch((err) => {
      console.log(err)
    })

  }

  render() {
    return (
      <div>
        {this.paginaAtual()}
      </div>
    );
  }
}
