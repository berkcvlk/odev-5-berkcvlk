import { ButtonHTMLAttributes, FC } from "react";

import * as S from "./styles";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <S.Button {...props} />;
};

export default Button;
