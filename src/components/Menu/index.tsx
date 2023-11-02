import { useEffect, useState } from "react";
import * as S from "./styles";

const links = [
  {
    label: "Inicio",
    value: "#inicio",
  },
  {
    label: "Sobre",
    value: "#sobre",
  },
  {
    label: "Publicações",
    value: "#publicacoes",
  },
  {
    label: "História",
    value: "#historia",
  },
  {
    label: "Comparativo",
    value: "#comparativo",
  },
  {
    label: "Personagens",
    value: "#personagens",
  },
  {
    label: "Jogabilidades",
    value: "#jogabilidades",
  },
];

export const Menu: React.FC = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href.split("#")[1] ?? "");
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.LinksWrapper>
          {links.map((item, index) => (
            <a
              href={item.value}
              className={
                index === 0 && !url.length
                  ? "active"
                  : `${url}` === item.value.replace("#", "")
                  ? "active"
                  : ""
              }
              onClick={() => setUrl(item.value.replace("#", ""))}
            >
              {item.label}
            </a>
          ))}
        </S.LinksWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
