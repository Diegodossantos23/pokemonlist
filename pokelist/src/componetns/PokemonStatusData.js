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
const Status = styled.p`
    text-align:center;
    margin: 7px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    
`  

 export const PokemonStatusData = () => {
    return(
        <StatusDataContainer>
            <Status>Attack = 23</Status>
            <Status>Health = 19</Status>
            <Status>Defense = 79</Status>
        </StatusDataContainer>
    )
}
