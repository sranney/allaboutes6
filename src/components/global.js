import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-weight: normal;
        word-wrap: break-word;
        font-kerning: normal;
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        font-family: georgia, serif;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
    }
    h1 {
        ${tw`text-4xl md:text-5xl`};
    }
    h2 {
        ${tw`text-3xl md:text-4xl`};
    }
    h3 {
        ${tw`text-2xl md:text-3xl`};
    }
    h4 {
        ${tw`text-xl md:text-2xl`};
    }
    h5 {
        ${tw`text-lg md:text-xl`};
    }
    h6 {
        ${tw`text-base md:text-lg`};
    }
    :root {
        --color-scale-0: rgb(242,242,242);
        --color-scale-0-alpha-1: rgba(242,242,242,0.3);
        --color-scale-0-alpha-2: rgba(242,242,242,0.5);
        --color-scale-0-alpha-3: rgba(242,242,242,0.8);        
        --color-scale-1: rgb(173,222,222);
        --color-scale-1-alpha-1: rgba(173,222,222,0.3);
        --color-scale-1-alpha-2: rgba(173,222,222,0.5);
        --color-scale-1-alpha-3: rgba(173,222,222,0.8);
        --color-scale-2: rgb(149,191,191);
        --color-scale-2-alpha-1: rgba(149,191,191,0.3);
        --color-scale-2-alpha-2: rgba(149,191,191,0.5);
        --color-scale-2-alpha-3: rgba(149,191,191,0.8);
        --color-scale-3: rgb(103,162,168);
        --color-scale-3-alpha-1: rgba(103,162,168,0.3);
        --color-scale-3-alpha-2: rgba(103,162,168,0.5);
        --color-scale-3-alpha-3: rgba(103,162,168,0.8);
        --color-scale-4: rgb(81,140,153);
        --color-scale-4-alpha-1: rgba(81,140,153,0.3);
        --color-scale-4-alpha-2: rgba(81,140,153,0.5);
        --color-scale-4-alpha-3: rgba(81,140,153,0.8);        
        --color-scale-5: rgb(86,135,140);
        --color-scale-5-alpha-1: rgba(86,135,140,0.3);
        --color-scale-5-alpha-2: rgba(86,135,140,0.5);
        --color-scale-5-alpha-3: rgba(86,135,140,0.8);
        --color-scale-6: rgb(61,105,115);
        --color-scale-6-alpha-1: rgba(61,105,115,0.3);
        --color-scale-6-alpha-2: rgba(61,105,115,0.5);
        --color-scale-6-alpha-3: rgba(61,105,115,0.8);
        --color-scale-7: rgb(33,62,74);
        --color-scale-7-alpha-1: rgba(33,62,74,0.3);
        --color-scale-7-alpha-2: rgba(33,62,74,0.5);
        --color-scale-7-alpha-3: rgba(33,62,74,0.8);
        --color-scale-8: rgb(34,61,64);
        --color-scale-8-alpha-1: rgba(34,61,64,0.3);
        --color-scale-8-alpha-2: rgba(34,61,64,0.5);
        --color-scale-8-alpha-3: rgba(34,61,64,0.8);
    }
    ::selection {
        background-color: var(--color-scale-8-alpha-1);
    }
`;

export default GlobalStyle;
