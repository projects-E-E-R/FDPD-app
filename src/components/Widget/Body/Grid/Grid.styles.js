import styled from 'styled-components';

export const StyledContainer = styled.div`
  & > div {
    flex: 1 1 auto;
    width: 0;
    min-height: 80px;
  }
  div:first-child:nth-last-child(4),
  div:first-child:nth-last-child(4) ~ div {
    flex: 1 1 150px;
  }
  div:first-child:nth-last-child(5),
  div:first-child:nth-last-child(5) ~ div {
    flex: 1 1 200px;
  }
  div:first-child:nth-last-child(6),
  div:first-child:nth-last-child(6) ~ div {
    flex: 1 1 130px;
  }
  div:first-child:nth-last-child(7),
  div:first-child:nth-last-child(7) ~ div {
    flex: 1 1 140px;
  }
  div:first-child:nth-last-child(8),
  div:first-child:nth-last-child(8) ~ div {
    flex: 1 1 120px;
  }
`;
