import { device } from 'settings/theme';
import styled from 'styled-components';

export const StyledLogin= styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    justify-content: center;
  }
  .login-container {
    &:hover {
      backdrop-filter: blur(8px);
      transition-property: backdrop-filter;
      transition-duration: 0.2s;
      transition-timing-function: ease-in;
    }
    height: inherit;
    background-color: #00000090;
    height: 70%;
    width: 33rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 3rem;
    .logo-container {
      height: 16rem;
      padding: 5rem 0rem;
      display: flex;
      margin-top: 0rem;
      margin-bottom: 0rem;
      .logo {
        width: 100%;
      }
    }
    .banner-container {
      margin-bottom: 1.5rem;
    }
    .form-container {
      .ant-form-item-control {
        max-width: 100%;
        .ant-form-item-explain-error {
          &:first-letter {
            text-transform: capitalize;
          }
        }
      }
      .ant-checkbox-wrapper span {
        display: block;
        color: white;
        &:first-letter {
          text-transform: capitalize;
        }
      }
      button {
        width: 100%;
        span {
          &:first-letter {
            text-transform: capitalize;
          }
        }
      }
    }
    .footer-container {
      color: white;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.6rem;
    }
    .footer-container-pass {
      color: white;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }
  }
`;