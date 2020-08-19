import styled from 'styled-components';
import {
  BreakPoints, ColorsActive, ColorsMain, TextDefault,
} from '../variables.styled';

const Submit = styled.button`
  display: block;
  padding: 12px 38px;
  margin-left: auto;
  border: none;
  border-radius: 80px;
  color: ${ColorsMain.WHITE};
  background-color: ${ColorsActive.BLUE};
  cursor: pointer;
  ${TextDefault}

  @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
    padding: 10px 35px;
  }

  @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
    padding: 8px 20px;
  }

  &:hover {
    background-color: ${ColorsActive.DARK_BLUE};
  }

  &:active {
    color: ${ColorsMain.GREY};
    background-color: ${ColorsMain.GREY_LIGHT};
  }
`;

export default Submit;
