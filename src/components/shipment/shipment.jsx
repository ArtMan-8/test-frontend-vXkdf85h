import React from 'react';
import Delivery from '../delivery/delivery.jsx';
import Pickup from '../pickup/pickup.jsx';
import { Header, Nav } from './shipment.styled';

const ShipmentType = {
  DELIVERY: 'delivery',
  PICKUP: 'pickup',
};

const Shipment = () => {
  const [nav, setNav] = React.useState('delivery');

  const isDelivery = nav === ShipmentType.DELIVERY;
  const isPickup = nav === ShipmentType.PICKUP;

  return <React.Fragment>
    <Header className="shipment__header">Выберите способ доставки</Header>

    <div className="shipment__wrapper">
      <Nav className="shipment__nav">
        <ul className="shipment__list">
          <li
            className={`shipment__item ${isDelivery ? 'shipment__item--active' : ''}`}
            onClick={() => setNav('delivery')}
          ><a href="#">Доставка</a></li>
          <li
            className={`shipment__item ${isPickup ? 'shipment__item--active' : ''}`}
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
