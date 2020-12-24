import { createGlobalStyle } from 'styled-components';

import OpenSans800Woff from '@assets/fonts/open-sans-v18-latin-800.woff';
import OpenSans800WoffTwo from '@assets/fonts/open-sans-v18-latin-800.woff2';
import OpenSansRegularWoff from '@assets/fonts/open-sans-v18-latin-regular.woff';
import OpenSansRegularWoffTwo from '@assets/fonts/open-sans-v18-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src:
      url('${OpenSansRegularWoffTwo}') format('woff2'),
      url('${OpenSansRegularWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src:
      url('${OpenSans800WoffTwo}') format('woff2'),
      url('${OpenSans800Woff}') format('woff');
  }
 
  html, body {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 800;
  }
`;

export default GlobalStyle;