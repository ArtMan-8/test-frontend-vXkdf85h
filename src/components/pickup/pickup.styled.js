import styled from 'styled-components';
import {
  ColorsActive, ColorsMain,
} from '../variables.styled';

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

export default Form;
