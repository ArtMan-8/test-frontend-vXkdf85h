import React from 'react';
import InputMask from 'react-input-mask';
import BtnSubmit from '../btn-submit/btn-submit.jsx';
import Form from './delivery.styled';

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
              onChange={(evt) => {
                if (!evt.target.validity.valid) {
                  evt.target.parentElement.classList.add('form__field--error');
                } else {
                  evt.target.parentElement.classList.remove('form__field--error');
                }

                setNameValue(evt.target.value);
              }}
              value={nameValue}
              required
            />
            <p className="form__hint">ФИО введите кирилицой</p>
          </div>

          <div className="form__field">
            <label className="form__label" htmlFor="delivery-tel">Телефон</label>
            <InputMask className="form__input" type="tel" name="delivery-tel" id="delivery-tel"
              pattern="\+7\s?[\(][0-9]{3}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              placeholder="+7 (___) ___-__-__"
              mask="+7 (999) 999-99-99"
              onChange={(evt) => {
                if (!evt.target.validity.valid) {
                  evt.target.parentElement.classList.add('form__field--error');
                } else {
                  evt.target.parentElement.classList.remove('form__field--error');
                }

                setTelValue(evt.target.value);
              }}
              value={telValue}
              required
            />
            <p className="form__hint">Введите телефон</p>
          </div>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="delivery-address">Адрес доставки</label>
          <input className="form__input" type="text" name="delivery-address" id="delivery-address"
            placeholder="Город, улица, дом"
            onChange={(evt) => {
              if (!evt.target.validity.valid) {
                evt.target.parentElement.classList.add('form__field--error');
              } else {
                evt.target.parentElement.classList.remove('form__field--error');
              }

              setAddressValue(evt.target.value);
            }}
            value={addressValue}
            required
          />
          <p className="form__hint">Заполните адрес</p>
        </div>

        <div className="form__field">
          <label className="form__label" htmlFor="delivery-comment">Комментарий</label>
          <textarea className="form__input" type="text" name="delivery-comment" id="delivery-comment"
            placeholder="" rows="4"
            onChange={(evt) => {
              if (!evt.target.validity.valid) {
                evt.target.parentElement.classList.add('form__field--error');
              } else {
                evt.target.parentElement.classList.remove('form__field--error');
              }

              setCommentValue(evt.target.value);
            }}
            value={commentValue}
            required
          />
          <p className="form__hint">Добавьте комментарий</p>
        </div>
      </div>

      <BtnSubmit>Оформить заказ</BtnSubmit>
    </Form>
  </React.Fragment>;
};

export default Delivery;
