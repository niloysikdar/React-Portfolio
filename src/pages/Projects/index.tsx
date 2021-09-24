import { motion } from 'framer-motion';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';
import styles from './projects.module.scss';

import {
    pageVariants,
    pageTransition,
} from '../../components/Framer/Animation';

// @ts-ignore

const projectsOpen = '<projects>';
const projectsClose = '</projects>';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.wrapper}>
        <h3 className={styles.projectsOpen}>
          <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
              {projectsOpen}
            </motion.div>
        </h3>

        <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
          <div className={styles.projects_content}>
            {ProjectsData.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  GitHub={item.GitHub}
                  hosted={item.hosted}
                />
              )
            )}
          </div>
        </motion.div>

        <h3 className={styles.projectsClose}>
          <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
              {projectsClose}
          </motion.div>
        </h3>
      </div>
    </div>
  );
};

export { Projects };
