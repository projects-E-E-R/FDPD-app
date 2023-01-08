import React from 'react';
import Sider from './Sider';

const WrapperComponent = (props) => {
  return <Sider {...props} />;
};

export default React.memo(WrapperComponent);
