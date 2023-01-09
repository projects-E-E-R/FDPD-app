import React from 'react';
import PropTypes from 'prop-types';
import { Empty as SEmpty } from 'antd';
import Empty from 'ui/Empty/Empty';
import { StyledEmpty } from './NoData.styles';


const NoData = (props) => {
  const { noData, description, children, useLogo } = props;
  return (
    <>
      {noData ? (
        <StyledEmpty
          description={description}
          image={
            useLogo
              ? `https://www.ucn.cl/wp-content/themes/ucn-central/img/logo.png`
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
