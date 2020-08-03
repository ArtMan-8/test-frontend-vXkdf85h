import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: #e5e5e5;
  }
`;

const App = () => <GlobalStyle />;

export default App;
