import { darken, lighten } from 'polished';
import styled from 'styled-components';

const StyledHeader = styled.div`
  /* position: fixed; */
  z-index: 3;
  height: ${({ theme }) => theme.header.height}px;
  width: 100%;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.header.backgroundColor};
  border-bottom: 1px solid
    ${({ theme }) => darken(0.1, lighten(0.09, theme.header.backgroundColor))};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default StyledHeader;
