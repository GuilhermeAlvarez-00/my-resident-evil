import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 4.52rem;
  background-color: var(--red-900);
`;

export const Wrapper = styled.nav`
  width: min(100%, 73rem);
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > a {
    line-height: 4.52rem;
    font-family: "Teko";
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--white-300);
    position: relative;
    transition: 0.2s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: transparent;
      transition: 0.2s;
    }

    &.active {
      color: var(--white-100);
      font-weight: 500;

      &::after {
        background-color: var(--red-500);
      }
    }
  }
`;
