import { FC } from "react";
import SideNav from "./SideNav";
import Navigation from "./NavigationBar";
import HeroBanner from "./HeroBanner";
import WorkSection from "./WorkSection";
import AboutMe from "./AboutMe";
import ServiceSection from "./ServiceSection";
import SkillsSection from "./SkillsProgress";
import Testimonial from "./Testimonial";
import ContactSection from "./ContactMeSection";
const ChapterVive: FC = () => {
  return (
    <div className="flex ">
      <SideNav />
      <main className="flex-1">
        <Navigation />
        <HeroBanner />
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
