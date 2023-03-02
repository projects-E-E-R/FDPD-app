import React, { useEffect,useState } from 'react';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { UserOutlined } from '@ant-design/icons';
import useAccountStore from 'store/common/account';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, message, Space } from 'antd';
import useAccountStudentStore from './store';
import { usersStoreConfig } from 'store/common/users';
const UpdatePassword = (props) => {
    const {openDrawer, onCloseDrawer} = props
    const [open, setOpen] = useState(false);
    const [currentPasswordValid, setCurrentPasswordValid] = useState(false);
    const {email} = useAccountStore()
    const [currentPassword, setCurrentPassword] = useState(undefined)
    const [newPassword1, setNewPassword1] = useState(undefined)
    const [newPassword2, setNewPassword2] = useState(undefined)
    const {validatePassword, validated, requestUpdatePassword} = useAccountStudentStore()
    //const [currentPasswordValid, setCurrentPasswordValid] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const validateCurrentPassword = () => {
    validatePassword(email, currentPassword)
  }
 
  const updatePassword = () => {
    if(newPassword1 == newPassword2) {
      requestUpdatePassword(email, newPassword1)
    } else {
      message.error("Las contraseñas no coinciden")
    }
  }

  useEffect(() => {
    setCurrentPasswordValid(validated)
  },[validated])

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
                    <Input.Password placeholder="Ingrese su actual contraseña" onChange={(e) => setCurrentPassword(e.target.value)}/>
                </Form.Item>
                <Button onClick={() => validateCurrentPassword()}>Validar</Button>
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
                <Input.Password placeholder="Ingrese su nueva contraseña" onChange={(e) => setNewPassword1(e.target.value)}/>
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
                <Input.Password placeholder="Ingrese su nueva contraseña" onChange={(e) => setNewPassword2(e.target.value)}/>
              </Form.Item>
              <Button onClick={() => updatePassword()}>Actualizar</Button>
            </>}
        </Form>
      </Drawer>
    </>
  );
}

export default UpdatePassword;