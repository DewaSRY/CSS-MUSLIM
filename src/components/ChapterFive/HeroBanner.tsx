import { FC } from "react";
// import style from "@styles/ChapterFive/index.module.scss";
import "@styles/ChapterFive/HeroBanner.css";
import BgFull from "@assets/img/full-bg-07-1.jpg";
const HeroBanner: FC = () => {
  return (
    <section
      style={{
        background: `url(${BgFull})`,
        backgroundPositionX: "80%",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen bg-cover flex items-end md:items-center md:bg-contain hero-banner "
    >
      <div
        style={{
          height: "calc( 5rem + 20vmax)",
          color: "white",
        }}
        className="bg-five-secondary-m py-4 px-16  flex flex-col justify-evenly  "
      >
        <h1 className="text-6xl md:text-[8rem]">Scarlet Tyler</h1>
        <p className="text-4xl md:text-6xl mt-4">
          UX Designer / Frontend Developer
        </p>
        <a className="text-4xl md:text-6xl showcase" href="#">
          My Work
        </a>
      </div>
    </section>
  );
};
export default HeroBanner;
