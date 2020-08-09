import React from 'react';
import styled from 'styled-components';
import {
  ColorsActive, ColorsMain, TextDefault, TextSmall
} from '../variables.styled';

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
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none'%3e%3cpath fill='%23F12828' d='M11 22C4.9 22 0 17.1 0 11S4.9 0 11 0s11 4.9 11 11-4.9 11-11 11zm0-20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z'/%3e%3cpath fill='%23F12828' d='M11 12c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zM11 16c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.7 0-.1 0-.3.1-.4.1-.1.1-.2.2-.3.3-.3.7-.4 1.1-.2.1 0 .1 0 .2.1 0 0 .1.1.2.1.1.1.2.2.2.3v.4c0 .1 0 .3-.1.4-.1.1-.1.2-.2.3-.2.2-.4.3-.7.3z'/%3e%3c/svg%3e");
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

  .form__btn {
    display: block;
    padding: 12px 38px;
    margin-left: auto;
    border: none;
    border-radius: 80px;
    color: ${ColorsMain.WHITE};
    background-color: ${ColorsActive.BLUE};
    cursor: pointer;
    ${TextDefault}

    &:hover {
      background-color: ${ColorsActive.DARK_BLUE};
    }

    &:active {
      color: ${ColorsMain.GREY};
      background-color: ${ColorsMain.GREY_LIGHT};
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

    <div className="form__submit">
      <button className="form__btn" type="submit">Оформить заказ</button>
    </div>
  </Form>
</React.Fragment>;

export default Delivery;
