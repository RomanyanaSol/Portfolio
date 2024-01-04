import Image from "next/image";
import s from './style.module.css';

const TopLeftImg = () => {
  return (
  <div >
    <Image src='/top-left-img.png' width={400} height={400} alt='' className={s.topLeft} priority="true"/>
  </div>
  )
};

export default TopLeftImg;
