import styled, { css } from "styled-components";

import heroBanner from "../../../assets/img/hero/heroBanner.png";

const imagesWidth = {
  ps4: {
    max: "10.41206rem ",
    min: "4.66294rem",
  },
  ps5: {
    max: "10.11875rem",
    min: "4.53156rem",
  },
  xbox: {
    max: "8.736rem",
    min: "3.91231rem",
  },
  steam: {
    max: "7.25606rem",
    min: "3.24956rem",
  },
};

export type KeysImages = keyof typeof imagesWidth;

export interface IImage {
  imagename: KeysImages;
}

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
    width: 100%;
    max-width: 48rem;
  }

  @media (max-width: 468px) {
    > img {
      width: min(100%, 21rem);
    }
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

  @media (max-width: 796px) {
    > h2 {
      font-size: 1.5625rem;
    }
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
  gap: 3.88rem;
  margin-top: 10rem;
  position: relative;

  @media (max-width: 796px) {
    gap: 1.74rem;
    margin-top: 4rem;
  }
`;

export const ImageWrapper = styled.div<IImage>`
  ${({ imagename }) => css`
    width: ${`min(100%, ${imagesWidth[imagename].max})`};
    min-width: ${`${imagesWidth[imagename].min}`};
    height: auto;
    position: relative;

    &:first-child,
    &:first-child + div,
    &:last-child {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: rgba(250, 245, 245, 0.3);
      }
    }

    &:first-child,
    &:first-child + div {
      &::after {
        right: -1.94rem;
      }
    }

    &:last-child {
      &::after {
        left: -1.94rem;
      }
    }

    > img {
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  `}

  @media (max-width: 796px) {
    &:first-child,
    &:first-child + div {
      &::after {
        right: -0.87rem;
      }
    }

    &:last-child {
      &::after {
        left: -0.87rem;
      }
    }
  }
`;
