import styled from 'styled-components';
import {
  ColorsActive, ColorsMain, TextDefault, TextSmall,
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

export default Form;
