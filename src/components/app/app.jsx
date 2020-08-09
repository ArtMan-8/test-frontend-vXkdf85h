import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ColorsBackground, TextDefault } from '../variables.styled';
import Shipment from '../shipment/shipment.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    color: #C4C4C4;
    background-color: ${ColorsBackground.GREY_DARK};
    ${TextDefault}
  }
`;

const Wrapper = styled.section`
  padding: 72px 88px 104px;
  background-color: ${ColorsBackground.GREY};
`;

const App = () => <React.Fragment>
  <GlobalStyle />
  <Wrapper className="shipment">
    <Shipment />
  </Wrapper>
</React.Fragment>;

export default App;
