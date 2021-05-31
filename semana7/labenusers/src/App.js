import React from 'react'
import styled from 'styled-components'
import CadastrarUsuario from './components/CadastrarUsuario'
import DetalheUsuario from './components/DetalheUsuario'
import ListarUsuario from './components/ListarUsuario'

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid lightgrey;
  width: 60%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: center;
`

export default class App extends React.Component {

  state = {
    pagina: 'cadastrar'
  }

  trocarDePadina = () => {
    switch (this.state.pagina) {
      case 'cadastrar':
        return <CadastrarUsuario trocarParaListar={this.trocarParaListar} />
      case 'listar':
        return <ListarUsuario trocarParaCadastrar={this.trocarParaCadastrar} />
      case 'detalhamento':
        return <DetalheUsuario trocarParaDetalhar={this.trocarParaDetalhar} />
      default:
        break;
    }
  }

  trocarParaCadastrar = () => {
    this.setState({
      pagina: 'cadastrar'
    })
  }

  trocarParaListar = () => {
    this.setState({
      pagina: 'listar'
    })
  }

  trocarParaDetalhar = () => {
    this.setState({
      pagina: 'detalhamento'
    })
  }

  render() {
    return (
      <Container>
        {this.trocarDePadina()}
      </Container>
    );
  }
}

