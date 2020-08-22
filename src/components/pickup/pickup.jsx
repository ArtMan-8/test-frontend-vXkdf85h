import React from 'react';
import Map from '../map/map.jsx';
import BtnSubmit from '../btn-submit/btn-submit.jsx';
import Form from './pickup.styled';
import PickPoints from '../../mock/pick-point';

const Pickup = () => {
  const [pickPoint, setPickPoint] = React.useState(PickPoints[0].title);

  return <React.Fragment>
    <Form action="https://echo.htmlacademy.ru/" method="POST" className="pickup__form form">
      <div className="form__addresses">
        {PickPoints.map((point) => (
          <label key={point.id} className="form__label">
            <input className="form__input" type="radio" name="pickup-address"
              id={point.id}
              checked={point.title === pickPoint}
              onChange={() => setPickPoint(point.title)}
              value={point.title}
              required
            />Пункт выдачи заказов {point.title}
          </label>))}
      </div>

      <div className="form__map" id="map">
        <Map
          onClick={(title) => setPickPoint(title)}
          pickPoints={PickPoints}
        />
      </div>

      <BtnSubmit>Оформить заказ</BtnSubmit>
    </Form>
  </React.Fragment>;
};

export default Pickup;
