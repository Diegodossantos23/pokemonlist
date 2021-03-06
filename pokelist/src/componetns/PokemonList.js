import React from 'react'
import { PokemonListItem } from './PokemonListItem'

import styled from 'styled-components'

const ListContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    transition: 0.5s;
    background-color:#fff;
    width:400px;
    border-radius:2rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
    &:hover{
       
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }

    @media (max-width: 800px){
        width:340px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
        align-items:center;    
    }
`

const Title = styled.h1`
    text-align:center;
    color:slategray;
`



 export const PokemonList = (props) => {
    return(
        <ListContainer>
            <Title>Pokèmons</Title>
            {
                props.pokemons.results && 
                props.pokemons.results.map((poke) => {
                    return <PokemonListItem key={poke.name} name={poke.name } />
                })
            }
        </ListContainer>
    )
}
