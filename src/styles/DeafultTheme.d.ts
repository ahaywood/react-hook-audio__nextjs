import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      turquoise: string;
      daffadil: string;
      black: string;
      white: string;
    },

    fonts: {
      barlow: string;
      contrail: string;
      geo: string;
    },

    // margin and padding
    spacing: {
      mobilePadding: string;
    }
  }
}