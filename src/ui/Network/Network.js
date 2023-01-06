import React, { useEffect } from 'react';
import { Drawer } from 'antd';
import { useNetwork } from 'hooks/networkHook';
import { ApiOutlined } from '@ant-design/icons';
import { Button as ButtonAntd, notification } from 'antd';
import { useTranslation } from 'react-i18next';
const Network = () => {
  const { isOffline } = useNetwork();
  const { t } = useTranslation();

  function reload() {
    window.location.reload(true);
  }
  const openNotification = (type) => {
    const btn = (
      <ButtonAntd type="primary" size="small" onClick={() => reload()}>
        {t('common.buttonRefresh')}
      </ButtonAntd>
    );
    notification[type]({
      message: t('common.titleRefresh'),
      description: t('common.refreshPageInfo'),
      duration: 0,
      btn,
      key: 7,
      maxCount: 0
    });
  };
  const bodyStyle = {
    backgroundColor: '#ff000d',
    fontSize: '.9rem',
    color: 'white',
    padding: '0 .2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  useEffect(() => {
    if (isOffline) {
      openNotification('info');
    }
  }, [isOffline]);

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
