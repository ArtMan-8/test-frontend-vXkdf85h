import styled from 'styled-components';
import {
  BreakPoints, ColorsActive, ColorsMain,
} from '../variables.styled';

const Form = styled.form`
  width: 952px;
  padding: 40px 40px 48px;
  border-radius: 0 0 5px 5px;
  background-color: ${ColorsMain.WHITE};

  @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
    padding: 30px 30px 35px;
    width: auto;
  }

  @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
    padding: 15px 15px 20px;
  }

  .form__addresses {
    margin-top: 5px;
    margin-bottom: 28px;
    column-width: 400px;

    @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
      margin-top: 0;
      margin-bottom: 23px;
    }

    @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
      margin-bottom: 15px;
    }
  }

  .form__label {
    display: block;
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

    @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
      height: 500px;
      margin-bottom: 30px;
    }

    @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
      height: 400px;
      margin-bottom: 20px;
    }
  }
`;

export default Form;
