import { darken, lighten } from 'polished';
import styled from 'styled-components';

const StyledSideBarMenu = styled.div`
  cursor: pointer;
  line-height: ${({ theme }) => theme.header.height}px;
  color: ${({ theme }) => theme.header.color};
  padding: 0 1rem;
  transition: background-color 0.3s ease-out;
  & > svg {
    fill: ${({ theme }) => theme.header.color};
  }
  &:hover {
    background-color: ${({ theme }) =>
      darken(0.04, theme.header.backgroundColor)} !important;
  }
  &:active {
    background-color: ${({ theme }) =>
      lighten(0.04, theme.header.backgroundColor)} !important;
  }
`;

export default StyledSideBarMenu;
