import Image from 'next/image';
import Logo from '../Logo';

export default function Navbar() {
  return (
    <div className='relative overflow-visible bg-white w-full min-h-20 sm:min-h-24 md:min-h-28 px-3 sm:px-6 md:px-10 py-2 sm:py-0 flex items-start justify-end'>
      <Logo />

      <div className='flex h-full items-center justify-end gap-2 sm:gap-3 md:gap-6 pl-16 sm:pl-24 md:pl-0 flex-wrap'>
        <div className=' hidden lg:flex items-center gap-1 sm:gap-2 md:gap-0 flex-wrap justify-end'>
          <a
            href='#about-me'
            className='text-pink px-2 sm:px-3 md:px-6 hover:shadow-2xl hover:shadow-pink rounded-2xl transition-colors duration-200 font-bold tracking-wide md:tracking-wider text-sm sm:text-base md:text-xl'
          >
            Rólam
          </a>
          <a
            href='#gallery'
            className='text-pink px-2 sm:px-3 md:px-6 hover:shadow-2xl hover:shadow-pink rounded-2xl transition-colors duration-200 font-bold tracking-wide md:tracking-wider text-sm sm:text-base md:text-xl'
          >
            Galéria
          </a>
          <a
            href='#services'
            className='text-pink px-2 sm:px-3 md:px-6 hover:shadow-2xl hover:shadow-pink rounded-2xl transition-colors duration-200 font-bold tracking-wide md:tracking-wider text-sm sm:text-base md:text-xl'
          >
            Szolgáltatásaim
          </a>
        </div>

        <a
          href='https://www.facebook.com/profile.php?id=100094092601827'
          target='_blank'
          rel='noreferrer'
          aria-label='Facebook'
          className='inline-flex items-center transition-transform hover:scale-105'
        >
          <Image
            src='/facebook.svg'
            alt='Facebook'
            width={92}
            height={20}
            className='h-5 sm:h-6 md:h-7 w-auto'
          />
        </a>

        <a
          href='https://www.tiktok.com/@Duhati91?fbclid=IwY2xjawRpr-hleHRuA2FlbQIxMABicmlkETJNemVIa1VnNWtEbWQwQ0VGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuqOEJ2ujlwq8Gj30BynU9EO6QuqPVSw1c_urUzGQ-dxRswxKgoF7YIwQX9T_aem_ZPL0AfhW9sS4McBknlJrvw'
          target='_blank'
          rel='noreferrer'
          aria-label='Tik Tok'
          className='inline-flex items-center transition-transform hover:scale-105'
        >
          <Image
            src='/tiktok.svg'
            alt='Tik Tok'
            width={92}
            height={20}
            className='h-5 sm:h-6 md:h-7 w-auto'
          />
        </a>

        <a
          href='https://www.notino.hu'
          target='_blank'
          rel='noreferrer'
          aria-label='Instagram'
          className='inline-flex items-center transition-transform hover:scale-105'
        >
          <Image
            src='/instagram.svg'
            alt='Instagram'
            width={92}
            height={20}
            className='h-5 sm:h-6 md:h-7 w-auto'
          />
        </a>

        <a
          href='https://www.notino.hu/szalonok/nita-nails/'
          target='_blank'
          rel='noreferrer'
          aria-label='Notino'
          className='inline-flex items-center transition-transform hover:scale-105'
        >
          <Image
            src='/notino.svg'
            alt='Notino'
            width={92}
            height={20}
            className='h-4 sm:h-5 w-auto'
          />
        </a>
      </div>
    </div>
  );
}
