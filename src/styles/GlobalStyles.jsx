import { Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={`
    @font-face {
        font-display: swap; 
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/montserrat-v25-latin-regular.woff2') format('woff2'); 
      }
      /* montserrat-500 - latin */
      @font-face {
        font-display: swap; 
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        src: url('../fonts/montserrat-v25-latin-500.woff2') format('woff2'); 
      }
      /* montserrat-600 - latin */
      @font-face {
        font-display: swap; 
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        src: url('../fonts/montserrat-v25-latin-600.woff2') format('woff2'); 
      }

      :root {
        --primary-color: #373737;
        --following-btn-color-active: #5cd3a8;
        --following-btn-color-inactive: #ebd8ff;
      }
      
      * {
        box-sizing: border-box;
      }
      
      body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.22;
        margin-top: 84px;
      
      @media (min-width: 960px) {
          margin-top: 108px;
        }
      }
      
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
      
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
        padding: 0;
      }
    `}
    />
  );
};

export default GlobalStyles;
