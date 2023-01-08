import React from 'react';
import Header from './Header';

const HeaderComponent = (props) => {
  return <Header {...props} />;
};

export default React.memo(HeaderComponent);
