import styled from 'styled-components';
import { darken } from 'polished';

const StyledMenu = styled.div`
  ${({ float }) => {
    return `float: ${float}`;
  }}
  border-right: 1px solid ${({ theme }) => theme.sidebar.borderColor};
  background-color: ${({ theme }) => theme.sidebar.backgroundColor};
  border-color: ${({ theme }) => theme.sidebar.backgroundColor};

  .ant-menu-sub,
  .ant-menu-inline {
    background-color: ${({ theme }) => theme.sidebar.backgroundColor};
    /* border-right: -1px; */
  }
  .menu-item,
  .ant-menu-item,
  .ant-menu-item-selected {
    background-color: ${({ theme }) => theme.sidebar.backgroundColor};
    background: ${({ theme }) => theme.sidebar.backgroundColor};
    color: ${({ theme }) => theme.text.color};
    height: 70px;
  }


  .item-content,
  .ant-menu-submenu-arrow {
    color: ${({ theme }) => theme.text.color};
  }
  color: ${({ theme }) => theme.text.color};

  .ant-menu.ant-menu-inline-collapsed,
  .ant-menu-submenu,
  .ant-menu-submenu-title {
     padding-left: -10px; 
     display: contents;
     font-size:20px;
  }
  .menu-item-sidebar {
    margin-left: -10px;
  }
  .menu-item-content-user {
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu-item-content-user-welcome{
    font-size:20px;
  }
  .menu-item-avatar {
    font-size:4rem;
    color: ${({ theme }) => theme?.avatar?.primary?.color};
  }
  .menu-item-avatar-section {
    font-size:1.5rem;
  }
  .ant-menu-vertical,
  .ant-menu-item::after,
  .ant-menu-vertical-left,
  .ant-menu-item::after,
  .ant-menu-vertical-right,
  .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid ${({ theme }) => darken(0.06, theme.text.color)};
  }

  .ant-menu:not(.ant-menu-horizontal) {
    .ant-menu-item-selected {
      background-color: ${({ theme }) =>
        darken(0.05, theme.sidebar.backgroundColor)};
    }
  }
`;
export default StyledMenu;