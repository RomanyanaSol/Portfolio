import s from './style.module.css';
import Image from 'next/image';

const Bulb = () => {
  return (
    <div className={s.main}>
      <Image src={'/bulb.png'} width={256} height={392} alt='bulb' />
    </div>
  );
};

export default Bulb;
