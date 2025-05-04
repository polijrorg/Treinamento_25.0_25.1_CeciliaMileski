// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Importa a fonte Nunito do Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap');

  /* Reset de estilos básicos */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos do body */
  body {
    font-family: 'Nunito', sans-serif;
    background-color: #121212;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  /* Ajusta textos e botões como padrão */
  button, input, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
  }
`;
