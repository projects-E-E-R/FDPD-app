import { darken, lighten } from 'polished';
import styled from 'styled-components';

const StyledOptions = styled.div`
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

export const StyledAvatar = styled.div`
  max-width: 190px;
  .avatar-container {
    padding: 0.5rem;
    width: 100%;
    min-height: 8rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .account-data-container {
    & > div::first-letter {
      text-transform: unset !important;
    }
  }
`;

export const StyledMenuItem = styled.div`
  &:hover {
    background-color: unset !important;
  }
`;

export default StyledOptions;
