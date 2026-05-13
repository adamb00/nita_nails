'use client';

import { useRef } from 'react';
import { ParallaxScroll } from '../ui/parallax-scroll';

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cards = [
    { title: 'Szalon 1', src: '/saloon/img_1.jpg' },
    { title: 'Szalon 2', src: '/saloon/img_2.jpg' },
    { title: 'Szalon 3', src: '/saloon/img_3.jpg' },
    { title: 'Szalon 4', src: '/saloon/img_4.jpg' },
    { title: 'Szalon 5', src: '/saloon/img_5.jpg' },
    { title: 'Szalon 6', src: '/saloon/img_6.jpg' },
    { title: 'Szalon 7', src: '/saloon/img_7.jpg' },
    { title: 'Szalon 8', src: '/saloon/img_8.jpg' },
  ];

  return (
    <section
      id='gallery'
      ref={sectionRef}
      className='relative min-h-screen w-full md:h-screen snap-start shrink-0 overflow-y-visible md:overflow-y-auto bg-white'
    >
      <ParallaxScroll
        cards={cards}
        className='w-full'
        scrollContainerRef={sectionRef}
      />
    </section>
  );
}
