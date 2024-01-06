import { FC } from "react";

import heroLetter from "../../../assets/img/hero/heroLetter.png";
import ps4 from "../../../assets/img/hero/ps4.svg";
import ps5 from "../../../assets/img/hero/ps5.svg";
import steam from "../../../assets/img/hero/steam.svg";
import xbox from "../../../assets/img/hero/xboxxs.svg";
import { Button } from "../../Button";
import { KeysImages } from "./styles";

import * as S from "./styles";
import { SocialMedias } from "../../SocialMedias";

const images = [
  {
    name: "ps4",
    src: ps4,
    alt: "Logo do playstation escrito ps4 ao lado",
  },
  {
    name: "ps5",
    src: ps5,
    alt: "Logo do playstation escrito ps5 ao lado",
  },
  {
    name: "xbox",
    src: xbox,
    alt: "Logo do playstation escrito xbox series x ao lado",
  },
  {
    name: "steam",
    src: steam,
    alt: "Logo da steam escrito steam ao lado",
  },
];

export const Hero: FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={heroLetter} />

        <S.TextWrapper>
          <h2>Sobreviva ao pesadelo</h2>
          <p>
            Desvende os mistérios do Resident Evil 4 e enfrente o terror que te
            espera!
          </p>
        </S.TextWrapper>

        <S.ButtonWrapper>
          <Button>Pré-venda digital</Button>
          <Button color="outline">Assista ao trailer</Button>
        </S.ButtonWrapper>

        <S.ImagesWrapper>
          {images.map((image) => (
            <S.ImageWrapper
              imagename={image.name as KeysImages}
              key={image.name}
            >
              <img src={image.src} alt={image.alt} />
            </S.ImageWrapper>
          ))}
        </S.ImagesWrapper>
      </S.Wrapper>
      <SocialMedias />
    </S.Container>
  );
};
