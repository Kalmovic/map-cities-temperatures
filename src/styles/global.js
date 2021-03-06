import { createGlobalStyle } from "styled-components";
import { rem } from "../utils/tools";

export default createGlobalStyle`
  :root {
        --background: #FFFFFF;
        --blue: #2f80ed;
        --blue-light: #56ccf2;
        --text-color: #363f5f;
        --black: #000000;
    }
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
    font: ${rem(14)} Roboto, sans-serif;
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
        max-width: ${rem(450)};
        background: var(--background);
        padding: ${rem(20)};
        position: relative;
        border-radius: ${rem(4)};
    }
    .react-modal-close {
        position: absolute;
        right: ${rem(8)};
        top: ${rem(8)};
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;
