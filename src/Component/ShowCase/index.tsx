import style from "./ShowCase.module.scss";
import personBG from "../../assets/img/full-bg-07.jpg";
export function ShowCase() {
  return (
    <section
      id="showcase"
      className={style["showcase"]}
      style={{ backgroundImage: `url(${personBG})` }}
    >
      <div className={style["showcase-content"]}>
        <h1 className={style["showcase-content-title"]}>Scarlett Tyler</h1>
        <p className={style["showcase-content-para"]}>
          UX Designer / Frontend Developer
        </p>
        <a href="#" className={style["showcase-content-link"]}>
          My Work
        </a>
      </div>
    </section>
  );
}
