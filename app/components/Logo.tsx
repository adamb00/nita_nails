import Image from 'next/image';
import logo from '@/public/Logo_3.png';

export default function Logo() {
  return (
    <Image
      src={logo}
      alt='Logo'
      className='absolute z-[999] -left-6 -top-14 sm:-left-8 sm:-top-16 xl:-left-21.5 xl:-top-19.5 w-40 h-40 sm:w-56 sm:h-56 md:w-52 md:h-52'
      // className='absolute z-[999] -left-6 -top-14 sm:-left-8 sm:-top-16 xl:-left-0 xl:-top-14.5 w-40 h-40 sm:w-56 sm:h-56 md:w-44 md:h-44'
      sizes='(min-width: 1280px) 420px, (min-width: 1024px) 360px, (min-width: 768px) 300px, 220px'
      priority={false}
    />
  );
}
