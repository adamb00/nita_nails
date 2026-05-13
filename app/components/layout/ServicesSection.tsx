'use client';

import { useEffect, useMemo, useState } from 'react';
import servicesData from '@/public/services.json';

const BOOKING_URL = 'https://www.notino.hu/szalonok/nita-nails/';

type ServicePrice = number | { min: number; max: number };

type Service = {
  name: string;
  description: string;
  duration: string;
  price: ServicePrice;
};

type ServiceCategory = {
  category: string;
  services: Service[];
};

function formatDuration(duration: string) {
  return duration
    .replace(/\s*-\s*/g, ' - ')
    .replace(/(\d+)\s*h/g, '$1 óra')
    .replace(/(\d+)\s*m/g, '$1 perc')
    .trim();
}

function formatPrice(price: ServicePrice) {
  if (typeof price === 'number') {
    return price === 0 ? 'Ingyenes' : `${price.toLocaleString('hu-HU')} Ft`;
  }
  return `${price.min.toLocaleString('hu-HU')} - ${price.max.toLocaleString('hu-HU')} Ft`;
}

export default function ServicesSection() {
  const categories = servicesData as ServiceCategory[];
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.category ?? '',
  );
  const [animationRun, setAnimationRun] = useState(0);

  useEffect(() => {
    setAnimationRun((prev) => prev + 1);
  }, [activeCategory]);

  const active = useMemo(
    () =>
      categories.find((c) => c.category === activeCategory) ?? categories[0],
    [categories, activeCategory],
  );

  return (
    <section className='relative -mt-px h-screen w-screen snap-start shrink-0 overflow-y-auto bg-linear-to-b to-pastel from-[white] px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12'>
      <div className='mx-auto w-full max-w-7xl'>
        <p className='font-vani text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.22em] text-brown'>
          Nita Nails
        </p>
        <h2 className='mt-2 font-vani text-3xl sm:text-4xl md:text-6xl text-[#553535] leading-tight'>
          Szolgáltatások
        </h2>

        <div className='mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4'>
          <div className='flex gap-2 sm:gap-3 overflow-x-auto pb-2'>
            {categories.map((category) => {
              const isActive = category.category === active?.category;
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`shrink-0 rounded-full border px-3 sm:px-4 py-2 text-xs sm:text-sm transition-colors ${
                    isActive
                      ? 'border-brown bg-brown text-white'
                      : 'border-pastel bg-white text-brown hover:border-brown'
                  }`}
                >
                  {category.category}
                </button>
              );
            })}
          </div>

          <a
            href={BOOKING_URL}
            target='_blank'
            rel='noreferrer'
            className='hidden md:inline-flex shrink-0 rounded-full border border-brown bg-brown px-5 py-2 text-white transition-colors hover:bg-pastel hover:border-pastel'
          >
            Időpontfoglalás
          </a>
        </div>

        <div className='mt-5 sm:mt-7 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {active?.services.map((service, index) => (
            <article
              key={`${active.category}-${service.name}-${animationRun}`}
              className='rounded-3xl border border-[#d7c3bb] bg-[#fffaf7] p-4 sm:p-5 shadow-[0_12px_28px_rgba(62,33,33,0.09)] transition-transform duration-300 hover:scale-[1.03]'
              style={{
                opacity: 0,
                animation: `fadeUpSoft 0.9s ease-out ${index * 110}ms both`,
              }}
            >
              <p className='text-[#3f2424] font-semibold text-base sm:text-lg leading-snug'>
                {service.name}
              </p>

              {service.description ? (
                <p className='mt-2 text-[#795858] text-xs sm:text-sm leading-5 sm:leading-6'>
                  {service.description}
                </p>
              ) : (
                <p className='mt-2 text-[#a18484] text-xs sm:text-sm leading-5 sm:leading-6'>
                  Leírás hamarosan.
                </p>
              )}

              <div className='mt-3 sm:mt-4 flex items-center justify-between gap-3'>
                <span className='rounded-full bg-[#f5e6e1] px-3 py-1 text-[11px] sm:text-xs text-[#7a5454]'>
                  {formatDuration(service.duration)}
                </span>
                <span className='text-[#5b3333] font-bold text-sm sm:text-base whitespace-nowrap'>
                  {formatPrice(service.price)}
                </span>
              </div>
            </article>
          ))}
        </div>

        <a
          href={BOOKING_URL}
          target='_blank'
          rel='noreferrer'
          className='mt-5 sm:mt-6 inline-flex md:hidden rounded-full border border-brown bg-brown px-5 py-2 text-white transition-colors hover:bg-pastel hover:border-pastel'
        >
          Időpontfoglalás
        </a>
      </div>
    </section>
  );
}
