import React from 'react'
import styled from 'styled-components'
import { Router } from './routes/Router'

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
      <Router/>
    </AppContainer>
  );
}

export default App;
