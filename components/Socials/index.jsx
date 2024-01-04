import s from './style.module.css';
import Link from 'next/link';
import { RiYoutubeLine, RiLinkedinBoxLine, RiInstagramLine, RiFacebookBoxLine, RiGithubLine, RiPinterestLine } from 'react-icons/ri';


const Socials = () => {
  return (
    <div className={s.container}>
      <Link href={'https://www.linkedin.com/in/rsolovey/'} target='blank' className={s.icons} >
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://www.youtube.com/c/SvetlanaSolovey'} target='blank' className={s.icons}>
        <RiYoutubeLine />
      </Link>
      <Link href={'https://www.facebook.com/SoloveyRomanio/'} target='blank' className={s.icons}>
        <RiFacebookBoxLine />
      </Link>
      <Link href={'https://github.com/RomanyanaSol'} target='blank' className={s.icons}>
        <RiGithubLine />
      </Link>
      <Link href={'/'} className={s.icons}>
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
