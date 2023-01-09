import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'ui/Button/Button';
import { StyledContainer } from './WidgetButtonToggle.styles';

const WidgetButtonToggle = (params) => {
  const { data, onChange } = params;
  const [active, setActive] = useState(null);
  const [collection, setCollection] = useState([]);

  const buttonProps = (name) => ({
    color: name === active ? 'primary' : 'default'
  });

  const onClickHandler = (value, index) => {
    setActive(value);
    onChange(index);
  };

  useEffect(() => {
    setCollection(data.map((x) => x.unit));
  }, [data, setCollection]);

  useEffect(() => {
    if ((!active && collection.length) || !collection.includes(active)) {
      setActive(collection[0]);
    }
  }, [collection, active, setActive]);

  return (
    <StyledContainer>
      {collection.map((item, index) => (
        <Button
          key={index}
          size="xs"
          onClick={() => onClickHandler(item, index)}
          {...buttonProps(item)}
        >
          {item}
        </Button>
      ))}
    </StyledContainer>
  );
};

WidgetButtonToggle.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

Button.defaultProps = {
  data: []
};

export default React.memo(WidgetButtonToggle);
