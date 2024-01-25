import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    //! for dev only
    /* outline: 1px dashed crimson; */
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
    background-color: var(--main-color1);
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

  a {
    text-decoration: none;
    color: var(--main-color2);
  }

  button {
    background-color: var(--accent-color1);
    color: var(--main-color2);
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  @keyframes Shake {
    10%, 90% {
      transform: translateX(-3px) rotate(-1deg);
    }
    20%, 80% {
      transform: translateX(3px) rotate(1deg);
    }
    30%, 50%, 70% {
      transform: translateX(-3px) rotate(-1deg);
    }
    40%, 60% {
      transform: translateX(3px) rotate(1deg);
    }
  }
`;
