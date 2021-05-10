import React from 'react';
import styled from 'styled-components';
import './App.css';
import DadosGerais from './Components/DadosGerais';
import EnsinoSuperior from './Components/EnsinoSuperior';
import Final from './Components/Final';
import InformacoesGerais from './Components/InformacoesGerais';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Botao = styled.button`
  margin-top: 10px;
`

 export default class App extends React.Component {

  state = {
    secao: 'dados-gerais'
  };

  proximaEtapa = () => {
    switch (this.state.secao) {
      case 'dados-gerais':
        this.setState({
          secao: 'ensino-superior'
        })
        break;
      case 'ensino-superior':
        this.setState({
          secao: 'informacoes-gerais'
        })
        break;
      case 'informacoes-gerais':
        this.setState({
          secao: 'final'
        })
        break;
      default:
        <p>Erro</p>
        break;
    }
  }

  render(){

    const pagina = () => {
      if (this.state.secao === 'dados-gerais') {
        return <DadosGerais />
      } else if (this.state.secao === 'ensino-superior') {
        return <EnsinoSuperior />
      } else if (this.state.secao === 'informacoes-gerais') {
        return <InformacoesGerais />
      } else if (this.state.secao === 'final') {
        return <Final />
      }
    }
    return (
      <Container>
        {pagina()}
        {this.state.secao === 'final'? null : <Botao onClick={this.proximaEtapa}>Próxima etapa</Botao>}
      </Container>
      );
  }
  
}

