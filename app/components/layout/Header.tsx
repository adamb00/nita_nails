import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className='relative w-[90%] sm:w-[93%] md:w-[92%] max-w-7xl h-[80vh] sm:h-[85vh] md:h-[82vh] rounded-xl shadow-[0_22px_80px_rgba(38,20,20,0.25)] flex flex-col overflow-visible backdrop-blur-sm'>
      <Navbar />

      <section className='relative rounded-b-xl grid h-full grid-cols-1 grid-rows-[52%_48%] lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-1 bg-linear-to-br from-pink to-white'>
        <div className='relative flex items-center justify-center p-1.5 sm:p-4 md:p-8 lg:p-10'>
          <div className='anim-fade-up anim-delay-2 relative inline-flex overflow-hidden rounded-2xl border border-pink/70 bg-pastel shadow-[0_18px_34px_rgba(88,42,42,0.18)]'>
            <Image
              src='/nita_nails.jpg'
              alt='Nita Nails hero'
              width={400}
              height={100}
              priority
              quality={100}
              className='h-auto w-auto max-h-[46vh] sm:max-h-[62vh] max-w-[92vw] object-contain object-center'
            />
          </div>
        </div>

        <div className='relative flex text-center md:text-left items-start justify-center md:justify-start sm:items-center px-4 py-1 sm:px-7 sm:py-5 md:px-8 lg:px-14 md:py-8 text-[#2f1b1b]'>
          <div className='anim-fade-up anim-delay-1 w-full max-w-[30rem] lg:max-w-[36rem] border-l-4 border-pink/70 pl-4 sm:pl-5 md:pl-6'>
            <p className='font-vani text-5xl sm:text-6xl md:text-5xl lg:text-7xl leading-[1.06] md:leading-[1.12] text-center md:text-left'>
              Szépség,
            </p>
            <p className='mt-1 sm:mt-2 font-vani text-sm sm:text-base md:text-lg lg:text-3xl tracking-[0.08em] md:tracking-[0.1em] lg:tracking-[0.14em] uppercase text-dark'>
              ami prémium gondoskodással
            </p>
            <p className='mt-2 sm:mt-3 md:mt-2 font-vani text-4xl sm:text-5xl md:text-5xl lg:text-7xl leading-[1.06] md:leading-[1.12] text-center md:text-left'>
              életre kel.
            </p>
          </div>
        </div>
      </section>

      <div className='anim-fade-up anim-delay-3 pointer-events-none absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-brown'>
        <span className='text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.16em] sm:tracking-[0.2em]'>
          Görgess tovább
        </span>
        <span className='anim-hint text-base sm:text-lg md:text-xl leading-none'>
          ↓
        </span>
      </div>
    </div>
  );
}
