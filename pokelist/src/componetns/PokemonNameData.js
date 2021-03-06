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
