import { styled } from "stitches.config";

export const Container = styled("div", {
  width: "700px",

  margin: "0 auto",
  padding: "92px 50px",
});

export const Title = styled("h1", {
  margin: "40px 0",

  fontSize: "$5",
  fontWeight: "700",

  textAlign: "center",
  textTransform: "uppercase",

  color: "$text",

  backgroundImage: "url('assets/images/check.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 100%",
});

export const NoListFound = styled("p", {
  margin: "0",
  padding: "0 20px",
  fontSize: "$3",
  color: "$gray300",
});

export const Hr = styled("div", {
  width: "700px",
  height: "1px",

  margin: "24px -50px",
  backgroundColor: "rgba(109, 104, 117, 0.08)",
});
