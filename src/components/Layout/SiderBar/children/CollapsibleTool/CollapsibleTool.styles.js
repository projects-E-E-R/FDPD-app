import { darken, lighten } from 'polished';
import { device } from 'settings/theme';
import styled from 'styled-components';

const Styled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  & > :first-child {
    flex-grow: 1;
  }
`;

export const StyledTool = styled.div`
  display: none;
  height: 40px;
  min-height: 40px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.sidebar.borderColor};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text.color};
    background-color: ${({ theme }) =>
      lighten(0.05, theme.sidebar.backgroundColor)};
  }
  &:active {
    cursor: pointer;
    color: ${({ theme }) => theme.text.color};
    background-color: ${({ theme }) =>
      darken(0.05, theme.sidebar.backgroundColor)};
  }
  & > span {
    padding: 0 1rem;
    & > svg {
      color: ${({ theme }) => theme.sidebar.borderColor};
    }
  }
  @media ${device.tablet} {
    display: flex;
  }
`;

export default Styled;
