import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  top: 20%;
  right: 0;
  /* transform: translateY(-50%); */
  background-color: var(--red-500);
  border-radius: 0.3125rem 0rem 0rem 0.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.45rem calc(0.5rem + 0.85rem);

  @media (max-width: 916px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const TextWrapper = styled.div`
  > span {
    font-family: "Teko";
    text-transform: uppercase;
    color: white;
    writing-mode: vertical-lr;
    display: inline-block;
    font-size: 1.125rem;
    line-height: 1rem;
    font-weight: 500;
  }

  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: -0.5rem;
    width: 200%;
    height: 1px;
    background-color: white;
  }
`;

export const MediaLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  > a {
    transition: 0.2s;

    &:not(:first-child) {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateY(-3px);
    }

    > svg {
      transform: scale(1.5);
      color: white;
    }
  }
`;
