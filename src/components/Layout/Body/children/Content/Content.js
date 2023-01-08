import React from 'react';
import { StyledContent } from './Content.styles';

const Content = (props) => {
  const { children, style } = props;
  return (
    <StyledContent className="layout-content" id="layout-content">
      <div className="context-content" style={style}>
        {children}
      </div>
    </StyledContent>
  );
};

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
