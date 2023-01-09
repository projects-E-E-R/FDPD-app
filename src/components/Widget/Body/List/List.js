/* eslint-disable no-unused-vars */
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
} from './List.styles';

const WidgetList = (props) => {
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
      <table>
        <tr>
          <StyledTitle
            uppercase={uppercase}
            capitalize={capitalize}
            title={title}
          >
            {title}
            {subtitle ? <div className="subtitle">{subtitle}</div> : null}
          </StyledTitle>
          <td>
            <div className="ellipsis">{value}</div>
          </td>
        </tr>
      </table>
    </StyledWidget>
  );
};

WidgetList.propTypes = {
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

WidgetList.defaultProps = {
  value: 0,
  $color: WidgetColor.regular,
  uppercase: true,
  options: [],
  isUnitPrefix: false,
  direction: 'top'
};

export default React.memo(WidgetList);
