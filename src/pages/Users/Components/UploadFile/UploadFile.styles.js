import { device } from 'settings/theme';
import styled from 'styled-components';

export const StyledUploadFile = styled.div`
  height: 100%;
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;

  .info {
    font-size: 1.2rem;
    margin: 1rem;
  }

  @media ${device.tablet} {
    justify-content: center;
  }

  .button-container {
    align-items: center;
    justify-content: center;
    width: 100%;
    display: flex;
    
    .button {
      span {
        &:first-letter {
          text-transform: capitalize;
        }
      }
      .button-example {
        margin-right: 0.2rem;
      }
      .button-excel {
        margin-left: 0.2rem;
        width: 250px;
      }
    }
    .ant-form-item  {
      margin-bottom: 0px;
    }
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

    .form-container {
      max-width: 10%;
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
    }
  }
`;