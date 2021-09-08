import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      turquoise: string;
      daffadil: string;
      black: string;
      white: string;
      balticSea: string;
    },

    fonts: {
      barlow: string;
      contrail: string;
      geo: string;
      dank: string;
    },

    // margin and padding
    spacing: {
      mobilePadding: string;
      pageWidth: string;
    }
  }
}

/* ----------------------------- */

export const Theme = {
  // primary color palette
  colors: {
    'turquoise': '#51ebd4',
    'daffadil': '#fcfe38',
    'black': '#0D0F0A',
    'white': '#ffffff',
    'balticSea': '#3e3d3d',
  },

  fonts: {
    barlow: 'Barlow',
    contrail: 'Contrail One',
    geo: 'Geo',
    dank: 'monospace'
  },

  // margin and padding
  spacing: {
    'mobilePadding': '25px',
    'pageWidth': '1300px'
  }
}