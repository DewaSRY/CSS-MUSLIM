import { FC, Fragment } from "react";
// import style from "@styles/ChapterFive/index.module.scss";
import "@styles/ChapterFive/SkillProgress.css";
const ProgressBar: FC<{
  percentage: number;
}> = ({ percentage }) => {
  return (
    <div className="bg-five-primary block w-full rounded-[3rem]">
      <span
        style={{
          width: percentage + "%",
        }}
        className="p-5 md:p-10  inline-block skill-progress"
      ></span>
    </div>
  );
};
const SkillsSection: FC = () => {
  const designSkills = [
    {
      title: "Web Design",
      progress: <ProgressBar percentage={100} />,
    },
    {
      title: "Print Design",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Logo Design",
      progress: <ProgressBar percentage={70} />,
    },
    {
      title: "Graphic Design",
      progress: <ProgressBar percentage={85} />,
    },
  ];
  const coddingSkills = [
    {
      title: "HTML / CSS",
      progress: <ProgressBar percentage={95} />,
    },
    {
      title: "JavaScript",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Python",
      progress: <ProgressBar percentage={65} />,
    },
    {
      title: "SQL",
      progress: <ProgressBar percentage={90} />,
    },
  ];
  return (
    <section
      id="skills"
      className="bg-five-tertiary flex flex-wrap justify-evenly py-12 "
    >
      <div className="basis-[60rem] mx-12 my-8">
        <h3 className="text-5xl mb-12 md:text-7xl">Design Skills</h3>
        {designSkills.map((skills, id) => (
          <Fragment key={id}>
            <h4 className=" text-2xl text-white md:text-4xl md:mt-12">
              {skills.title}
            </h4>
            {skills.progress}
          </Fragment>
        ))}
      </div>

      <div className="basis-[60rem]  mx-12 my-8">
        <h3 className="text-5xl mb-12 md:text-7xl">Coding Skills</h3>
        {coddingSkills.map((skills, id) => (
          <Fragment key={id}>
            <h4 className=" text-2xl text-white md:text-4xl md:mt-12">
              {skills.title}
            </h4>
            {skills.progress}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
export default SkillsSection;
