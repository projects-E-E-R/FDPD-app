import React from 'react';
import StyledHeader from './Header.styles';

const Header = (props) => {
  const { children } = props;
  return <StyledHeader className="layout-header">{children}</StyledHeader>;
};

export default Header;
