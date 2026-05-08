'use client';

import AboutMeSection from './components/layout/AboutMeSection';
import FooterSection from './components/layout/FooterSection';
import HeaderSection from './components/layout/HeaderSection';
import ServicesSection from './components/layout/ServicesSection';

export default function Home() {
  return (
    <main className='relative h-screen w-full overflow-y-scroll snap-y snap-mandatory'>
      <div
        aria-hidden
        className='absolute inset-x-0 top-0 h-[200vh] -z-10 flex'
      >
        <div className='w-1/2 bg-linear-to-b from-[#bf6d6c] to-[#f7ebe7]' />
        <div className='w-1/2 bg-linear-to-b from-white to-[#f7ebe7]' />
      </div>

      <HeaderSection />
      <AboutMeSection />
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
