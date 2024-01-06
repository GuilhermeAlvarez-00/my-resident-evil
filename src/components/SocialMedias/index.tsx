import { FC } from "react";
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa6";

import * as S from "./styles";

const mediaLinks = [
  {
    icon: <FaTwitter />,
    alt: "Twitter icon",
    link: "https://twitter.com/",
  },
  {
    icon: <FaYoutube />,
    alt: "Youtube icon",
    link: "https://youtube.com/",
  },
  {
    icon: <FaFacebook />,
    alt: "Facebook icon",
    link: "https://facebook.com/",
  },
  {
    icon: <FaInstagram />,
    alt: "Instagram icon",
    link: "https://instagram.com/",
  },
];

export const SocialMedias: FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextWrapper>
          <span>Siga-nos</span>
        </S.TextWrapper>

        <S.MediaLinksWrapper>
          {mediaLinks.map((item) => (
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </S.MediaLinksWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
