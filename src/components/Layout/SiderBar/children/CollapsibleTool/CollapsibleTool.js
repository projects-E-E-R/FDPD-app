import React from 'react';
import PropTypes from 'prop-types';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import StyledCollapsibleTool, { StyledTool } from './CollapsibleTool.styles';

const CollapsibleTool = (props) => {
  const { toggleStatus, isCollapsed, children, ...rest } = props;
  return (
    <StyledCollapsibleTool className="collapsible-tool" {...rest}>
      {children}
      <StyledTool className="tool" onClick={toggleStatus}>
        {isCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
      </StyledTool>
    </StyledCollapsibleTool>
  );
};

CollapsibleTool.propTypes = {
  toggleStatus: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool.isRequired
};

CollapsibleTool.defaultProps = {
  isCollapsed: false
};

export default CollapsibleTool;
