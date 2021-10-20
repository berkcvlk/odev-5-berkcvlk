import { createStitches } from "@stitches/react";

/**
 * IMPORTANT
 * To use configuration, you need to import this "styled, keyframes" constants
 * create component from it.
 */
export const { styled, keyframes } = createStitches({
  theme: {
    colors: {
      primary: "#e5989b",
      primaryFaded: "#ffe8e2",
      text: "#6d6875",
      gray100: "#fafafa",
      gray200: "#f3f3f3",
      gray300: "#c2c2c2",
    },
    fontSizes: {
      1: "10px",
      2: "12px",
      3: "14px",
      4: "16px",
      5: "42px",
    },
    fonts: {
      default: "'Poppins', sans-serif",
    },
  },
  utils: {
    dFlex: (value: string) => {
      const val = value.split(" ");

      return {
        display: "flex",
        alignItems: val[0] || "initial",
        justifyContent: val[1] || "initial",
      };
    },
  },
});
