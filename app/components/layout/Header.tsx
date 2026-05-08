import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='relative w-[90%] sm:w-[93%] md:w-[92%] max-w-6xl h-[78vh] sm:h-[85vh] md:h-[82vh] rounded-xl shadow-[0_22px_80px_rgba(38,20,20,0.25)] flex flex-col overflow-visible border border-white/50 backdrop-blur-sm'>
      <Navbar />

      <section className='relative grid h-full grid-cols-1 grid-rows-[60%_40%] md:grid-cols-5 md:grid-rows-1 bg-linear-to-br from-[#f3e3de] via-[#edd6cf] to-[#e5c5bf]'>
        <div className='relative flex items-center justify-center p-3 sm:p-4 md:p-10 md:col-span-2'>
          <div className='anim-fade-up anim-delay-2 relative h-[94%] w-[94%] sm:h-[96%] sm:w-[96%] md:h-[88%] md:w-[88%] max-w-none md:max-w-96 overflow-hidden rounded-[42%] border border-[#b87675]/70 bg-[#d8c4bf] shadow-[0_18px_34px_rgba(88,42,42,0.18)]'>
            <Image
              src='/hero-generated.png'
              alt='Nita Nails hero'
              fill
              priority
              className='object-cover object-center'
              sizes='(max-width: 640px) 82vw, (max-width: 768px) 70vw, 36vw'
            />
          </div>
        </div>

        <div className='relative flex items-center px-5 py-3 sm:px-7 sm:py-5 md:px-14 md:py-10 text-[#2f1b1b] md:col-span-3'>
          <div className='anim-fade-up anim-delay-1 w-full max-w-170 border-l-4 border-[#5f3434] pl-4 sm:pl-5 md:pl-8'>
            <p className='font-vani text-3xl sm:text-4xl md:text-7xl leading-[1.1] md:leading-[1.2] text-left'>
              Szépség,
            </p>
            <p className='mt-1 sm:mt-2 font-vani text-xs sm:text-sm md:text-3xl tracking-[0.12em] sm:tracking-[0.14em] md:tracking-[0.18em] uppercase text-[#7a5050]'>
              ami prémium gondoskodással
            </p>
            <p className='mt-1 sm:mt-2 md:mt-3 font-vani text-3xl sm:text-4xl md:text-7xl leading-[1.1] md:leading-[1.2] text-left'>
              életre kel.
            </p>
          </div>
        </div>
      </section>

      <div className='anim-fade-up anim-delay-3 pointer-events-none absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#6f4545]'>
        <span className='text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em]'>
          Görgess tovább
        </span>
        <span className='anim-hint text-base sm:text-lg md:text-xl leading-none'>↓</span>
      </div>
    </div>
  );
}
