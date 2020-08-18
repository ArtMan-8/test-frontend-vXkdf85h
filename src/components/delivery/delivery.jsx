import React from 'react';
import styled from 'styled-components';
import {
  ColorsActive, ColorsMain, TextDefault, TextSmall,
} from '../variables.styled';

import BtnSubmit from '../btn-submit/btn-submit.jsx';

const Form = styled.form`
  width: 952px;
  padding: 40px 40px 48px;
  border-radius: 0 0 5px 5px;
  background-color: ${ColorsMain.WHITE};

  input, textarea {
    ${TextDefault}
    font-family: inherit;
  }

  .form__fields {
    display: flex;
    flex-direction: column;
    margin-bottom: 34px;
  }

  .form__contacts {
    display: flex;
    justify-content: space-between;

    .form__field {
      width: 49%;
    }
  }

  .form__label {
    margin-bottom: 20px;
    color: ${ColorsMain.BLACK};
    ${TextSmall}
  }

  .form__field {
    position: relative;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    textarea {
      height: unset;
      resize: none;
    }
  }

  .form__field--error::before {
    position: absolute;
    content: '';
    width: 22px;
    height: 22px;
    right: 13px;
    bottom: 13px;
    background-image: url('/img/icon-error.svg');
  }

  .form__field--error::after {
    position: absolute;
    content: 'Заполните поле';
    bottom: -20px;
    color: ${ColorsActive.RED};
    ${TextSmall}
  }

  .form__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    margin-top: 10px;
    padding-left: 12px;
    border: 1px solid ${ColorsMain.GREY};
    border-radius: 4px;
    color: ${ColorsMain.BLACK};

    &::placeholder {
      color: ${ColorsMain.GREY};
    }

    &:focus {
      border: 1px solid ${ColorsMain.BLACK};
    }

    &:invalid {
      box-shadow: none;
    }
  }
`;

const Delivery = () => <React.Fragment>
  <Form action="#" className="shipment__form form">
    <div className="form__fields">
      <div className="form__contacts">
        <div className="form__field">
          <label className="form__label" htmlFor="shipment-name">ФИО</label>
          <input className="form__input" type="text" name="shipment-name" id="shipment-name"
            placeholder="Только кириллица" required/>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="shipment-tel">Телефон</label>
          <input className="form__input" type="tel" name="shipment-tel" id="shipment-tel"
            placeholder="+7 (___) ___-__-__" /* pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" */ minLength="11" maxLength="11" required/>
        </div>
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="shipment-address">Адрес доставки</label>
        <input className="form__input" type="text" name="shipment-address" id="shipment-address"
          placeholder="Город, улица, дом" required/>
      </div>

      <div className="form__field">
        <label className="form__label" htmlFor="shipment-comment">Комментарий</label>
        <textarea className="form__input" type="text" name="shipment-comment" id="shipment-comment"
          placeholder="" rows="4" required/>
      </div>
    </div>

    <BtnSubmit>Оформить заказ</BtnSubmit>
  </Form>
</React.Fragment>;

export default Delivery;
