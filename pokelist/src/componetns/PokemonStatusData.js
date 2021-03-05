import React from 'react'
import styled from 'styled-components'

const StatusDataContainer = styled.div`

    padding: 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
    &:hover{
        cursor: pointer;
    }
`

const Title = styled.h1`
    text-align:center;
    color:slategray;
    margin: 5px;
`  

const Stats = styled.p`
    text-align:center;
    margin: 7px;
    
`  

 export const PokemonStatusData = (props) => {
    return(
        <StatusDataContainer>
            <Title>Stats</Title>
             {
                 props.stats.map((eachStats) =>{
                     return <Stats> {eachStats.stat.name} = {eachStats.base_stat}</Stats>
                 })
             }
            
           
        </StatusDataContainer>
    )
}
