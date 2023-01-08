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
  }

  .item-content-disabled {
    width: 95%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    color: ${({ theme }) => theme.text.color};
    .text {
      opacity: 70%;
    }
    .shopIcon {
      color: ${({ theme }) => theme.sidebar.backgroundColor};
      background: ${({ theme }) => theme.text.color};
    }
  }

  .item-content,
  .ant-menu-submenu-arrow {
    color: ${({ theme }) => theme.text.color};
  }
  color: ${({ theme }) => theme.text.color};

  .ant-menu.ant-menu-inline-collapsed,
  .ant-menu-submenu,
  .ant-menu-submenu-title {
    /* padding-left: -10px; */
    /* display: contents; */
  }

  .menu-item-sidebar {
    margin-left: -10px;
  }
  .menu-item-user {
    margin-left: 5px;
  }
  .menu-item-avatar {
    font-size:10rem;
  }
  .ant-menu-vertical,
  .ant-menu-item::after,
  .ant-menu-vertical-left,
  .ant-menu-item::after,
  .ant-menu-vertical-right,
  .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid ${({ theme }) => darken(0.03, theme.text.color)};
  }

  .ant-menu:not(.ant-menu-horizontal) {
    .ant-menu-item-selected {
      background-color: ${({ theme }) =>
        darken(0.05, theme.sidebar.backgroundColor)};
    }
  }
`;

/* ant-menu-item ant-menu-item-selected menu-item */

export default StyledMenu;

/* .ant-menu {
    .ant-menu-sub {
      .ant-menu-inline {
        background-color: ${({ theme }) => theme.sidebar.backgroundColor};
        border-color: ${({ theme }) => theme.sidebar.backgroundColor};
      }
    }
  } */

/* .ant-menu-submenu,
  .ant-menu-submenu-inline,
  .menu-item, 
  .ant-menu-submenu-open{
    padding-left: 20px;
  } */
/* .ant-menu,
  ant-menu-inline-collapsed,
  .ant-menu-submenu-title {
    padding-left: 10000px;
  } */

/* padding: 10px; */
/* .item-content,
  .ant-menu-submenu-arrow {
    color: ${({ theme }) => darken(0.03, theme.text.color)};
  } */

/* .ant-menu-submenu-arrow {
    color: ${({ theme }) => darken(0.03, theme.sidebar.backgroundColor)};
  } */

/* .ant-menu.ant-menu-inline-collapsed {
    .ant-menu-submenu {
      .ant-menu-submenu-title {
        padding-left: 1000px;
      }
    }
  } */

/* .ant-menu-submenu,
  .ant-menu-submenu-inline,
    padding-left: 2220px;
  }
 */

/* .menu-container {
    background-color: ${({ theme }) => theme.sidebar.backgroundColor}};
    border-right: 0;
  } */

/* background-color: ${({ theme }) =>
    darken(0.03, theme.content.backgroundColor)}; */

/* .ant-menu-item,
  .ant-menu-item-selected,
  .ant-menu-item-selected 
    background-color: #123def;
  }
 */
