'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const BOOKING_URL = 'https://www.notino.hu/szalonok/nita-nails/';

const services = [
  'Japán manikűr',
  'Műköröm építés',
  'Erősített gél lakkozás',
  'Esztétikai pedikűr',
  'Gyógypedikűr',
  'Géllakk lábra',
];

const paragraphs = [
  'Műkörömépítő és speciális lábápoló vagyok a hódmezővásárhelyi Nita Nails szalonból.',
  'Szalonomban olyan átfogó kéz- és lábápolási szolgáltatásokat nyújtok, amelyek révén vendégeim a körömápolás minden területén professzionális ellátásban részesülhetnek. Munkám során mindig arra törekszem, hogy ne csak a szépség, hanem az egészség szempontjai is érvényesüljenek minden kezelés során, hiszen a szép körmök alapja mindig az egészség.',
  'A manikűr részeként japán manikűrt, műköröm építést és erősített gél lakkozást egyaránt vállalok, hogy a legkülönfélébb igényeket is ki tudjam elégíteni.',
  'A lábápolás területén az esztétikai pedikűr során nemcsak a körmök szépségére koncentrálok, hanem a lábfej teljes megjelenésének javítására is. A géllakk alkalmazása a lábakon például olyan hosszan tartó eredményt biztosít, amely még a nyári időszakban is kifogástalan marad, a gyógypedikűr pedig azoknak nyújt segítséget, akik speciális problémákkal küzdenek.',
];

export default function AboutMeSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -15% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id='about-me'
      className='relative h-screen w-full max-w-8xl snap-start shrink-0 overflow-y-auto'
    >
      <div className='relative z-10 mx-auto grid min-h-full w-full max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-16 md:grid-cols-5 items-center justify-center'>
        <div
          className={`relative md:col-span-2 transition-all duration-1000 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}
        >
          <div className='sticky top-4 sm:top-6 md:top-10'>
            <div className='relative h-64 sm:h-80 md:h-130 overflow-hidden rounded-2xl'>
              <Image
                src='/hero-generated.png'
                alt='Vargáné Konkoly Anita'
                fill
                className='object-cover object-center'
                sizes='(max-width: 640px) 92vw, (max-width: 768px) 80vw, 35vw'
              />
            </div>

            <div className='mt-4 sm:mt-5 flex flex-wrap gap-2'>
              {services.map((service) => (
                <span
                  key={service}
                  className='rounded-full border border-brown bg-white/70 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs md:text-sm text-brown'
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`md:col-span-3 text-[#4a2a2a] max-h-fit  px-8 rounded-xl transition-all duration-1000 ease-out delay-200 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'}`}
        >
          <p className='font-vani text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#8f6060]'>
            Rólam
          </p>
          <h2 className='mt-2 font-vani text-3xl sm:text-4xl md:text-6xl text-[#5b3333] leading-[1.06]'>
            Vargáné Konkoly Anita
          </h2>

          <div className='mt-5 sm:mt-6 md:mt-8 space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg leading-7 sm:leading-8'>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`transition-all duration-1000 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 180}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href={BOOKING_URL}
            target='_blank'
            rel='noreferrer'
            className='mt-6 sm:mt-8 inline-flex w-fit rounded-full border border-white bg-pink px-5 sm:px-6 py-2 text-sm sm:text-base text-white transition-colors hover:bg-yellow hover:border-brown hover:text-brown'
          >
            Időpontfoglalás
          </a>
        </div>
      </div>
    </section>
  );
}
