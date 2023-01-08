import React from 'react';
import StyledItem from './Item.styles';

const Item = (props) => {
  const { children } = props;

  return <StyledItem className="layout-menu-item">{children}</StyledItem>;
};

export default Item;
