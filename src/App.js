import React from 'react'; 
import Routes from './routes';

import Header from './components/Header'; 
 
import GlobalStyle from './styles/global';

export default function App() {
  return ( 
    <>
      <Header title="Consulte CEPs de todo o Brasil" /> 
      <Routes /> 
      <GlobalStyle />
    </>
  );
}