import React from 'react';
import styled from 'styled-components';
import { ColorsBackground } from '../variables.styled';
import Shipment from '../shipment/shipment.jsx';

const Wrapper = styled.section`
  padding: 72px 88px 104px;
  background-color: ${ColorsBackground.GREY};
`;

const App = () => <React.Fragment>
  <Wrapper className="shipment">
    <Shipment />
  </Wrapper>
</React.Fragment>;

export default App;
