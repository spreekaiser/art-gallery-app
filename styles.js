import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    //! for production only
    /* outline: 1px dashed salmon; */
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  .favoriteDiv{
    position: relative;
  width: 360px;
  height: 240px;
  }

  img {
    object-fit: cover;
    /* border: 20px solid brown; */
    border: 20px outset brown;
    border: 20px outset darkgoldenrod;

    border-radius: 5px;

  /* border: 20px solid transparent;  */
  /* border-image: linear-gradient(160deg,  brown, maroon);  */
  /* Verlauf über die gesamte Border-Dicke */
  /* border-image-slice: 1;  */

    box-shadow: 10px 10px 20px #333;
  }

  a {
    text-decoration: none;
    color: unset
  }

  .commentList {
    margin-top: 1em;
    height: 2.5em;
    padding: 0.5em;
    border: 0.5px solid gray;
    border-radius: 50px;
    background-color: lightgray;
    width: max-content;
  }

`;
