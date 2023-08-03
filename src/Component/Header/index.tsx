import style from "./Header.module.scss";
const Sections = ["Home", "About", "Project", "Service", "Hire-Me", "Contact"];
export function Header() {
  return (
    <header id="header" className={style["header"]}>
      <nav className={style["header-nav"]}>
        <div className={style["header-nav-icon"]}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
        <ul className={style["header-nav-links"]}>
          {Sections.map((section, id) => (
            <li key={id}>
              <a href={`#${section}`}>{section.toLocaleUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
