import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";
import PortFoOne from "@/assets/img/portfolio-branding-01-1.jpg";
import PortFoTwo from "@/assets/img/portfolio-branding-02-1.jpg";
import PortFoThree from "@/assets/img/portfolio-creative-01-1.jpg";
import PortFoFour from "@/assets/img/portfolio-creative-02-1.jpg";
import PortFoFive from "@/assets/img/portfolio-design-01-1.jpg";
import PortFoSIx from "@/assets/img/portfolio-print-02-1.jpg";
const WorkSection: FC = () => {
  return (
    <section className={style.work}>
      <div>
        <img src={PortFoOne} alt="" />{" "}
      </div>
      <div>
        <img src={PortFoTwo} alt="" />
      </div>
      <div>
        <img src={PortFoThree} alt="" />
      </div>
      <div>
        <img src={PortFoFour} alt="" />
      </div>
      <div>
        <img src={PortFoFive} alt="" />
      </div>
      <div>
        <img src={PortFoSIx} alt="" />
      </div>
    </section>
  );
};
export default WorkSection;
