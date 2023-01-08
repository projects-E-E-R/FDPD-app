import React from 'react';
import PropTypes from 'prop-types';
import Item from './children/Item/Item';
import StyledMenu from './Menu.styles';

const Menu = (props) => {
  const { children, className, ...rest } = props;
  return (
    <StyledMenu {...rest} className={`layout-menu ${className}`}>
      {children}
    </StyledMenu>
  );
};

Menu.Item = Item;

Menu.propTypes = {
  float: PropTypes.oneOf(['left', 'right'])
};

Menu.defaultProps = {
  float: 'left'
};

export default Menu;
