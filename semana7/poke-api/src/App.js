import React from 'react'
import axios from 'axios'

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
      <div>
        <h1>Pokedéx</h1>
        <h3>Escolha um pokemon para saber informações</h3>
        <div>
          <select onChange={this.getInfoPokemon}>
            <option defaultValue >Escolha um pokemon</option>
            {pokeList}
          </select>

          {this.state.pokePicture && <div key={this.state.PokeName}>
            <h4>Informações do Pokemon</h4>
            <div>
              <p>Espécie: {this.state.PokeName}</p>
              <img src={this.state.pokePicture} />
              <div>Tipo: {this.state.pokeType.map((item) => <p>{item.type.name}</p>)}</div>
              <div>Habilities: {this.state.pokeHabilidades.map((item) => <p>{item.ability.name}</p>)}</div>
            </div>
          </div>}
          
        </div>
      </div>
    );
  }
}
