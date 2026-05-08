import { useEffect, useState } from 'react';
import Header from './Header';

export default function HeaderSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className='relative h-screen w-full overflow-hidden snap-start shrink-0'>
      <div className='absolute inset-0 flex'>
        <div className='h-full w-1/2 text-white font-vani font-bold text-right mt-3 sm:mt-4 px-2 text-2xl sm:text-3xl md:text-4xl'>
          <span
            className={`inline-block border-b-4 border-white pb-0 leading-none transition-all duration-1200 ease-out ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`}
          >
            Nita
          </span>
        </div>
        <div className='h-full w-1/2 text-[#bf6d6c] font-vani font-bold px-2 py-6 sm:py-8 md:py-10 text-2xl sm:text-3xl md:text-4xl'>
          <span
            className={`inline-block transition-all duration-1200 ease-out delay-200 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'}`}
          >
            Nails
          </span>
        </div>
      </div>

      <div className='relative z-10 flex h-full w-full items-center justify-center px-3 sm:px-4'>
        <Header />
      </div>
    </section>
  );
}
