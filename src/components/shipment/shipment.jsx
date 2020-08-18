import React from 'react';
import styled from 'styled-components';
import { TextHeader, ColorsActive, ColorsMain } from '../variables.styled';
import Delivery from '../delivery/delivery.jsx';
import Pickup from '../pickup/pickup.jsx';

const ShipmentType = {
  DELIVERY: 'delivery',
  PICKUP: 'pickup',
};

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 46px;
  ${TextHeader}
  color: ${ColorsMain.BLACK};
`;

const Nav = styled.nav`
  .shipment__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .shipment__item {
    display: inline-block;
    margin-right: 8px;
    padding: 12px 39px;
    border-radius: 5px 5px 0 0;
    background-color: ${ColorsMain.GREY_LIGHT};
    cursor: pointer;

    a {
      color: ${ColorsMain.GREY};
    }
  }

  .shipment__item--active {
    background-color: ${ColorsMain.WHITE};

    a {
      color: ${ColorsActive.BLUE};
    }
  }

  .shipment__item a {
    text-decoration: none;
  }
`;

const Shipment = () => {
  const [nav, setNav] = React.useState('delivery');

  const isDelivery = nav === ShipmentType.DELIVERY;
  const isPickup = nav === ShipmentType.PICKUP;

  return <React.Fragment>
    <Header className="shipment__header">Выберите способ доставки</Header>

    <div>
      <Nav className="shipment__nav">
        <ul className="shipment__list">
          <li
            className={`shipment__item ${isDelivery && 'shipment__item--active'}`}
            onClick={() => setNav('delivery')}
          ><a href="#">Доставка</a></li>
          <li
            className={`shipment__item ${isPickup && 'shipment__item--active'}`}
            onClick={() => setNav('pickup')}
          ><a href="#">Самовывоз</a></li>
        </ul>
      </Nav>

      {isDelivery && <Delivery />}
      {isPickup && <Pickup />}
    </div>

  </React.Fragment>;
};

export default Shipment;
