import style from "./ServiceSection.module.scss";
import {
  FaQuidditch,
  FaTasks,
  FaMobile,
  FaPaintBrush,
  FaEdit,
  FaProjectDiagram,
} from "react-icons/fa";

const serviceContent = [
  {
    icon: FaQuidditch,
    title: "UI Design",
    para: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi,
    atque deserunt iste ipsa odit!
    `,
  },
  {
    icon: FaTasks,
    title: "Web Development",
    para: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi,
    atque deserunt iste ipsa odit!
    `,
  },
  {
    icon: FaMobile,
    title: "App Development",
    para: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi,
    atque deserunt iste ipsa odit!
    `,
  },
  {
    icon: FaPaintBrush,
    title: "TYPE DESIGN",
    para: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi,
    atque deserunt iste ipsa odit!
    `,
  },
  {
    icon: FaEdit,
    title: "BLOG WRITER",
    para: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi,
    atque deserunt iste ipsa odit!
    `,
  },
  {
    icon: FaProjectDiagram,
    title: "PROJECT MANAGEMENT",
    para: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi,
    atque deserunt iste ipsa odit!
    `,
  },
];

export function ServiceSection() {
  return (
    <section id="services" className={style["services"]}>
      {serviceContent.map((sec) => (
        <div className={style["service"]}>
          <sec.icon />
          <h3 className={style["service-title"]}>
            {sec.title.toLocaleUpperCase()}
          </h3>
          <p className={style["service-para"]}>{sec.para}</p>
        </div>
      ))}
    </section>
  );
}

// {/* <!-- Service 6 --> */}
