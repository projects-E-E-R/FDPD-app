import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxContainer = styled.div`
  display: flex;

  & label {
    font-size:15px;
    margin: 0 10px;
  }
`;

export const ErrorLabel = styled.span`
  color: red;
  padding: 10px 0;
`;
export const QuestionContainer = styled.div`
  margin-bottom: 10px;
  display:flex;
  flex-direction:column;
  align-items:left;
`;
export const StyleImageContent = styled.div`
 max-width:100%;
 min-width:100%;
`;
