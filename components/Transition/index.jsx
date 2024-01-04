import { motion } from 'framer-motion';
import s from './style.module.css';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
};

const Transition = () => {
  return (
    <>
      <motion.div className={s.first}
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0, duration: 0, ease: 'easeInOut' }}>
      </motion.div>
      <motion.div className={s.second}
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.1, duration: 0.2, ease: 'easeInOut' }}>
      </motion.div>
      <motion.div className={s.third}
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.3, duration: 0.4, ease: 'easeInOut' }}>
      </motion.div>
      <motion.div className={s.fourth}
        variants={transitionVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ delay: 0.5, duration: 0.6, ease: 'easeInOut' }}>
      </motion.div>

    </>
  );
};

export default Transition;
