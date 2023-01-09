/* eslint-disable no-unused-vars */
import React from 'react';
import SectionStyle from './Section.styles';
import SectionBody from './Body/Body';
import Header from './Header/Header';

const Section = (props) => {
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
    <SectionStyle shadow={shadow}>
    <Header icon={icon} title={title} infoText={infoText} tools={tools} />
      <SectionBody loading={loading}>
       {children}
      </SectionBody>
    </SectionStyle>
  );
};


export default Section;
