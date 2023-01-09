import Styled from 'styled-components';

export const StyledContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  & > button {
    margin-bottom: .4rem;
  }
`;
