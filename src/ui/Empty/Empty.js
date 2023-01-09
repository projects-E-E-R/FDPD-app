import React from 'react';
import { Empty as SEmpty } from 'antd';
import Styled from './Empty.styles';

const Empty = (props) => {
  return <Styled {...props} as={SEmpty} />;
};

export default Empty;
