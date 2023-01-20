/* eslint-disable no-unused-vars */
import React from 'react';
import {StyledBox,StyledBoxCommand} from './Question.styles';
import {Card } from 'antd';
import SectionBody from './Body/Body';
import Header from './Header/Header';
import { useTheme } from 'styled-components';
const Question = (props) => {
  const {
    title,
    titleCenter,
    children,
    infoText,
    tools,
    loading,
    questionTitle,
    initSection,
    questionSelectionOption,
    key,
    command
  } = props;
const theme = useTheme();
  return (
    
      command ? <StyledBoxCommand as={Card}
      size={'small'} initSection={initSection}>
      <Header  title={title} titleCenter={titleCenter} questionTitle={questionTitle} />
        <SectionBody questionSelectionOption={questionSelectionOption} loading={loading}>
    
         {children}
        </SectionBody>
      </StyledBoxCommand> : <StyledBox as={Card}
    size={'small'} initSection={initSection}>
    <Header  title={title} titleCenter={titleCenter} questionTitle={questionTitle} />
      <SectionBody questionSelectionOption={questionSelectionOption} loading={loading}>
  
       {children}
      </SectionBody>
    </StyledBox>
    
    
  );
};


export default Question;
