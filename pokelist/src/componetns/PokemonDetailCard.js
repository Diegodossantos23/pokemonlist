import React from 'react'
import { PokemonNameData } from './PokemonNameData'
import { PokemonStatusData } from './PokemonStatusData'
import styled from 'styled-components'

const PokemonImage = styled.div`
    width: 200px;
    background-color:aquamarine;
    grid-column: 2/3;
    grid-row:1/3;
`
const CardContainer = styled.div`
    display:grid;
    grid-template-columns:200px 1fr;
    grid-template-rows: 1fr 2fr;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    grid-gap:10px;
    padding:20px;
     
        &:hover{
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;            
        }
    `

 export const PokemonDetailCard = () => {
    return(
        <CardContainer>
            <PokemonNameData/>
            <PokemonImage/>
            <PokemonStatusData/>
        </CardContainer>
    )
}
