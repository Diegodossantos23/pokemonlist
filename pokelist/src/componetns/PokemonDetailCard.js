import React from 'react'
import { PokemonNameData } from './PokemonNameData'
import { PokemonStatusData } from './PokemonStatusData'
import styled from 'styled-components'

const PokemonImage = styled.img`
    width: 190px;
    grid-column:2/3;
    grid-row:1/3;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    align-self:center;
`
const CardContainer = styled.div`
    display:grid;
    grid-template-columns:200px 1fr;
    grid-template-rows: 1fr 2fr;
    grid-gap:10px;
    padding:20px;
    background-color:#fff;
     
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    &:hover{
    
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }

        
    `

 export const PokemonDetailCard = (props) => {
    return(
        <CardContainer>
            
            <PokemonImage src={props.pokemon.sprites.front_default}/>
            <PokemonNameData
                name={props.pokemon.name}
                types={props.pokemon.types}
            />
            <PokemonStatusData stats={props.pokemon.stats}/>
        </CardContainer>
    )
}
