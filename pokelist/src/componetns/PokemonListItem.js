import React from 'react'
import styled from 'styled-components'

const PokemonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    justify-content:space-evenly;
    margin: 20px;
   background-color:#f2f3f5;
    border-radius:5px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    transition: 0.5s;

    div{
        width: 50px;
    }

    img{
        width:50px;
        border-radius:100%;
        margin: 10px;

        
        &:hover{
            cursor:pointer;
            transition: 0.5s;
            width:70px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }
    }

    &:hover{
           
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }

        @media (max-width: 800px){
            width: 250px;

            img{
                width:38px;
            }

            div > p{
                font-size: 13px;
            }
        }

`

 export const PokemonListItem = (props) => {
    return(
        <PokemonContainer>
            <div>
                <img src="https://img.elo7.com.br/product/original/28E57AD/pokebola-scanncut.jpg" alt="Pokebola"/>
            </div>
            <div>
                <p>{props.name}</p>
            </div>
        </PokemonContainer>
    )
}
