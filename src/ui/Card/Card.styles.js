import styled from 'styled-components';

export const StyledEmpty = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .ant-empty-img-simple {
    opacity: 0.8;
  }

  & .ant-empty-description:first-letter {
    text-transform: capitalize;
  }
  & > .ant-empty-description {
    color: ${({ theme }) => theme.text.color} !important;
  }

  & .ant-empty-img-simple-path {
    fill: ${({ theme }) => theme.app[3]} !important;
  }
  & .ant-empty-img-simple-ellipse {
    fill: ${({ theme }) => theme.app[5]} !important;
  }
  & .ant-empty-img-simple-g {
    stroke: ${({ theme }) => theme.app[5]} !important;
  }

  & .ant-empty-img-default-ellipse {
    fill: ${({ theme }) => theme.app[0]} !important;
  }
  & .ant-empty-img-default-path-1 {
    fill: ${({ theme }) => theme.app[6]} !important;
  }
  & .ant-empty-img-default-path-2 {
    fill: ${({ theme }) => theme.app[4]} !important;
  }
  & .ant-empty-img-default-path-3 {
    fill: ${({ theme }) => theme.app[2]} !important;
  }
  & .ant-empty-img-default-path-4 {
    fill: ${({ theme }) => theme.app[4]} !important;
  }
  & .ant-empty-img-default-path-5 {
    fill: ${({ theme }) => theme.app[4]} !important;
  }
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.home.content.backgroundColor};
  color: ${({ theme }) => theme.text.color} !important;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 1px 0 ${({ theme }) => theme.home.insetShadowColor},
    0 1px ${({ theme }) => theme.home.insetShadowColor},
    1px 1px ${({ theme }) => theme.home.insetShadowColor},
    1px 0 ${({ theme }) => theme.home.insetShadowColor} inset,
    0 1px ${({ theme }) => theme.home.insetShadowColor} inset;
  &:hover {
    box-shadow: 0 1px 2px -2px ${({ theme }) => theme.home.outsetShadowColor}29,
      0 3px 6px ${({ theme }) => theme.home.outsetShadowColor}1f,
      0 5px 12px 4px ${({ theme }) => theme.home.outsetShadowColor}17;
    transition: all 0.3s;
  }
  border: 1px solid ${({ theme }) => theme.home.borderColor};
  .container {
    display: flex;
    flex-direction: column;
    .top {
      display: flex;
      align-items: center;
      .icon {
        .ant-avatar {
          border-radius: 0;
        }
      }
    }
    .bottom {
      display: flex;
      .name {
        padding-top: 10px;
        font-size: 22px;
        line-height: 20px;
        font-weight: 500;
        display: -webkit-box;
        overflow: hidden;
      }
    }
  }
`;

