import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";
import PersonImage from "@/assets/img/content-img-02.jpg";

const AboutMe: FC = () => {
  return (
    <section id="about-me" className={style.aboutMe}>
      <div className="about-me__img">
        <img src={PersonImage} alt="ME" />
      </div>

      <div className="about-me__content">
        <h2 className="about-me__content--title">About Me</h2>
        <p className="about-me__content--para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laudantium maiores aliquid magni debitis ipsum delectus impedit iure
          distinctio, sint tempora asperiores odit tempore temporibus incidunt,
          non ex expedita sunt.
        </p>
        <a href="#" className="about-me__content--link">
          Read More
        </a>
      </div>
    </section>
  );
};
export default AboutMe;
