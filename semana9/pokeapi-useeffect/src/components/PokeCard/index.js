import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PokeCard(props) {

    const [pokemon, setPokemon] = useState({})

    useEffect (() => {
        pegaPokemon(props.pokemon)
    }, [setPokemon, props.pokemon])

    const pegaPokemon = (pokeName) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
            setPokemon(response.data)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    // const pokemon = () => {
    //     pokemon
    // }

    return(
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            )}
        </div>
    )
}