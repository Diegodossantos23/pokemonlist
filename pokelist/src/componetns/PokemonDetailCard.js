import React from 'react'
import { PokemonNameData } from './PokemonNameData'
import { PokemonStatusData } from './PokemonStatusData'
import styled from 'styled-components'

const PokemonImage = styled.img`
    width: 190px;
    grid-row:1/3;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
`
const CardContainer = styled.div`
    display:grid;
    grid-template-columns:200px 2fr;
    grid-template-rows: 1fr 2fr;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    grid-gap:10px;
    padding:20px;
    background-color:#fff;
     
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;            
        }
    `

 export const PokemonDetailCard = (props) => {
    return(
        <CardContainer>
            <PokemonImage src={props.pokemon.sprites.front_default}/>
            <PokemonImage src={props.pokemon.sprites.back_default}/>
            <PokemonNameData
                name={props.pokemon.name}
                types={props.pokemon.types}
                weight={props.pokemon.weight}
            />
            <PokemonStatusData stats={props.pokemon.stats}/>
        </CardContainer>
    )
}
