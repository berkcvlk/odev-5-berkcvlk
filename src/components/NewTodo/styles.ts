import { styled } from "stitches.config";

export const NewTodoForm = styled("form", {
  dFlex: "center",

  width: "100%",

  backgroundColor: "#ffffff",
  borderRadius: "10px",
  padding: "20px",
});

export const New = styled("div", {
  dFlex: "center center",

  fontSize: "$2",
  fontWeight: "700",
  textTransform: "uppercase",
  verticalAlign: "middle",

  marginRight: "24px",
  color: "$text",
  userSelect: "none",
});

export const Input = styled("input", {
  border: "none",
  outline: "none",

  flex: "1 1 100%",
  fontFamily: "$default",
  fontSize: "$3",

  color: "$text",

  "&::placeholder": {
    color: "$gray300",
  },
});
