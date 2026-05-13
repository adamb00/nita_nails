import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src='/logo.png'
      alt='Logo'
      width={224}
      height={224}
      className='fixed z-999 -left-6 -top-14 sm:-left-8 sm:-top-16 xl:-left-21.5 xl:-top-19.5 w-40 h-40 sm:w-56 sm:h-56 md:w-52 md:h-52'
      sizes='(min-width: 1280px) 420px, (min-width: 1024px) 360px, (min-width: 768px) 300px, 220px'
      priority={false}
    />
  );
}
