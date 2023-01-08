/* eslint-disable no-unused-vars */
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getCurrentYear } from 'utils/datetime';
import { StyledLogin } from './Login.styles';
import BackgroundVideo from 'components/BackgroundVideo';
import Button from '../../ui/Button/Button';
import { MoreOutlined } from '@ant-design/icons';
import { Alert, Drawer, Checkbox, Form, Input, message } from 'antd';
import useAccountStore from '../../store/common/account';
import { useTranslation } from 'react-i18next';
const Login = (props) => {
  const { onFinish, onFinishFailed, videoSource } = props;
  const {t} = useTranslation();
  const { loading, error, setError } = useAccountStore(
    ({ loading, error, setError }) => ({
      loading,
      error,
      setError
    })
  );
  const onAlertCloseHandler = () => {
    setError(null);
  };
  const layout = {
    layout: 'horizontal',
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  
  return (
    <BackgroundVideo videoSource={videoSource}>
   <StyledLogin>
        <div className="login-container">
          <div className="logo-container">
            <div className="logo fdpd" />
          </div>
          <div className="banner-container">
            {error ? (
              <Alert
                description={error.message || error.title}
                type="error"
                showIcon
                closable
                onClose={onAlertCloseHandler}
              />
            ) : null}
          </div>
          <div className="form-container">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: t('login.inputUsernameError') }
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: t('login.inputPasswordError') }
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<KeyOutlined />}
                  disabled={loading}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox disabled={loading}>{t('login.rememberMe')}</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  color="primary"
                  size="lg"
                  htmlType="submit"
                  loading={loading}
                >
                  {t('login.signIn')}
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="footer-container">
            <span>
              © {getCurrentYear()} App FDPD by E.E.R 
            </span>
          </div>
        </div>
      </StyledLogin>
      </BackgroundVideo>
  );
};

export default Login;