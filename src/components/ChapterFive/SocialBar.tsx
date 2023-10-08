import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoDribbble,
} from "react-icons/bi";
import SideImage from "@/assets/img/logo-01.jpg";
const SocialBar: FC = () => {
  const socialIcons = [
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoLinkedin,
    BiLogoInstagram,
    BiLogoPinterest,
    BiLogoDribbble,
  ];
  return (
    <aside className={style.sideNav}>
      <div>
        <img src={SideImage} alt="logo" />
      </div>
      <ul>
        {socialIcons.map((Icon, idx) => (
          <li key={idx}>
            <a href="#">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default SocialBar;
