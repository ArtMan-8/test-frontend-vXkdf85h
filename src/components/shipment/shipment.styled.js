import styled from 'styled-components';
import { TextHeader, ColorsActive, ColorsMain } from '../variables.styled';

export const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 46px;
  ${TextHeader}
  color: ${ColorsMain.BLACK};
`;

export const Nav = styled.nav`
  .shipment__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .shipment__item {
    display: inline-block;
    margin-right: 8px;
    padding: 12px 39px;
    border-radius: 5px 5px 0 0;
    background-color: ${ColorsMain.GREY_LIGHT};
    cursor: pointer;

    a {
      color: ${ColorsMain.GREY};
    }
  }

  .shipment__item--active {
    background-color: ${ColorsMain.WHITE};

    a {
      color: ${ColorsActive.BLUE};
    }
  }

  .shipment__item a {
    text-decoration: none;
  }
`;
