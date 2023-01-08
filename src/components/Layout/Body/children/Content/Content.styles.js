import styled from 'styled-components';

export const StyledContent = styled.div`
  width: 100%;
  height: inherit;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .context-content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    & > div {
      width: 100%;
      padding: 1rem;
    }
  }
`;
