import React from 'react';
import PropTypes from 'prop-types';
import BodyStyle from './Body.styles';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const WidgetBody = ({ loading, children }) => {
  const { t } = useTranslation();

  return (
    <BodyStyle className="widget-body">
      <Spin
        spinning={loading}
        indicator={<LoadingOutlined style={{ fontSize: 25 }} spin />}
        tip={t('common.pleaseWait')}
      >
        <div className="body-content">{children}</div>
      </Spin>
    </BodyStyle>
  );
};

WidgetBody.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

WidgetBody.defaultProps = {
  loading: false
};

export default WidgetBody;
