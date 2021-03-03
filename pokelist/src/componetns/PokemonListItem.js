import React from 'react'
import styled from 'styled-components'

const PokemonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
    margin: 20px;
    
    border: 1px solid gray;
    border-radius:5px;
  
    img{
        width:100px;
        border-radius:5px;
        margin: 10px;
    }

    &:hover{
        cursor: pointer;
    }

`

 export const PokemonListItem = () => {
    return(
        <PokemonContainer>
            <img src="https://cdn.alfabetajuega.com/wp-content/uploads/2019/09/pokemon-bulbasaur-3d.png" alt="Bubassauro"/>
            <p>Bulbasaur</p>
        </PokemonContainer>
    )
}
