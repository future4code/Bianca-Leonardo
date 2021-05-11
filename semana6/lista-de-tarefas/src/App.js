import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
const ContainerTarefa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Tarefa = styled.li`
  display: flex;
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const Icone = styled.img`
  width: 16px;
`

const Botao = styled.button`
  background: none;
  border: none;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    const tarefas = this.state.tarefas

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    if (tarefas) {
      this.setState({
        tarefas: tarefas
      })
    }
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({
      tarefas: novaListaTarefas,

      inputValue: ''
    })

    console.log(novaTarefa)
  }



  selectTarefa = (id) => {
    // cria uma nova lista de tarefa que vai receber o array tarefa
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      //  se o id recebido como parâmetro for igual a tarefa id
      if (id === tarefa.id) {
        // é criado uma nova tarefa que vai receber a tarefa antiga
        const novaTarefa = {
          ...tarefa,
          // altera o dado passado como parâmetro em completa
          completa: !tarefa.completa
        }
        // retorna a nova tarefa
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({
      tarefas: novaListaTarefas
    })
  }

  removerTarefa = (id) => {
    // cria uma nova lista que vai receber o array original e filtrar o selecionado
    const novaListaFiltrada = this.state.tarefas.filter((tarefa) => {
      //  retorna todos os ids que forem diferentes do selecionado
      return id !== tarefa.id
    })

    // atualiza o array
    this.setState({
      tarefas: novaListaFiltrada
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <ContainerTarefa>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <Botao onClick={() =>this.removerTarefa(tarefa.id)}><Icone src='https://image.flaticon.com/icons/png/512/105/105739.png' /></Botao>
              </ContainerTarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
