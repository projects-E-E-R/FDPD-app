import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessageRetry from 'ui/ErrorMessageRetry/ErrorMessageRetry';

const ErrorRetry = (props) => {
  const { error, retryHandler, children } = props;

  return error ? (
    <ErrorMessageRetry error={error} callback={retryHandler} />
  ) : (
    children
  );
};

ErrorRetry.propTypes = {
  error: PropTypes.any,
  retryHandler: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
};

export default React.memo(ErrorRetry);
