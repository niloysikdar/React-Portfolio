import { motion } from 'framer-motion';
import { EducationCard } from '../../components/EducationCard/EducationCard';

import {
    pageVariants,
    pageTransition,
} from '../../components/Framer/Animation';

import { EducationData } from '../../data/EducationData';
import styles from './education.module.scss';

const eduOpen = '<education>';
const eduClose = '</education>';

const Education = () => {
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
          {EducationData.map((item, index) => (
            <EducationCard
              key={item.date}
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

export { Education };
