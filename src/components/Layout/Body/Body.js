import React from 'react';
import StyledBody from './Body.styles';

const Body = (props) => {
  const { children } = props;
  return (
    <>
      <StyledBody className="layout-body">{children}</StyledBody>

    </>
  );
};

export default Body;
