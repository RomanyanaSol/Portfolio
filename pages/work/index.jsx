import s from './style.module.css';
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className={s.page}>
      <Circles />
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.text}>
            <motion.h2
              className={s.h2}
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              My work <span className={s.span}>.</span>
            </motion.h2>
            <motion.p
              className={s.p}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              Please click on the link to go to the project.
            </motion.p>
          </div>
          <motion.div
            className={s.serviceSlider}
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
