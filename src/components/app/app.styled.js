import styled from 'styled-components';
import { BreakPoints, ColorsBackground } from '../variables.styled';

const Wrapper = styled.section`
  padding: 72px 84px 104px;
  background-color: ${ColorsBackground.GREY};

  @media screen and (max-width: ${BreakPoints.TABLET_MAX}) {
    padding: 50px 60px 70px;
  }

  @media screen and (max-width: ${BreakPoints.MOBILE_MAX}) {
    padding: 20px 20px 30px;
  }
`;

export default Wrapper;
