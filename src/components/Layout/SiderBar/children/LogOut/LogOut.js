/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import {
  ExclamationCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import StyledButtonContainer from './LogOut.styles';
import {  message, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import useAccountStore from 'store/common/account';
import { useHistory } from 'react-router';
import Button from 'ui/Button/Button';
const { confirm } = Modal;

const LogOut = () => {
  const { t } = useTranslation();
  const { clearAll } = useAccountStore();
  const showMessage = useCallback(() => {
      message.loading(t('common.pleaseWait'), 1.5).then(() => {
        message.success(t('login.success'), 1);
        clearAll();
        window.location.reload();
      });
  }, [t]);

  const showConfirmation = useCallback(() => {
    confirm({
      title: t('login.confirmTitle'),
      icon: <ExclamationCircleOutlined />,
      okButtonProps: { style: { background: '#212E41' } },
      content: t('login.confirmMessage'),
      onOk: showMessage
    });
  }, [t, showMessage]);


  return (
    <StyledButtonContainer>
    <Button
      $capitalize
      loading={false}
      disabled={false}
      type="primary"
      color="primary"
      onClick={showConfirmation}
      icon={<LogoutOutlined />}
      style={{width:240,height:50,fontSize:18}}
    >
      {t('login.logOut')}
    </Button>
    </StyledButtonContainer>
  );
};

export default LogOut;
