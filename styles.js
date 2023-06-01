import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    //! for production only
    outline: 1px dashed salmon;
  }

  body {
    margin: 0;
    padding: 10%;
    font-family: system-ui;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  img {
    object-fit: cover;
  }
`;
