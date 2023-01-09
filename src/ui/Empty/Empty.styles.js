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

export default StyledEmpty;
