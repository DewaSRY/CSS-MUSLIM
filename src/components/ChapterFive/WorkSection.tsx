import { FC } from "react";
import "@styles/ChapterFive/WorkSection.css";
import PortFoOne from "@/assets/img/portfolio-branding-01-1.jpg";
import PortFoTwo from "@/assets/img/portfolio-branding-02-1.jpg";
import PortFoThree from "@/assets/img/portfolio-creative-01-1.jpg";
import PortFoFour from "@/assets/img/portfolio-creative-02-1.jpg";
import PortFoFive from "@/assets/img/portfolio-design-01-1.jpg";
import PortFoSIx from "@/assets/img/portfolio-print-02-1.jpg";
const WorkSection: FC = () => {
  const portFoImage = [
    PortFoOne,
    PortFoTwo,
    PortFoThree,
    PortFoFour,
    PortFoFive,
    PortFoSIx,
  ];
  return (
    <section className="flex flex-wrap justify-center p-8 bg-five-tertiary">
      {portFoImage.map((img, idx) => (
        <div key={idx} className="basis-80 grow p-4 pentagon">
          <img src={img} alt="test" />
        </div>
      ))}
    </section>
  );
};
export default WorkSection;
