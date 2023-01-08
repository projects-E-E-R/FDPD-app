import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex-wrap: nowrap;
  width: inherit;
  max-width: inherit;
  cursor: default;
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
  ${({ bold }) => bold && 'font-weight: bold;'}
  ${({ theme, kind }) => {
    switch (kind) {
      case 'primary':
        return `
          font-size: 1.3rem;
          color: ${theme.title.color};
        `;
      case 'secondary':
        return `
          font-size: 1rem;
          color: ${theme.subtitle.color};
        `;
      case 'small':
        return `
          font-size: 0.5rem;
          color: ${theme.subtitle.color};
        `;
      case 'medium':
        return `
          font-size: 0.8rem;
          color: ${theme.subtitle.color};
        `;
      case 'widget':
        return `
          font-weight: 600;
          font-size: 1rem;
          color: ${theme.title.color};
        `;
      default:
        return `
          font-size: 1.3rem;
        `;
    }
  }}
  ${({ $capitalize }) => {
    return (
      $capitalize &&
      `& .title {
        display: block;
        &:first-letter { 
          text-transform: capitalize; 
        }
      }
      `
    );
  }}
  .left-extra svg {
    font-size: 18px;
  }
  .left-extra {
    padding-right: 5px;
    svg {
      font-size: 18px;
    }
  }
  .right-extra {
    padding-left: 10px;
  }
  .anticon {
    font-size: 13px;
  }
  .title-container {
    flex-grow: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */
    transform: translateY(1px);
  }
  @keyframes move {
    0%,
    25% {
      transform: translateX(0%);
      left: 0%;
    }
    75%,
    100% {
      transform: translateX(-100%);
      left: 100%;
    }
  }
  ${({ animate }) =>
    animate &&
    `
    & .title-container {
      width: 195px;
    }
    & .title {
        display: inline-block;
        position: relative;
        animation: 5s linear 0s infinite alternate move;
      }
    `}
`;

export default Styled;
