import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import {
  ColorsActive, ColorsMain, TextDefault, TextSmall,
} from '../variables.styled';

import BtnSubmit from '../btn-submit/btn-submit.jsx';

export const Form = styled.form`
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

const Delivery = () => {
  const [nameValue, setNameValue] = React.useState('');
  const [telValue, setTelValue] = React.useState('');
  const [addressValue, setAddressValue] = React.useState('');
  const [commentValue, setCommentValue] = React.useState('');

  return <React.Fragment>
    <Form action="https://echo.htmlacademy.ru/" method="POST" className="delivery__form form">
      <div className="form__fields">
        <div className="form__contacts">
          <div className="form__field">
            <label className="form__label" htmlFor="delivery-name">ФИО</label>
            <input className="form__input" type="text" name="delivery-name"
              id="delivery-name"
              pattern="^[А-Яа-яЁё\s\-]+$"
              placeholder="Только кириллица"
              onChange={(evt) => setNameValue(evt.target.value)}
              value={nameValue}
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="delivery-tel">Телефон</label>
            <InputMask className="form__input" type="tel" name="delivery-tel" id="delivery-tel"
              pattern="\+7\s?[\(][0-9]{3}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              placeholder="+7 (___) ___-__-__"
              mask="+7 (999) 999-99-99"
              onChange={(evt) => setTelValue(evt.target.value)}
              value={telValue}
              required
            />
          </div>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="delivery-address">Адрес доставки</label>
          <input className="form__input" type="text" name="delivery-address" id="delivery-address"
            placeholder="Город, улица, дом"
            onChange={(evt) => setAddressValue(evt.target.value)}
            value={addressValue}
            required
          />
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="delivery-comment">Комментарий</label>
          <textarea className="form__input" type="text" name="delivery-comment" id="delivery-comment"
            placeholder="" rows="4"
            onChange={(evt) => setCommentValue(evt.target.value)}
            value={commentValue}
            required
          />
        </div>
      </div>

      <BtnSubmit>Оформить заказ</BtnSubmit>
    </Form>
  </React.Fragment>;
};

export default Delivery;
