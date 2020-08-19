import React from 'react';
import styled from 'styled-components';
import {
  ColorsActive, ColorsMain,
} from '../variables.styled';

import Map from '../map/map.jsx';
import BtnSubmit from '../btn-submit/btn-submit.jsx';
import PickPoints from '../../mock/pick-point';

const Form = styled.form`
  width: 952px;
  padding: 40px 40px 48px;
  border-radius: 0 0 5px 5px;
  background-color: ${ColorsMain.WHITE};

  .form__addresses {
    margin-top: 5px;
    margin-bottom: 28px;
    column-count: 2;
  }

  .form__label {
    display: inline-block;
    color: ${ColorsMain.BLACK};
    cursor: pointer;

    &:hover {
      color: ${ColorsActive.BLUE};
    }
  }

  .form__input {
    margin: 0;
    margin-right: 12px;
    transform: scale(1.2);
    cursor: pointer;
  }

  .form__map {
    width: 100%;
    height: 560px;
    margin-bottom: 38px;
    background-color: ${ColorsMain.WHITE};
  }
`;

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
        <Map pickPoints={PickPoints}
          onClick={(title) => setPickPoint(title)}
        />
      </div>

      <BtnSubmit>Оформить заказ</BtnSubmit>
    </Form>
  </React.Fragment>;
};

export default Pickup;
