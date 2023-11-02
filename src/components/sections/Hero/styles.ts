import styled from "styled-components";

import heroBanner from "../../../assets/img/hero/heroBanner.png";

export const Container = styled.div`
  width: 100%;
  height: 60rem;
  background-image: url(${heroBanner});
  background-size: cover;
  background-position: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    margin: 0 auto;
  }
`;

export const TextWrapper = styled.article`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.54rem;

  > h2 {
    font-family: "Martel";
    font-size: 2rem;
    font-weight: 700;
    color: var(--red-500);
    text-transform: uppercase;
  }

  > p {
    font-family: "Martel";
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--white-300);
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.94rem;
  margin-top: 10rem;
`;
