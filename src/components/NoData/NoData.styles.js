import styled from 'styled-components';

export const StyledEmpty = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  img {
    opacity: 0.6;
  }
  .ant-empty-image {
    height: 100px;
  }
  .ant-empty-description {
    /* font-size: 1rem; */
  }
`;
