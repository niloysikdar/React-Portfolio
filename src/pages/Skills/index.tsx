import { SkillsData } from "../../data/SkillsData";
import styles from "./skills.module.scss";

// @ts-ignore
import Zoom from "react-reveal/Zoom";

const skillsOpen = "<skills>";
const skillsClose = "</skills>";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <Zoom bottom big cascade>
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
      </Zoom>
    </div>
  );
};

export { Skills };
