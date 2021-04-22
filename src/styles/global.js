import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  #root {
    margin: 0 auto;
  }
  button {
    cursor: pointer;
  }

  .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    .react-modal-content {
        width: 100%;
        max-width: 450px;
        background: #fff;
        padding: 16px;
        position: relative;
        border-radius: 4px;
    }
    .react-modal-close {
        position: absolute;
        right: 16px;
        top: 16px;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;
