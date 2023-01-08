import { darken } from 'polished';
import styled from 'styled-components';

const StyledBody = styled.div`
  background-color: ${({ theme }) =>
    darken(0.03, theme.content.backgroundColor)};
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  .layout-body {
    height: 100%;
    position: relative;
    flex-grow: 1;
  }
`;

export default StyledBody;
