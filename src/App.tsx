import { AsideNav } from "./Component/Aside-Nav";
import { Header } from "./Component/Header";
import { ShowCase } from "./Component/ShowCase";
import { WorkSection } from "./Component/Work-Section";
import { AboutMeSection } from "./Component/About-Me-Section";
import { ServiceSection } from "./Component/Service-Section";
import { SkillSection } from "./Component/SkillsSection";
import { TestimonialSection } from "./Component/Testimoni";
import { ContactSection } from "./Component/Contact-section";
function App() {
  return (
    <>
      <AsideNav />
      {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Aside Nav *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
      {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Main Content *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
      <main>
        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Main Nav *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <Header />

        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Showcase / Hero Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <ShowCase />

        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Work Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <WorkSection />
        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* About Me Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <AboutMeSection />
        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Services Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <ServiceSection />
        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Skills Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <SkillSection />
        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Testimonials Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <TestimonialSection />
        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Contact Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
        <ContactSection />
      </main>
    </>
  );
}

export default App;
