import React from 'react'
import { PokemonDetailPage } from './pages/PokemonDetailPage'
// import { PokemonListPage } from './pages/PokemonListPage'
import styled from 'styled-components'

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  align-items:center;

  height:100vh;

`

const App = () => {
  return (
    <AppContainer>
      {/* <PokemonListPage/> */}
      <PokemonDetailPage/>
    </AppContainer>
  );
}

export default App;
