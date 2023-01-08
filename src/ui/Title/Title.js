import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './Title.styles';
import { Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const TitleVariant = {
  primary: 'primary',
  secondary: 'secondary',
  small: 'small',
  medium: 'medium',
  widget: 'widget'
};

const Title = ({ children, className, icon, infoText, ...rest }) => {
  return (
    <StyledTitle className={className} {...rest}>
      {icon ? <div className="left-extra">{icon}</div> : null}
      <div className="title-container">
        <div className="title">{children}</div>
      </div>
      {infoText ? (
        <div className="right-extra">
          <Popover placement="right" content={infoText} trigger="hover">
            <InfoCircleOutlined />
          </Popover>
        </div>
      ) : null}
    </StyledTitle>
  );
};

Title.propTypes = {
  kind: PropTypes.oneOf(Object.values(TitleVariant)),
  uppercase: PropTypes.bool,
  $capitalize: PropTypes.bool,
  bold: PropTypes.bool,
  icon: PropTypes.any,
  infoText: PropTypes.string
};

Title.defaultProps = {
  className: '',
  kind: TitleVariant.primary
};

export default React.memo(Title);
