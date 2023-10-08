import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";

const Navigation: FC = () => {
  const menuOptions = [
    "Home",
    "About",
    " Project",
    "Services",
    "Hire Me",
    "Contact",
  ];

  return (
    <header className={style.navigation}>
      <nav>
        <div className={style.hamburger}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <ul>
          {menuOptions.map((menu, idx) => (
            <li>
              <a href="#" key={idx}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
