import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './Header.styles';
import Title from 'ui/Title/Title';
import { Space } from 'antd';

const Header = (props) => {
  const { title, icon, infoText, tools,titleCenter,questionTitle } = props;

  return (
    <HeaderStyle titleCenter={titleCenter} questionTitle={questionTitle}>
    <Title uppercase kind="widget" icon={icon} infoText={infoText}>{title}</Title>
    <Space>{tools}</Space>
    </HeaderStyle>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  infoText: PropTypes.string,
  tool: PropTypes.object
};

Header.defaultProps = {
  title: 'no title',
  error: null,
  loading: false
};

export default React.memo(Header);
