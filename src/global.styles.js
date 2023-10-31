import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 24px;
    font-family: "Titillium Web", sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    //overflow-y: auto;
    //scrollbar-gutter: stable;

    //styled scrollbar
    &::-webkit-scrollbar {
      width: .5em;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      &:hover {
        background-color: hsl(0, 0%, 81.2%);
        border-radius: .25em;
      }
    }
    &:hover::-webkit-scrollbar-thumb {
      background-color: hsl(0, 0%, 81.2%);
      border-radius: 3px;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;
