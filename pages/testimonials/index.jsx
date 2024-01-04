import s from './style.module.css';
import TestimonialSlider from '../../components/TestimonialSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <motion.h2
          className={s.h2}
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          What clients<span className={s.accent}> say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
