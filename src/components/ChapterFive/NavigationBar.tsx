import { FC, useRef } from "react";
import "@styles/ChapterFive/NaviGation.css";
const Navigation: FC = () => {
  const navigation = useRef<HTMLElement | null>(null);
  const ulElement = useRef<HTMLUListElement | null>(null);
  const menuOptions = [
    "Home",
    "About",
    "Project",
    "Services",
    "Hire Me",
    "Contact",
  ];
  const handleNav = () => {
    console.log("hallo");
    navigation.current?.classList.toggle("clicked");
    ulElement.current?.childNodes.forEach((n) => {
      (n as HTMLElement).classList.toggle("fade");
    });
  };
  return (
    <header
      ref={navigation}
      className="fixed top-0 right-[-5rem] z-10 h-screen w-5 bg-five-secondary-m  md:bg-five-secondary md:h-28 md:static md:w-full   "
    >
      <nav className="">
        <div onClick={handleNav} className="hamburger z-20 md:hidden">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <ul
          ref={ulElement}
          className="fade-effect flex  md:justify-end md:mr-8   "
        >
          {menuOptions.map((menu) => (
            <li
              key={Math.random() * 1000}
              className="text-center  opacity-0 md:opacity-100 my-8  "
            >
              <a
                href="#"
                className="text-5xl text-white my-auto mr-8 anchor-effect"
              >
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
