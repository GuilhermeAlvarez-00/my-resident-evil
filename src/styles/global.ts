import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white-100: #FAF5F5FA;
    --white-300: #FAF5F5B2;

    --red-900: #0D0203;
    --red-500: #B5212B;
  }

  body {
    width: 100%;
    background-color: var(--red-900);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Martel';
    color: var(--white-100);
  }
   
  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
  
  .text {
    font-family: 'Martel';
    color: var(--white-300);
    font-weight: 400;
  }

  .title {
    color: var(--white-100);
    font-size: 1.5625rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 'Teko';
    color: var(--red-500);
    font-size: 1.5625rem;
    font-weight: 400;
  }
`;
