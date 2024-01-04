import s from './style.module.css';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className={s.page}>
      <div className={s.mainContainer}>
        <div className={s.container}>
          <motion.h1
            className={s.h1}
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Transforming Ideas <br /> Into {' '}
            <span className={s.span}>Digital Reality</span>
          </motion.h1>
          <motion.p
            className={s.p}
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            This is my portfolio site. My home projects can be found under the Work tab. I implemented this site using this stack: Next.js, Framer Motion, Formspree, tsParticles, react-countup, Swiper
          </motion.p>
          <div className={s.projectsBtn}>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className={s.largeProjectsBtn}
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className={s.imgContainer}>
        <ParticlesContainer />
        <div className={s.img}></div>
        <motion.div
          className={s.avatar}
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
};

export default Home;
