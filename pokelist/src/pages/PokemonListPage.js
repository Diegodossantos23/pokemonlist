import React, { useEffect, useState } from 'react'
import { PokemonList } from '../componetns/PokemonList'
import axios from 'axios'

 export const PokemonListPage = () => {
    const [pokemonList, setPokemonList] = useState({});  
    

    //Requisição raiz
    useEffect(() =>{
        axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) =>  setPokemonList(res.data))
        .catch((err) => alert(err.response.message))
    }, [])


    return(
        <div>
            <PokemonList pokemons={pokemonList}/>
        </div>
    )
}

