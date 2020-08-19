import React from 'react';
import Shipment from '../shipment/shipment.jsx';
import Wrapper from './app.styled';

const App = () => <React.Fragment>
  <Wrapper className="shipment">
    <Shipment />
  </Wrapper>
</React.Fragment>;

export default App;
