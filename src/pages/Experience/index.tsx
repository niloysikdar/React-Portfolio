import { motion } from 'framer-motion';
import { EducationCard } from '../../components/EducationCard/EducationCard';

import {
    pageVariants,
    pageTransition,
} from '../../components/Framer/Animation';

import { ExperienceData } from '../../data/ExperienceData';
import styles from '../Education/education.module.scss';

const eduOpen = '<experience>';
const eduClose = '</experience>';

const Experience = () => {
  return (
    <div className={styles.education}>
      <div className={styles.wrapper}>
        <h3 className={styles.eduOpen}>
          <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
              {eduOpen}
            </motion.div>
        </h3>
        <motion.div
          initial='init'
          animate='anim'
          exit='last'
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className={styles.center_line}></div>
          {ExperienceData.map((item, index) => (
            <EducationCard
              key={item.title}
              title={item.title}
              date={item.date}
              details={item.details}
              isLeft={index % 2 === 0 ? true : false}
            />
          ))}
        </motion.div>
        <h3 className={styles.eduClose}>
          <motion.div 
            initial='init'
            animate='anim'
            exit='last'
            variants={pageVariants}
            transition={pageTransition}>
              {eduClose}
          </motion.div>
        </h3>
      </div>
    </div>
  );
};

export { Experience };
