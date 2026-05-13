'use client';

import AboutMeSection from './components/layout/AboutMeSection';
import FooterSection from './components/layout/FooterSection';
import HeaderSection from './components/layout/HeaderSection';
import ServicesSection from './components/layout/ServicesSection';

export default function Home() {
  return (
    <main className='relative h-screen w-full overflow-y-scroll snap-y snap-proximity scroll-smooth'>
      <div
        aria-hidden
        className='absolute inset-x-0 top-0 h-[200vh] -z-10 flex'
      >
        <div className='w-1/2 bg-linear-to-b from-pink to-white' />
        <div className='w-1/2 bg-linear-to-b from-white to-white' />
      </div>

      <HeaderSection />
      <AboutMeSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
