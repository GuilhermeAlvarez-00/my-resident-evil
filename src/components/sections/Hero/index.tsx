import { FC } from "react";

import heroLetter from "../../../assets/img/hero/heroLetter.png";
import ps4 from "../../../assets/img/hero/ps4.svg";
import ps5 from "../../../assets/img/hero/ps5.svg";
import xbox from "../../../assets/img/hero/xboxxs.svg";
import steam from "../../../assets/img/hero/steam.svg";

import * as S from "./styles";
import { Button } from "../../Button";

const images = [ps4, ps5, xbox, steam];

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
          {images.map((image, index) => (
            <img src={image} key={index} />
          ))}
        </S.ImagesWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
