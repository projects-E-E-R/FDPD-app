import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './Header.styles';
import Title from 'ui/Title/Title';
import { Space } from 'antd';

const Widget = (props) => {
  const { title, icon, infoText, tools } = props;

  return (
    <HeaderStyle>
      <Title uppercase kind="widget" icon={icon} infoText={infoText}>
        {title}
      </Title>
      <Space>{tools}</Space>
    </HeaderStyle>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  infoText: PropTypes.string,
  tool: PropTypes.object
};

Widget.defaultProps = {
  title: 'no title',
  error: null,
  loading: false
};

export default React.memo(Widget);
