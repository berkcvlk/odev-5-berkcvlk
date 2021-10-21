import { styled } from "stitches.config";

import { Button } from "components";

export const Filters = styled("div", {
  dFlex: "center",
  padding: "0 20px",
  marginBottom: "16px",
});

export const Buttons = styled("div", {
  dFlex: "center start",
});

export const FilterButton = styled(Button, {
  width: "80px",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "8px 0",
  borderRadius: "8px",

  "& + &": {
    marginLeft: "12px",
  },

  variants: {
    isActive: {
      true: {
        backgroundColor: "$primaryFaded",
        color: "$primary",
      },
    },
  },
});

export const See = styled("span", {
  dFlex: "center center",

  fontSize: "$2",
  fontWeight: "700",
  textTransform: "uppercase",
  verticalAlign: "middle",

  marginRight: "24px",
  color: "$text",
  userSelect: "none",
});
