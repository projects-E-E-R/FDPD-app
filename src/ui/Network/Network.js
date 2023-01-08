import React from 'react';
import { Drawer } from 'antd';
import { useNetwork } from 'hooks/networkHook';
import { ApiOutlined } from '@ant-design/icons';
const Network = () => {
  const { isOffline } = useNetwork();
  const bodyStyle = {
    backgroundColor: '#ff000d',
    fontSize: '.9rem',
    color: 'white',
    padding: '0 .2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <Drawer
      title="Basic Drawer"
      placement="top"
      closable={false}
      visible={isOffline}
      height={25}
      key="top"
      mask={false}
      footer={null}
      headerStyle={{ display: 'none' }}
      bodyStyle={bodyStyle}
    >
      <ApiOutlined />
      &nbsp;&nbsp; No hay conexión a internet
    </Drawer>
  );
};

export default Network;
