import styles from "./skills.module.scss";

import { SkillsData } from "./SkillsData";

const skillsOpen = "<skills>";
const skillsClose = "</skills>";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.wrapper}>
        <h3 className={styles.skillsopen}>{skillsOpen}</h3>
        <div className={styles.skills_content}>
          {SkillsData.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <h3 className={styles.skillsclose}>{skillsClose}</h3>
      </div>
    </div>
  );
};

export { Skills };
