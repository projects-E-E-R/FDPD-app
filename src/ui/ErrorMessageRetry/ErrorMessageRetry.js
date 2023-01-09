import React from 'react';
import PropTypes from 'prop-types';
import Button from 'ui/Button/Button';
import { Collapse } from 'antd';
import {
  StyledCollapse,
  StyledContainer,
  StyledContent,
  StyledTitle
} from './ErrorMessageRetry.styles';
import { ReloadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const ErrorMessageRetry = ({
  title,
  message,
  callback,
  error,
  loading,
  ...rest
}) => {
  const { t } = useTranslation();
  const retryHandler = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    callback();
  };

  return (
    <StyledContainer negative iserror={error} {...rest}>
      <StyledTitle>{t('common.requestingError')}</StyledTitle>
      <StyledCollapse bordered={false} as={Collapse}>
        <Collapse.Panel header="Detalles">
          <StyledTitle>{error ? error.title : title}</StyledTitle>
          <StyledContent>{error ? error.message : message}</StyledContent>
        </Collapse.Panel>
      </StyledCollapse>
      <Button
        loading={loading}
        disabled={loading}
        icon={<ReloadOutlined />}
        ghost
        danger
        onClick={retryHandler}
        size="sm"
      >
        {t('common.retry')}
      </Button>
    </StyledContainer>
  );
};

ErrorMessageRetry.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  callback: PropTypes.func,
  classname: PropTypes.string,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  error: PropTypes.object
};

ErrorMessageRetry.defaultProps = {
  title: 'Error desconocido',
  message: '',
  callback: null,
  className: ''
};

export default ErrorMessageRetry;
