import React from 'react';
import { Router } from './routes/Router'
import Footer from './components/Footer/Footer'
import { MainContainer } from './styled'

function App() {
  return (
    <MainContainer>
      <Router />
      <Footer />
    </MainContainer>
  );
}

export default App;
