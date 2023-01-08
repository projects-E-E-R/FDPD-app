import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import StyledSideBarMenu from './SideBarMenu.styles';
import useSidebarState from 'store/common/sidebar';

const SideBarMenu = () => {
  const { collapsed, setCollapsed } = useSidebarState();

  const clickHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledSideBarMenu onClick={clickHandler}>
      {collapsed ? (
        <MenuUnfoldOutlined style={{ fontSize: '15px' }} />
      ) : (
        <MenuFoldOutlined style={{ fontSize: '15px' }} />
      )}
    </StyledSideBarMenu>
  );
};

export default SideBarMenu;
