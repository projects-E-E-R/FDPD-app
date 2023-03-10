import styled from "styled-components";
import { device } from 'settings/theme';
export const Container = styled.div`
  display: flex;
  align-items: center;

  & * {
    margin: 0 40px;
  }
  margin-bottom:10px;
`;

export const ErrorLabel = styled.span` 
  color: red;
`;

export const Layout = styled.div`
  display:flex;
  flex-direaction:column;
  align-items:center;
  margin-bottom:10px;
  font-size:15px;
  overflow: visible hidden;
  text-overflow: ellipsis;
  
  & input {
    margin: 0 0px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & td {
    text-align: center;
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media ${device.desktopL}{
      & td {
        text-align: center;
        max-width: 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
  }
  @media ${device.desktopL} {
      & .column {
      text-overflow: ellipsis;
    }
  }
/* Create two equal columns that floats next to each other */
  & .column {
    width: 30%;
  }
  @media ${device.desktopL}{
      & .column {
      float: left;
      width: 30%;
      padding: 10px;
      height: 50px; /* Should be removed. Only for demonstration */
    }
  }
  .column2 {
    margin-top:10px;
    float: right;
    width: 70%;
    padding: 10px;
    height: 50px; /* Should be removed. Only for demonstration */
  }
`;
export const FirstRow = styled.div`
  display:flex;
  flex-direaction:column;
  align-items:center;
  & * {
    margin: 0 0px;
  }
  & input {
    margin: 0 30px;
  }
/* Create two equal columns that floats next to each other */
  .column {
    float: left;
    width: 30%;
    padding: 10px;
    height: 50px; /* Should be removed. Only for demonstration */
  }
  .column2 {
    margin-top:10px;
    float: right;
    width: 70%;
    padding: 10px;
    height: 50px; /* Should be removed. Only for demonstration */
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;

  & label {
    font-size:15px;
    margin: 0 10px;
  }
`;

export const QuestionContainer = styled.div`
  margin-bottom: 10px;
  display:flex;
  flex-direction:column;
  align-items:left;
`;
export const StyleImageContent = styled.div`
 max-width:50%;
 min-width:50%;
 max-height:50%;
 min-height:50%;
`;
export const StyleImageContentTwo = styled.div`
 max-width:100%;
 min-width:100%;
 max-height:100%;
 min-height:100%;
`;
export const QuestionContainerLinear = styled.div`
    display: flex;
    align-items: left;
    margin-bottom: 10px;
    .& p {
      margin-left: 10px;
      margin-top:10px;
    }
`;