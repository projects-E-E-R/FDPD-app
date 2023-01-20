import React from 'react';
import HeaderStyle from './Header.styles';
import Title from 'ui/Title/Title';
import { Space } from 'antd';

const Footer = (props) => {
  const { title, icon, infoText, tools,titleCenter } = props;

  return (
    <HeaderStyle titleCenter={titleCenter}>
    <Title uppercase kind="widget" icon={icon} infoText={infoText}>{title}</Title>
    <Space>{tools}</Space>
    </HeaderStyle>
  );
};



export default React.memo(Footer);
