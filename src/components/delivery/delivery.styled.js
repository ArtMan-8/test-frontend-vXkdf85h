import styled from 'styled-components';
import {
  BreakPoints, ColorsActive, ColorsMain, TextDefault, TextSmall,
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

  input, textarea {
    ${TextDefault}
    font-family: inherit;
  }

  .form__fields {
    display: flex;
    flex-direction: column;
    margin-bottom: 34px;

    @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
      margin-bottom: 30px;
    }

    @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
      margin-bottom: 20px;
    }

    & > .form__field:last-child {
      margin-bottom: 0;
    }
  }

  .form__contacts {
    display: flex;
    justify-content: space-between;

    .form__field {
      width: 49%;
    }

    @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
      flex-wrap: wrap;

      .form__field {
        width: 100%;
      }
    }
  }

  .form__label {
    margin-bottom: 20px;
    color: ${ColorsMain.BLACK};
    ${TextSmall}

    @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
      margin-bottom: 15px;
    }

    @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
      margin-bottom: 10px;
    }
  }

  .form__field {
    position: relative;
    margin-bottom: 30px;

    @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
      margin-bottom: 25px;
    }

    @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
      margin-bottom: 20px;
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
    background-image: url('img/icon-error.svg');
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
      outline: none;
    }
  }

  .form__input + .form__hint {
    display: none;
  }

  .form__input:invalid:focus + .form__hint {
    display: block;
    position: absolute;
    bottom: -32px;
    color: ${ColorsActive.RED};
    ${TextSmall}
  }
`;

export default Form;
