import { darken, lighten } from 'polished';
import styled from 'styled-components';

const ButtonSize = {
  lg: `
    height: 40px;
    font-size: 18px;
  `,
  md: `
    height: 32px;
    font-size: 14px;
`,
  sm: `
    height: 26px;
    font-size: 12px;
`,
  xs: `
    height: 22px;
    font-size: 10px;
`
};

const Button = styled.button`
  ${({ hidden }) => hidden && 'display: none'};
  ${({ $uppercase }) => $uppercase && 'text-transform: uppercase;'}
  ${({ bold }) => bold && 'font-weight: bold;'}
  ${({ $capitalize }) =>
    $capitalize &&
    `& > :first-letter { 
      text-transform: capitalize; 
    }`}
  ${({ size = 'md' }) => ButtonSize[size]}
  ${({ color: _color = 'default', $transparent, theme }) => {
    if ($transparent) {
      return `
        color: ${theme.text.color};
        background-color: #00000000;
        border-color: #00000000;
        &:focus {
          background-color: #00000000;
          border-color: #00000000;
        }
        &:hover {
          background-color: #00000000;
          border-color: ${theme.text.color}33;
        }
        &:active {
          background-color: #00000055;
          border-color: ${theme.text.color}33;
        }
        &:disabled {
          background-color: #00000000;
          border-color: #00000000;
          &:focus, &:hover {
            background-color: #00000000;
            border-color: #00000000;
          }
        }
      `;
    }
    const { color, backgroundColor } = theme.button[_color];
    return `
        color: ${color};
        background-color: ${backgroundColor};
        border-color: ${backgroundColor};
        &:focus {
          color: ${color};
          background-color: ${backgroundColor};
          border-color: ${backgroundColor};
        }
        &:hover {
          color: ${color};
          background-color: ${lighten(0.05, backgroundColor)};
          border-color: ${lighten(0.05, backgroundColor)};
        }
        &:active {
          color: ${color};
          background-color: ${darken(0.1, backgroundColor)};
          border-color: ${darken(0.1, backgroundColor)};
        }
      `;
  }}
`;

export default Button;
