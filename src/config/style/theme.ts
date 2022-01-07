import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      linkBlue: string;
      lightGray1: string;
      lightGray2: string;
      lightGray3: string;
      darkGray1: string;
      darkGray2: string;
      darkGray3: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    linkBlue: "#166CD7",
    lightGray1: "#F3F5F7",
    lightGray2: "#C4C4C4",
    lightGray3: "#D0D7DE",
    darkGray1: "#6F7781",
    darkGray2: "#6F7781",
    darkGray3: "#24292F",
  },
};
