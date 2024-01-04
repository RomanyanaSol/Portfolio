import s from './style.module.css';
import Nav from '../Nav';
import Header from '../Header';
import TopLeftImg from '../TopLeftImg';

const Layout = ({children}) => {
  return (
  <div className={s.page}>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>
  )
};

export default Layout;
