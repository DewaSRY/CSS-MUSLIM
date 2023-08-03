import style from "./AsideNav.module.scss";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaDribbble,
  FaPinterest,
} from "react-icons/fa";
import logo from "../../assets/img/logo-01.jpg";
export function AsideNav() {
  return (
    <aside className={style["side-nav"]}>
      <div className={style["side-nav-content"]}>
        <div className={style["side-nav-content-logo"]}>
          <img src={logo} />
        </div>
        <ul className={style["side-nav-content-social"]}>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaDribbble />
          </a>
          <a href="#">
            <FaPinterest />
          </a>
        </ul>
      </div>
    </aside>
  );
}
