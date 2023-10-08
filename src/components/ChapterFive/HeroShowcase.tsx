import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";

const HeroShowcase: FC = () => {
  return (
    <section id="showcase" className={style.showcase}>
      <div>
        <h1>Scarlet Tyler</h1>
        <p>UX Designer / Frontend Developer</p>
        <a href="#">My Work</a>
      </div>
    </section>
  );
};
export default HeroShowcase;
