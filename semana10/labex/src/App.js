import { CssBaseline } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import Router from './routes/Router'

const Container = styled.div`
  /* height: 95vh; */
  border: 1px red solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <CssBaseline>
      <Container>
        <Router />
      </Container>
    </CssBaseline>
  );
}

export default App;
