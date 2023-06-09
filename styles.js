import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    //! for production only
    ${"" /* outline: 1px dashed salmon; */}
  }

  body {
    margin: 0;
    /* padding: 10%; */
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
    // outline-image: linear-gradient(brown, white);
    // outline-width: 20px;
    // outline-style: solid;
    border: 20px solid brown;
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
