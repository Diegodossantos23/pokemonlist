import React from 'react'
// import { PokemonDetailPage } from './pages/PokemonDetailPage'
import { PokemonListPage } from './pages/PokemonListPage'
import styled from 'styled-components'

const AppContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  text-align:center;
  align-items:center;

  height:100vh;

  background-color:#D9D9D9;

`

const App = () => {
  return (
    <AppContainer>
      <PokemonListPage/>
      {/* <PokemonDetailPage/> */}
    </AppContainer>
  );
}

export default App;
