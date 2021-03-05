import React from 'react'
import styled from 'styled-components'

const NameDataContainer = styled.div`
    
    display:flex;
    flex-direction:column;
    justify-content:center;

    padding: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

`

const Title = styled.h1`
    text-align:center;
    color:slategray;
    margin: 5px;
`  

const Type = styled.p`
    text-align:center;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    `  


 export const PokemonNameData= (props) => {
    return(
        <NameDataContainer>
            <Title >{props.name}</Title >
            {
                props.types.map((eachType) => {
                    return <Type>{eachType.type.name}</Type> 
                })
            }           
        </NameDataContainer>
    )
}
