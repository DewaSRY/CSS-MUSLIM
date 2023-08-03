import style from "./AboutMeSection.module.scss";
import contentImg from "../../assets/img/content-img-02.jpg";
export function AboutMeSection() {
  return (
    <section id="about-me" className={style["about-me"]}>
      <div className={style["about-me-img"]}>
        <img src={contentImg} alt="ME" />
      </div>
      <div className={style["about-me-content"]}>
        <h2 className={style["about-me-content-title"]}>About Me</h2>
        <p className={style["about-me-content-para"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laudantium maiores aliquid magni debitis ipsum delectus impedit iure
          distinctio, sint tempora asperiores odit tempore temporibus incidunt,
          non ex expedita sunt.
        </p>
        <a href="#" className={style["about-me-content-link"]}>
          Read More
        </a>
      </div>
    </section>
  );
}
