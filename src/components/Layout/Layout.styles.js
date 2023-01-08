import { darken, lighten } from 'polished';
import { device } from 'settings/theme';
import styled from 'styled-components';

export const StyledLayout = styled.div`
  height: 100%;

  & .logo-container {
    height: inherit;
    padding: 10px;
    width: 210px;
    & .logo {
      width: auto;
      height: 100%;
    }
  }

  & .link-home-container {
    height: inherit;
    display: unset;
    width: 100%;
  }

  & .mobile-menu {
    display: unset;
  }
  @media ${device.tablet} {
    & .mobile-menu {
      display: none;
    }
  }

  /* button sider */
  & .sider-button-container {
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
  }
`;
