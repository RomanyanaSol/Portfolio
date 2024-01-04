import s from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../Socials';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.linkSocials}>
          <Link href={'/'}>
          <Image src={'/logo.png'} width={270} height={34} alt='logo' priority={true} />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
