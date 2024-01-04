import s from './style.module.css';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className={s.container}>
      <Image
        src='/Foto.png'
        width={669}
        height={798}
        alt=''
        className={s.img}
        quality={100}
        priority={true}
      />
    </div>
  )
};

export default Avatar;
