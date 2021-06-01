import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PokeCard from './components/PokeCard'

export default function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() => {
    getPoke()
  }, [setPokeList])

  const changePokeName = (e) => {
    setPokeName(e.target.value)
  }

  const getPoke = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList(res.data.results)
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <select onChange={changePokeName}>
        <option value={''}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      
      {pokeName && <PokeCard pokemon={pokeName}/>}
    </div>
  );
}