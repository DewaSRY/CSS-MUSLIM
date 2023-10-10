import { FC } from "react";

import PersonImage from "@/assets/img/content-img-02.jpg";
import "@styles/ChapterFive/AboutMe.css";
const AboutMe: FC = () => {
  return (
    <section
      id="about-me"
      className="p-4 bg-five-secondary flex flex-wrap justify-center md:justify-evenly"
    >
      <div className="basis-[50rem]">
        <img src={PersonImage} alt="ME" className="bg-fixed " />
      </div>

      <div className="basis-[80rem]  text-white py-4 md:my-auto ">
        <h2 className="text-6xl about-me md:text-[15rem]">About Me</h2>
        <p className="text-4xl md:text-6xl md:leading-[5.5rem] my-24 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laudantium maiores aliquid magni debitis ipsum delectus impedit iure
          distinctio, sint tempora asperiores odit tempore temporibus incidunt,
          non ex expedita sunt.
        </p>
        <a
          href="#"
          className="text-4xl py-2  anchor-effect md:text-[5rem] md:leading-[5.5rem]"
        >
          Read More
        </a>
      </div>
    </section>
  );
};
export default AboutMe;
