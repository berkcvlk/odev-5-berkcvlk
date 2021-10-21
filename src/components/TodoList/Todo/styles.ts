import { styled } from "stitches.config";

export const Todo = styled("div", {
  dFlex: "center space-between",
  fontSize: "$3",
  color: "$text",

  "& + &": {
    marginTop: "24px",
  },
});

export const TodoText = styled("span", {
  flexGrow: "1",
  maxWidth: "480px",

  fontWeight: "500",
  marginLeft: "-5px",
  paddingLeft: "5px",
  outlineColor: "$text",

  "&[contenteditable]:empty::before": {
    content: "I think this should not be empty :)",
    color: "$gray300",
    fontWeight: "400",
  },

  variants: {
    checked: {
      true: {
        color: "$gray300",
        textDecoration: "line-through",
        userSelect: "none",
      },
    },
  },
});

export const CheckBox = styled("div", {
  dFlex: "center center",
  flexShrink: "0",

  width: "24px",
  height: "24px",

  borderRadius: "50%",
  backgroundColor: "$gray200",
  marginRight: "16px",

  cursor: "pointer",
  transition: "all .3s",

  variants: {
    checked: {
      true: {
        backgroundColor: "$primaryFaded",
      },
    },
  },
});

export const CloseButton = styled("div", {
  dFlex: "center center",
  cursor: "pointer",
});
