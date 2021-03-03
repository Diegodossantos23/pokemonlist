import React from 'react'
import { PokemonListItem } from './PokemonListItem'

import styled from 'styled-components'

const ListContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    
    border: 1px solid gray;
    border-radius:5px;
    
    width:400px;
`

const Title = styled.h1`
    text-align:center;
    color:slategray;
`

 export const PokemonList = () => {
    return(
        <ListContainer>
            <Title>Pokèmons</Title>
           <PokemonListItem/>
           <PokemonListItem/>
           <PokemonListItem/>
           <PokemonListItem/>
           <PokemonListItem/>
           <PokemonListItem/>
           <PokemonListItem/>
           <PokemonListItem/>
        </ListContainer>
    )
}
