import { Result } from 'antd';
import React from 'react';
import Button from 'ui/Button/Button';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const onClickHandler = () => {
    history.push('/');
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle={t('common.notFoundDetails')}
      style={{ width: '100%' }}
      extra={
        <Button
          $capitalize
          type="primary"
          color="primary"
          onClick={onClickHandler}
        >
          {t('common.notFoundButtonText')}
        </Button>
      }
    />
  );
};
export default NotFound;
