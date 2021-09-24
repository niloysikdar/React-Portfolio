import { motion } from 'framer-motion';
import { SkillsData } from '../../data/SkillsData';
import styles from './skills.module.scss';

import {
    pageVariants,
    pageTransition,
} from '../../components/Framer/Animation';

// @ts-ignore

const skillsOpen = '<skills>';
const skillsClose = '</skills>';

const Skills = () => {
  return (
    <div className={styles.skills}>
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>
          <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
              {skillsOpen}
            </motion.div>
          </h3>

          <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
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
          </motion.div>
          
          <h3 className={styles.skillsclose}>
          <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
              {skillsClose}
            </motion.div>
          </h3>
        </div>
    </div>
  );
};

export { Skills };
