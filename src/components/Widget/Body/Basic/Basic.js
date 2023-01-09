import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WidgetButtonToggle from './childrens/WidgetButtonToggle/WidgetButtonToggle';
import {
  StyledTitle,
  StyledValue,
  StyledValuesContainer,
  StyledWidget,
  WidgetColor,
  StyledUnit
} from './Basic.styles';

const WidgetBasic = (props) => {
  const {
    title,
    data,
    description: propDescription,
    subtitle,
    uppercase,
    capitalize,
    direction,
    ...rest
  } = props;
  const [index, setIndex] = useState();
  const [value, setValue] = useState();
  const [unit, setUnit] = useState();
  const [isPrefix, setIsPrefix] = useState();
  const [description, setDescription] = useState();

  const onSelectionChange = (value) => setIndex(value);

  useEffect(() => {
    if (data?.length) {
      const {
        unit,
        value,
        description: optionDescription,
        isUnitPrefix
      } = data[index || 0];
      setUnit(unit);
      setIsPrefix(isUnitPrefix);
      setValue(value || 0);
      setDescription(optionDescription || propDescription);
    }
  }, [data, index, propDescription]);

  return (
    <StyledWidget {...rest}>
      <StyledValuesContainer className="ellipsis" direction={direction}>
        <StyledTitle
          uppercase={uppercase}
          capitalize={capitalize}
          title={title}
        >
          {title}
          {subtitle ? <div className="subtitle">{subtitle}</div> : null}
        </StyledTitle>
        <StyledValue title={value} $direction={isPrefix}>
          <div className="ellipsis">{value}</div>
          {unit ? <StyledUnit>{unit}</StyledUnit> : null}
        </StyledValue>
        {description ? <div className="description">{description}</div> : null}
      </StyledValuesContainer>
      {data?.length > 1 ? (
        <WidgetButtonToggle data={data} onChange={onSelectionChange} />
      ) : null}
    </StyledWidget>
  );
};

WidgetBasic.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string,
  description: PropTypes.any,
  detail: PropTypes.any,
  $color: PropTypes.oneOf(Object.values(WidgetColor)),
  uppercase: PropTypes.bool,
  options: PropTypes.array.isRequired,
  isUnitPrefix: PropTypes.bool,
  direction: PropTypes.oneOf(['top', 'bottom'])
};

WidgetBasic.defaultProps = {
  value: 0,
  $color: WidgetColor.regular,
  uppercase: true,
  options: [],
  isUnitPrefix: false,
  direction: 'top'
};

export default React.memo(WidgetBasic);
