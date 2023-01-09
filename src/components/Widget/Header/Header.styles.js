import styled from 'styled-components';

export const HeaderStyle = styled.div`
  padding: 0.2rem 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
  & .ant-space svg {
    fill: ${({ theme }) => theme.text.color};
  }
  .ant-space {
    .ant-btn-icon-only {
      padding-top: 3px !important;
      width: 25px;
      height: 25px;
    }
    .ant-btn-circle {
      min-width: 25px;
    }
  }
`;

export default HeaderStyle;
