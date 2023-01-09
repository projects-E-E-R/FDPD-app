import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { StyledContainer } from './GridBasic.styles';
import NoData from 'components/NoData/NoData';

const WidgetGridBasicContainer = ({ data = [] }) => {
  return (
    <NoData noData={!data || !data.length}>
      <StyledContainer gutter={[10, 10]} as={Row}>
        {(data || []).map((item, index) => (
          <Col key={index}>{item}</Col>
        ))}
      </StyledContainer>
    </NoData>
  );
};

WidgetGridBasicContainer.propTypes = {
  data: PropTypes.array
};

WidgetGridBasicContainer.defaultProps = {
  data: []
};

export default React.memo(WidgetGridBasicContainer);
