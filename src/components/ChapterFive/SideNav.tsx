import { FC } from "react";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoDribbble,
} from "react-icons/bi";
import SideImage from "@/assets/img/logo-01.jpg";
const SideNav: FC = () => {
  const socialIcons = [
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoLinkedin,
    BiLogoInstagram,
    BiLogoPinterest,
    BiLogoDribbble,
  ];
  return (
    <aside className="sticky top-0 left-0 h-screen bg-five-primary flex flex-col justify-between items-center">
      <div>
        <img className="side-nav-item" src={SideImage} alt="logo" />
      </div>
      <ul className="mb-12">
        {socialIcons.map((Icon, idx) => (
          <li key={idx} className="mb-8 ">
            <a href="#">
              <Icon className="text-white text-6xl hover:text-five-secondary transition-colors" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default SideNav;
