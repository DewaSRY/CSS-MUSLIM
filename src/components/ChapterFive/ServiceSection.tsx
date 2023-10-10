import { FC } from "react";
import "@styles/ChapterFive/ServiceSection.css";
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
    <section className="flex flex-wrap bg-five-tertiary text-white py-12  items-center ">
      {services.map((service) => (
        <div
          key={Math.random() * 10000}
          className="basis-[60rem] bg-five-secondary border-five-secondary border-2 border-t-0 mt-12 mx-auto py-12 px-8 service-window"
        >
          <h3 className=" flex justify-between text-black text-3xl mb-8  md:text-6xl">
            {service.title}
            <span className="inline text-white">{service.icon}</span>
          </h3>
          <p className="text-2xl md:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
      ))}
    </section>
  );
};
export default ServiceSection;
