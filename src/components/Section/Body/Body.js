import React from 'react';
import PropTypes from 'prop-types';
import SectionBodyStyle from './Body.styles';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const SectionBody = ({ loading, children }) => {
  const { t } = useTranslation();
  return (
    <SectionBodyStyle className="widget-body">
      <Spin
        spinning={loading}
        indicator={<LoadingOutlined style={{ fontSize: 25 }} spin />}
        tip={t('common.charging')}
      >
        <div className="body-content">{children}</div>
      </Spin>
    </SectionBodyStyle>
  );
};

SectionBody.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

SectionBody.defaultProps = {
  loading: false
};

export default SectionBody;
