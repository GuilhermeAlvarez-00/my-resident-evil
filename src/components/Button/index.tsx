import { FC, ReactNode } from "react";
import * as S from "./styles";

interface IButton {
  children: ReactNode;
  themeColor?: "red" | "outline";
}

export const Button: FC<IButton> = ({ children, themeColor = "red" }) => {
  return <S.Container themeColor={themeColor}>{children}</S.Container>;
};
