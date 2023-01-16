import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;