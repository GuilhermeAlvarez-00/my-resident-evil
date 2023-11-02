import styled, { css } from "styled-components";

interface IContainer {
  color: "red" | "outline";
}

export const Container = styled.button<IContainer>`
  padding: 1rem 1rem 0.75rem;
  border-radius: 0.1875rem;
  text-transform: uppercase;
  border: 0;
  transition: 0.2s;

  &,
  > p,
  > a,
  > span {
    color: white;
    font-family: "Teko";
    font-size: 1.125rem;
    text-transform: uppercase;
    position: relative;
    z-index: 100;
  }

  ${({ color }) =>
    color === "red"
      ? css`
          background-color: var(--red-500);

          &:hover {
            filter: brightness(0.8);
          }
        `
      : css`
          background-color: transparent;
          border: 1px solid var(--red-500);
          position: relative;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: var(--red-500);
            border-radius: 0.1875rem;
            transition: 0.2s;
            z-index: -1;
          }

          &:hover::after {
            width: 100%;
          }
        `}
`;
