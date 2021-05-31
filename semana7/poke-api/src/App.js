import React from 'react'
import axios from 'axios'
import { Container, CardPokemon, InfoCard, ContainerCardPokemon } from './style'

export default class App extends React.Component {

  state = {
    pokemons: [],
    pokePicture: '',
    PokeName: '',
    pokeSpecie: '',
    pokeType: [],
    pokeHabilidades: []
  }

  componentDidMount() {
    this.getPokemons()
  }

  getPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'

    axios.get(url)
      .then((res) => {
        console.log(res.data.results)
        this.setState({
          pokemons: res.data.results
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getInfoPokemon = (e) => {
    console.log(e.target.value)
    const url = e.target.value

    axios.get(url)
      .then((res) => {
        console.log(res.data)
        this.setState({
          pokePicture: res.data.sprites.front_default,
          PokeName: res.data.name,
          pokeType: res.data.types,
          pokeHabilidades: res.data.abilities
        })
      })
      .catch((err) => {

      })
  }
  render() {

    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option value={poke.url}>{poke.name}</option>
      )
    })

    return (
      <Container>
        <h1>Pokedéx</h1>
        <h3>Escolha um pokemon para saber informações</h3>
        <ContainerCardPokemon>
          <select onChange={this.getInfoPokemon}>
            <option defaultValue >Escolha um pokemon</option>
            {pokeList}
          </select>

          {this.state.pokePicture && <div key={this.state.PokeName}>
            <CardPokemon>
              <h4>Espécie: {this.state.PokeName}</h4>
              <InfoCard>
                <div><span>Tipo:</span> {this.state.pokeType.map((item) => <p>{item.type.name}</p>)}</div>
                <div><img src={this.state.pokePicture} /></div>
                <div><span>Habilities:</span> {this.state.pokeHabilidades.map((item) => <p>{item.ability.name}</p>)}</div>
              </InfoCard>

            </CardPokemon>
          </div>}

        </ContainerCardPokemon>
      </Container>
    );
  }
}
