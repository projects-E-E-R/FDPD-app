import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
  padding: ${({ theme }) => theme.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
`;
export default StyledButtonContainer;
