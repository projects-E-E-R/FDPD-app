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
