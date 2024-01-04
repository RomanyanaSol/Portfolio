import s from './style.module.css';
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
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
              My services <span className={s.span}>.</span>
            </motion.h2>
            <motion.p
              className={s.p}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis numquam unde corrupti veniam.
            </motion.p>
          </div>
          <motion.div
            className={s.serviceSlider}
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
