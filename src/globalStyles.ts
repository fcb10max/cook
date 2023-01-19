import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
    position: relative;
  }

  * {
    box-sizing: border-box;
  }

  .root {
    position: relative;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;