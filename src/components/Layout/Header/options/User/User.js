/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import {
  ExclamationCircleOutlined,
  LogoutOutlined,
  UserOutlined,
  UserSwitchOutlined,
  BellOutlined
} from '@ant-design/icons';
import StyledOptions, { StyledAvatar, StyledMenuItem } from './User.styles';
import { Avatar, Dropdown, Menu, message, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import useAccountStore from 'store/common/account';
import { useHistory } from 'react-router';

const { confirm } = Modal;

const Settings = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { name, shortName, email, clearAll, logout } = useAccountStore();
  const showMessage = useCallback(() => {
    logout().subscribe({
      next: ({ error }) => {
        if (error) {
          message.error(error?.title);
          clearAll();
          history.push('/');
        } else {
          message.loading(t('common.pleaseWait'), 1.5).then(() => {
            message.success(t('login.success'), 1);
            clearAll();
          });
        }
      },
      error: () => {
        message.success(t('login.success'), 1);
        clearAll();
        history.push('/');
      }
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

  const menu = (
    <Menu>
      <StyledMenuItem
        as={Menu.Item}
        onClick={(e) => {
          e.domEvent.preventDefault();
          e.domEvent.stopPropagation();
        }}
      >
        <StyledAvatar>
          <div className="avatar-container">
            <Avatar size={90} style={{ fontSize: 35 }}>
              {shortName}
            </Avatar>
          </div>
          <div className="account-data-container">
            <div className="ellipsis">{name}</div>
            <div className="ellipsis">{email}</div>
          </div>
        </StyledAvatar>
      </StyledMenuItem>
      <Menu.Divider />
      <Menu.Item key="0" onClick={showConfirmation}>
        <LogoutOutlined /> {t('login.logOut')}
      </Menu.Item>
    </Menu>
  );

  return (
    <StyledOptions
      overlay={menu}
      trigger={['click']}
      placement="bottomRight"
      arrow
      as={Dropdown}
    >
      <UserSwitchOutlined style={{ fontSize: '15px' }} />
    </StyledOptions>
  );
};

export default Settings;
