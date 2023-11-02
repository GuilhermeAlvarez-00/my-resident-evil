import { FC, ReactNode } from "react";
import * as S from "./styles";

interface IButton {
  children: ReactNode;
  color?: "red" | "outline";
}

export const Button: FC<IButton> = ({ children, color = "red" }) => {
  return <S.Container color={color}>{children}</S.Container>;
};
