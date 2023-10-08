import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";
import SocialBar from "./SocialBar";
import Navigation from "./NavigationBar";
import HeroShowcase from "./HeroShowCase";
import WorkSection from "./WorkSection";
import AboutMe from "./AboutMe";
import ServiceSection from "./ServiceSection";
import SkillsSection from "./SkillsProgress";
import Testimonial from "./Testimonial";
import ContactSection from "./ContactMeSection";
const ChapterVive: FC = () => {
  return (
    <div className={style.container}>
      <SocialBar />
      <main>
        <Navigation />
        <HeroShowcase />
        <WorkSection />
        <AboutMe />
        <ServiceSection />
        <SkillsSection />
        <Testimonial />
        <ContactSection />
      </main>
    </div>
  );
};

export default ChapterVive;
