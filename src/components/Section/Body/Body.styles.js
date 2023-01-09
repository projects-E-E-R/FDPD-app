import styled from 'styled-components';

export const SectionBodyStyle = styled.div`
  .body-content {
    padding: 0.6rem;
  }
  .ant-spin {
    background-color: ${({ theme }) => theme.loading.backgroundColor};
    max-height: unset !important;
    svg {
      fill: ${({ theme }) => theme.text.color};
    }
    .ant-spin-text {
      color: ${({ theme }) => theme.text.color};
    }
  }
`;

export default SectionBodyStyle;
