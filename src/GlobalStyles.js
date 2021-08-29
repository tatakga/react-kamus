import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        /* colors */
        --primary-color: #1518a5;
        --black-color: #1a2538;
        --white-color: #f0f1f7;

        /* fonts */
        --font-nunito: 'Nunito Sans', sans-serif;
        --font-bold: 600;
        --font-medium: 300;
        --font-light: 100;

        /* utils */

        --container-width: 500px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: var(--font-nunito);
        background-color: var(--white-color);
    }
`;

export default GlobalStyles;
