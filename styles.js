import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    //! for build only
    /* outline: 1px dashed salmon; */
  }

  :root {
    --main-color1: darkcyan;
    --main-color2: white;
    --accent-color1: mediumvioletred;
    --accent-color2: yellow;
  }

  body {
    margin: 0;
    font-family: system-ui;
    /* height: 100vh; */
    min-height: 100vh;

    background-color: burlywood;
    background-color: darkslategray;
    background-color: lightcoral;
    background-color: lightblue;
    background-color: lightseagreen;
    background-color: lightslategray;
    background-color: maroon;
    background-color: mediumvioletred;
    background-color: purple;
    background-color: rebeccapurple;
    background-color: steelblue;
    background-color: teal;
    background-color: var(--main-color1);
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

  .favoriteDiv:hover {
    animation: MoveUpDown 2s linear infinite;
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

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.25rem);
    }
  }
`;
