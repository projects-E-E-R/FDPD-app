import React from 'react';
import PropTypes from 'prop-types';
import WidgetStyle from './Widget.styles';
import Header from './Header/Header';
import Body from './Body/Body';
import ErrorRetry from './Body/ErrorRetry/ErrorRetry';
import WidgetBasic from './Body/Basic/Basic';
import WidgetList from './Body/List/List';
import WidgetGridContainer from './Body/Grid/Grid';
import WidgetGridBasicContainer from './Body/GridBasic/GridBasic';
import NoData from 'components/NoData/NoData';

const Widget = (props) => {
  const {
    title,
    children,
    icon,
    infoText,
    tools,
    error,
    loading,
    retryHandler,
    shadow
  } = props;

  return (
    <WidgetStyle shadow={shadow}>
      <Header icon={icon} title={title} infoText={infoText} tools={tools} />
      <Body loading={loading}>
        <ErrorRetry error={error} retryHandler={retryHandler}>
          {children ?? <NoData noData />}
        </ErrorRetry>
      </Body>
    </WidgetStyle>
  );
};

Widget.Basic = WidgetBasic;
Widget.List = WidgetList;
Widget.GridContainer = WidgetGridContainer;
Widget.GridBasicContainer = WidgetGridBasicContainer;

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  error: PropTypes.any,
  loading: PropTypes.bool,
  icon: PropTypes.object,
  infoText: PropTypes.string,
  tools: PropTypes.object,
  retryHandler: PropTypes.func,
  shadow: PropTypes.bool
};

Widget.defaultProps = {
  title: 'no title',
  error: null,
  loading: false,
  shadow: true
};

export default Widget;
