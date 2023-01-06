import React from 'react';
import PropTypes from 'prop-types';
import { Empty as SEmpty } from 'antd';
import Empty from 'ui/Empty/Empty';
import { StyledEmpty } from './NoData.styles';
import { IMAGES_SRC_URL } from 'settings/constants';

const NoData = (props) => {
  const { noData, description, children, useLogo } = props;
  return (
    <>
      {noData ? (
        <StyledEmpty
          description={description}
          image={
            useLogo
              ? `${IMAGES_SRC_URL}Isotipo%20-%20Fondo%20Claro.png`
              : SEmpty.PRESENTED_IMAGE_SIMPLE
          }
          as={Empty}
        />
      ) : (
        children
      )}
    </>
  );
};

NoData.propTypes = {
  noData: PropTypes.bool,
  description: PropTypes.string
};

NoData.defaultProps = {
  noData: true
};

export default NoData;
