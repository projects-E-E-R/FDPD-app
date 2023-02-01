import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import Button from 'ui/Button/Button';

const MoreOptionsButton = ({ menu, disabled }) => {
  return disabled ? (
    <Button
      $transparent
      shape="circle"
      icon={<MoreOutlined />}
      disabled
      style={{ paddingTop: '6px' }}
    />
  ) : (
    <Dropdown
      getPopupContainer={(trigger) => trigger.parentNode}
      overlay={menu}
      trigger={['click']}
      placement="bottomRight"
      arrow
    >
      <Button
        $transparent
        shape="circle"
        icon={<MoreOutlined />}
        style={{ paddingTop: '6px' }}
      />
    </Dropdown>
  );
};

export default React.memo(MoreOptionsButton);
