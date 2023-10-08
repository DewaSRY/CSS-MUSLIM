import { FC, Fragment } from "react";
import style from "@styles/ChapterFive/index.module.scss";

const ProgressBar: FC<{
  percentage: number;
}> = ({ percentage }) => {
  return (
    <div className={style.ProgressBar}>
      <span
        style={{
          width: percentage + "%",
        }}
      ></span>
    </div>
  );
};
const SkillsSection: FC = () => {
  const designSkills = [
    {
      title: "Web Design",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Print Design",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Logo Design",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Graphic Design",
      progress: <ProgressBar percentage={80} />,
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
    <section id="skills" className={style.SkillsSection}>
      <div>
        <h3>Design Skills</h3>
        {designSkills.map((skills, id) => (
          <Fragment key={id}>
            <h4>{skills.title}</h4>
            {skills.progress}
          </Fragment>
        ))}
      </div>

      <div>
        <h3>Coding Skills</h3>
        {coddingSkills.map((skills, id) => (
          <Fragment key={id}>
            <h4>{skills.title}</h4>
            {skills.progress}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
export default SkillsSection;
