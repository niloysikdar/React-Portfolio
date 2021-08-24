import styles from "./projects.module.scss";

const projectsOpen = "<projects>";
const projectsClose = "</projects>";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.wrapper}>
        <h3 className={styles.projectsOpen}>{projectsOpen}</h3>
        <h3 className={styles.projectsClose}>{projectsClose}</h3>
      </div>
    </div>
  );
};

export { Projects };
