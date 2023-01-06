import React from 'react';
import PropTypes from 'prop-types';
import { Button as SButton } from 'antd';
import Styled from './Button.styles';
import { useTranslation } from 'react-i18next';

const Button = (props) => {
  const { children, loading } = props;
  const { t } = useTranslation();
  return (
    <Styled {...props} as={SButton}>
      {loading ? `${t('common.wait')}...` : children}
    </Styled>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  $capitalize: PropTypes.bool,
  $uppercase: PropTypes.bool,
  bold: PropTypes.bool,
  shape: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  hidden: PropTypes.bool,
  // Own
  type: PropTypes.oneOf(['default', 'primary', 'dashed', 'text', 'link']),
  loading: PropTypes.any,
  $transparent: PropTypes.bool
};

Button.defaultProps = {
  size: 'md',
  color: 'default',
  type: 'default'
};

export default Button;
