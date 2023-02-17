import React, { useEffect,useState } from 'react';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { UserOutlined } from '@ant-design/icons';
import useAccountStore from 'store/common/account';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, Space } from 'antd';
const UpdatePassword = (props) => {
    const {openDrawer, onCloseDrawer} = props
    const [open, setOpen] = useState(false);
    const [currentPasswordValid, setCurrentPasswordValid] = useState(false);
    //const [currentPasswordValid, setCurrentPasswordValid] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="Actualizar contraseña"
        width={360}
        onClose={onCloseDrawer}
        visible={openDrawer}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" requiredMark>
            { !currentPasswordValid ? <>
                <Form.Item
                name="password"
                label="Actual contraseña"
                style={{width: '100%'}}
                rules={[
                  {
                    required: true,
                    type: '',
                    message: 'Please enter user name',
                  },
                ]}
                >
                    <Input.Password placeholder="Ingrese su actual contraseña" />
                </Form.Item>
                <Button onClick={() => setCurrentPasswordValid(true)}>Validar</Button>
            </> : 
            <>
              <Form.Item
                name="new_password1"
                label="Nueva contraseña"
                style={{width: '100%'}}
                rules={[
                  {
                    required: true,
                    type: '',
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input.Password placeholder="Ingrese su nueva contraseña" />
              </Form.Item>
          
              <Form.Item
                name="new_password2"
                label="Repetir nueva contraseña"
                style={{width: '100%'}}
                rules={[
                  {
                    required: true,
                    type: '',
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input.Password placeholder="Ingrese su nueva contraseña" />
              </Form.Item>
              <Button onClick={() => setCurrentPasswordValid(false)}>Actualizar</Button>
            </>}
        </Form>
      </Drawer>
    </>
  );
}

export default UpdatePassword;