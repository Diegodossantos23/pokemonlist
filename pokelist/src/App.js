import React from 'react'
import { PokemonDetailPage } from './pages/PokemonDetailPage'
import { PokemonListPage } from './pages/PokemonListPage'


const App = () => {
  return (
    <div>
      <PokemonListPage/>
      <PokemonDetailPage/>
    </div>
  );
}

export default App;
