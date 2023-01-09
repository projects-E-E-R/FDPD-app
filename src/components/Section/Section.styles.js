import { lighten } from 'polished';
import styled from 'styled-components';

export const SectionStyle = styled.div`
  height: 100%;
  border: 2px solid #0000001a;
  margin-top:25px;
  border-radius: 3px;
  animation: 0.3s ease-out scaleFadeIn;
  background-color: ${({ theme }) =>
    lighten(0.05, theme.content.backgroundColor)};
  ${({ shadow }) => {
    return shadow ? 'box-shadow: 0px 2px 5px 0px #00000026;' : '';
  }}
  .header-dashboard-component {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    & .ant-space svg {
      fill: ${({ theme }) => theme.text.color};
    }
  }
`;

export default SectionStyle;
