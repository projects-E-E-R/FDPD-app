import { lighten } from 'polished';
import styled from 'styled-components';

export const QuestionStyle = styled.div`
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


export const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.home.content.backgroundColor};
  color: ${({ theme }) => theme.text.color} !important;
  border-radius: 15px;
  box-shadow: 1px 0 ${({ theme }) => theme.home.insetShadowColor},
    0 1px ${({ theme }) => theme.home.insetShadowColor},
    1px 0px ${({ theme }) => theme.home.insetShadowColor},
    1px 0 ${({ theme }) => theme.home.insetShadowColor} inset,
    ${({initSection })=> initSection ? `0px 10px` : `0px 1px`} ${({ theme,initSection }) => initSection ? theme.question.header.backgroundColor : theme.home.insetShadowColor} inset;
  border: 0px solid ${({ theme }) => theme.home.borderColor};
  margin-top:15px;
`;
export const StyledBoxCommand = styled.div`
  background-color: ${({ theme }) => theme.home.content.backgroundColor};
  color: ${({ theme }) => theme.text.color} !important;
  border-radius: 15px;
  box-shadow: 0px;
  border: 0px solid ${({ theme }) => theme.home.borderColor};
  margin-top:15px;
`;



