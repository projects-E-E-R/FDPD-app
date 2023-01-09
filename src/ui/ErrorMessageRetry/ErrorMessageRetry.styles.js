import Styled from 'styled-components';

export const StyledContainer = Styled.div`
  display: ${({ iserror }) => (iserror ? 'block' : 'none')} !important;
  border: 1px solid ${({ theme }) => theme.colors.lightRed};
  border-radius: 3px;
  padding: ${({ theme }) => theme.padding};
  color: ${({ theme }) => theme.colors.red} !important;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.softRed};
  & > button {
    margin-top: 5px;
  }
`;

export const StyledTitle = Styled.div`
  /* font-size: 12px; */
  font-weight: 600;
`;

export const StyledContent = Styled.div`
  /* font-size: 12px; */
`;

export const StyledCollapse = Styled.div`
  background-color: transparent;
  font-size: 0.8rem;
  font-weight: 500;
  & .ant-collapse-item {
    border-bottom: unset;
    & .ant-collapse-header {
      padding: 4px 20px !important;
      color: ${(theme) => theme.lightRed};
      & span {
        left: 0 !important;
        padding: 2px 5px !important;
      }
    }
  }
`;
