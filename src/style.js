import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  .ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .logo {
    &.fdpd {
      background: url('https://www.ucn.cl/wp-content/themes/ucn-central/img/logo.png') no-repeat center;
        background-size: 100% 100%;
      &.header {
        background: url('https://www.ucn.cl/wp-content/themes/ucn-central/img/logo.png') no-repeat center;
        background-size: 106% 150%;
        background-position:100%;
        height: 100%;
        width:350;
      }
      &.white {
        background: url('https://www.ucn.cl/wp-content/themes/ucn-central/img/logo.png') no-repeat center;
        background-size: 100% 90%;
        background-position:100%;
      }
      &.isotipo {
        background: url('https://www.ucn.cl/wp-content/themes/ucn-central/img/logo.png') no-repeat center;
        background-size: 90% 90%;
        background-position:100%;
        height: 100%;
        width:100;
      }
    }
  }
  .ant-dropdown-menu-item-only-child div {
    display: block;
    &::first-letter {
      text-transform: uppercase !important;
    }
  }

  .ant-spin {
    backdrop-filter: blur(3px);
  }

  .ant-modal-body {
    max-height: calc(100vh - 230px);
    overflow: auto;
  }

  .ant-form-item-label {
    padding: unset !important;
  }

  .ant-table-pagination.ant-pagination {
    margin: 10px 0 10px 0;
  
  @keyframes fadeFromTop {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes fadeFromBottom {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes fadeFromLeft {
    0% {
      transform: translateX(-35px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes fadeFromRight {
    0% {
      transform: translateX(10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes scaleFadeIn {
    0% {
      transform: scale(0.98);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
}
`;

export default GlobalStyle;
