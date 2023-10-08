import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";
import {
  FaQuidditch,
  FaMobileAlt,
  FaTasks,
  FaPaintRoller,
  FaEdit,
  FaProjectDiagram,
} from "react-icons/fa";
const ServiceSection: FC = () => {
  const services = [
    {
      icon: <FaQuidditch />,
      title: "UI Design",
    },
    {
      icon: <FaTasks />,
      title: "Web Development",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
    },
    {
      icon: <FaPaintRoller />,
      title: "Type Design",
    },
    {
      icon: <FaEdit />,
      title: " Blog Writer",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Web Development",
    },
  ];
  return (
    <section className={style.serviceSection}>
      {services.map((service) => (
        <div key={Math.random() * 10000}>
          {service.icon}
          <h3>{service.title}</h3>
          <p className="services--para services__service-2--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
      ))}
    </section>
  );
};
export default ServiceSection;
