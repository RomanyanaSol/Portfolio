import React, { useState } from "react";
import s from './style.module.css';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobephotoshop, SiAdobepremierepro, SiAdobeaftereffects } from "react-icons/si";

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [<FaHtml5 key="html5" />, <FaCss3 key="css3" />, <FaJs key="js" />, <FaReact key="react" />, <SiNextdotjs key="next" />, <SiFramer key="framer" />, <FaWordpress key="wordpress" />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />, <SiAdobepremierepro key="premierepro" />, <SiAdobeaftereffects key="aftereffects" />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Digital Content Manager - Self-employed',
        stage: '2018 - 2022',
      },
      
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Front-End Developer - Tel-Ran Programming School, Berlin',
        stage: '2023',
      },
    ],
  },
  {
    title: 'achievements',
    info: [
      {
        title: 'own YouTube channel (educational content)',
        stage: '30 000+ subscribers',
      },
      {
        title: 'Udemy. Course Multiplication table',
        stage: '386 students',
      }
    ],
  },
];

const About = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className={s.main}>
      <Circles />
      <div className={s.container}>
        <div className={s.text}>
          <motion.h2
            className={s.h2}
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Captivating <span className={s.accentH}>stories</span> birth magnificient designs.
          </motion.h2>
          <motion.p
            className={s.p}
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Looking for a job Front-End Developer.
          </motion.p>
          <motion.div
            className={s.countUp}
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <div className={s.countMainCont}>
              <div className={s.countMain}>
                <div className={s.up}>
                  <CountUp start={0} end={1} duration={7} /> +
                </div>
                <div className={s.countDescr}>Years of experience</div>
              </div>
              <div className={s.countMain}>
                <div className={s.up}>
                  <CountUp start={0} end={10} duration={7} /> +
                </div>
                <div className={s.countDescr}>Satisfied clients</div>
              </div>
              <div className={s.countMainLast}>
                <div className={s.up}>
                  <CountUp start={0} end={10} duration={7} /> +
                </div>
                <div className={s.countDescr}>Finished projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className={s.aboutDataCont}
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <div className={s.aboutData}>
            {
              aboutData.map((item, itemIndex) =>
                <div
                  key={itemIndex}
                  className={`${index === itemIndex ? s.accent : s.item}`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>)
            }
          </div>
          <div className={s.aboutDataIndex}>
            {
              aboutData[index].info.map((item, itemIndex) =>
                <div key={itemIndex} className={s.itemIndexContainer}>
                  <div className={s.title}>{item.title}</div>
                  <div className={s.dash}>-</div>
                  <div>{item.stage}</div>
                  <div className={s.icon}>
                    {item.icons?.map((icon, itemIndex) =>
                      <div key={itemIndex}>{icon}</div>)}
                  </div>
                </div>
              )
            }
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
