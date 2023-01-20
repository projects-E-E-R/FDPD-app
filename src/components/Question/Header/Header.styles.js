import styled from 'styled-components';
import { darken } from 'polished';
export const HeaderStyle = styled.div`
  padding: 0.2rem 0.6rem;
  display:flex;
  color: ##ffff;
  flex-direction:${({ titleCenter }) =>  titleCenter ? `column` : `row`};
  align-items: ${({ titleCenter }) =>  titleCenter ? `center` : `baseline`};
  justify-content: ${({ titleCenter }) => titleCenter ? `none` : `space-between`};
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