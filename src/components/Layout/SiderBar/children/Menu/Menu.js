/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import StyledMenu from './Menu.styles';
import { Menu as SMenu } from 'antd';

const Menu = (props) => {
  const { children, className, ...rest } = props;
  return (
    <StyledMenu {...rest} className={`layout-menu ${className}`} as={SMenu}>
      {children}
    </StyledMenu>
  );
};

Menu.Divider = SMenu.Divider;
Menu.Item = SMenu.Item;
Menu.ItemGroup = SMenu.ItemGroup;
Menu.SubMenu = SMenu.SubMenu;

Menu.propTypes = {
  float: PropTypes.oneOf(['left', 'right'])
};

Menu.defaultProps = {
  float: 'left'
};

export default Menu;
