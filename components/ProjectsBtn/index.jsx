import Image from "next/image";
import s from './style.module.css';
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className={s.page}>
      <div className={s.group}>
        <Link href={'./work'} className={s.link}>
          <Image src={'/rounded-text.png'} width={141} height={148} alt="" className={s.animation} />
          <HiArrowRight className={s.icon} />
        </Link>
      </div>
    </div>
  )
};

export default ProjectsBtn;
