import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Shipment from '../shipment/shipment.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #C4C4C4;
    background-color: #e5e5e5;
  }
`;

const App = () => <React.Fragment>
    <GlobalStyle />
    <Shipment />
  </React.Fragment>;

export default App;
