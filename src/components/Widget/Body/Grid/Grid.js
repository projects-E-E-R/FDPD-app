import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { StyledContainer } from './Grid.styles';
import NoData from 'components/NoData/NoData';

const WidgetGridContainer = ({ data = [] }) => {
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

WidgetGridContainer.propTypes = {
  data: PropTypes.array
};

WidgetGridContainer.defaultProps = {
  data: []
};

export default React.memo(WidgetGridContainer);
