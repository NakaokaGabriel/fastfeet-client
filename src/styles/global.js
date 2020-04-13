import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'Roboto', arial, sans-serif, helvetica;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }
`;
