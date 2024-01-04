import Image from "next/image";
import s from './style.module.css';

const Circles = () => {
  return (
    <div className={s.container}>
      <Image src={'/circles.png'} width={260} height={260} alt='' className={s.img} />
    </div>
  );
};

export default Circles;
