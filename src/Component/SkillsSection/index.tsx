import { Fragment } from "react";
import style from "./SkillSection.module.scss";
const skillList = {
  "Design Skills": [
    {
      skill: "Web Design",
      progress: 76,
    },
    {
      skill: "Print Design",
      progress: 67,
    },
    {
      skill: "Logo Design",
      progress: 75,
    },
    {
      skill: "Graphic Design",
      progress: 70,
    },
  ],
  "coding skill": [
    {
      skill: "HTML / CSS",
      progress: 100,
    },
    {
      skill: "JavaScript",
      progress: 98,
    },
    {
      skill: "Python",
      progress: 86,
    },
    {
      skill: "SQL",
      progress: 76,
    },
  ],
};
console.log();
type key = "Design Skills" | "coding skill";
export function SkillSection() {
  return (
    <section id="skills" className={style["skills"]}>
      {Object.keys(skillList).map((skill, id) => {
        return (
          <div key={id} className={style["skill"]}>
            <h3 className={style["skill-title"]}>
              {skill.toLocaleUpperCase()}
            </h3>
            {skillList[skill as key].map((skill) => (
              <Fragment key={skill.skill}>
                <h4>{skill.skill.toLocaleUpperCase()}</h4>
                <div className={style["skill-progress"]}>
                  <span
                    style={{
                      maxWidth: `${skill.progress}%`,
                    }}
                  ></span>
                </div>
              </Fragment>
            ))}
          </div>
        );
      })}
    </section>
  );
}

// <div className="skills__coding">
//   <h3 className="skills__coding--title">Coding Skills</h3>

//   <h4>HTML / CSS</h4>
//   <div className="skills__coding--progress">
//     <span className="skills__coding--progress__1"></span>
//   </div>

//   <h4>JavaScript</h4>
//   <div className="skills__coding--progress">
//     <span className="skills__coding--progress__2"></span>
//   </div>

//   <h4>Python</h4>
//   <div className="skills__coding--progress">
//     <span className="skills__coding--progress__3"></span>
//   </div>

//   <h4>SQL</h4>
//   <div className="skills__coding--progress">
//     <span className="skills__coding--progress__4"></span>
//   </div>
// </div>
