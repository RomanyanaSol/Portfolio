import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope, } from 'react-icons/hi2';

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  { name: 'testimonials', path: '/testimonials', icon: <HiChatBubbleBottomCenterText /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> }
];

import Link from 'next/link';
import { useRouter } from 'next/router';
import s from './style.module.css';

const Nav = () => {

  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className={s.nav}>
      <div className={s.navData}>
        {navData.map((link, index) => (
          <Link href={link.path} key={index} className={`${link.path === pathname ? s.accent : s.link}`}>
            <div className={s.group}>
              <div className={s.tooltipMain}>
                <div className={s.tooltipCont}>
                  <div className={s.tooltip}>{link.name}</div>
                  <div className={s.triangle}></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
