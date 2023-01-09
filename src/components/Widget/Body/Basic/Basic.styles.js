import styled from 'styled-components';

export const WidgetColor = {
  regular: 'regular',
  dark: 'dark',
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  light: 'light',
  white: 'white',
  black: 'black',
  blue: 'blue',
  gray: 'gray',
  orange: 'orange'
};

export const StyledWidget = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  border: 1px #0000000a solid;
  box-shadow: 0px 2px 4px 0px #00000040;
  color: ${({ $color, theme }) => theme.colors[$color]};
  background-color: ${({ colorBg, theme }) => {
    switch (colorBg) {
      case WidgetColor.regular:
        return theme.colors.default;
      case WidgetColor.dark:
        return theme.colors.dark;
      case WidgetColor.green:
        return theme.colors.green;
      case WidgetColor.yellow:
        return theme.colors.yellow;
      case WidgetColor.red:
        return theme.colors.red;
      case WidgetColor.light:
        return theme.colors.light;
      case WidgetColor.black:
        return theme.colors.black;
      case WidgetColor.blue:
        return theme.colors.blue;
      case WidgetColor.gray:
        return theme.colors.gray;
      case WidgetColor.orange:
        return theme.colors.orange;
      default:
        break;
    }
  }};
`;

export const StyledValuesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'bottom' ? 'column-reverse' : 'column'};
  & .description {
    font-size: 13px;
    justify-content: center;
  }
  & > div {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  font-family: sans-serif;
  flex-direction: ${({ $direction }) => ($direction ? 'row-reverse' : 'row')};
  & div:first-child {
    ${({ $direction }) => ($direction ? 'margin-left' : 'margin-right')}: 5px;
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.728rem;
  line-height: 0.859rem;
  font-weight: 500;
  text-align: center;
  overflow: hidden;
  white-space: break-spaces;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${(props) => props.uppercase && 'text-transform: uppercase;'}
  ${(props) => props.capitalize && 'text-transform: capitalize;'}
  &:first-letter {
    text-transform: capitalize;
  }
  .subtitle {
    font-size: 80%;
    line-height: 100%;
  }
`;

export const StyledUnit = styled.div`
  transform: translateY(-3px);
  font-size: 11px;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  flex-direction: column;
`;
