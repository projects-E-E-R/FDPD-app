import React from 'react';
import Body from './Body';

const BodyComponent = (props) => {
  return <Body {...props} />;
};

export default React.memo(BodyComponent);
