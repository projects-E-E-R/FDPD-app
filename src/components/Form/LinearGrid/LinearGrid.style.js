import styled from "styled-components";
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
  margin-bottom:50px;
  & * {
    margin: 0 0px;
  }
  & td {
    min-width:10px;
    max-width:10px;
    text-align: center;
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