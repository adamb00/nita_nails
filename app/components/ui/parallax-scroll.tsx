'use client';
import { useScroll, useTransform } from 'motion/react';
import { RefObject, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { MotionValue } from 'motion/react';

import { cn } from '../../lib/utils';

type ParallaxCard = {
  title: string;
  src: string;
};

export const ParallaxScroll = ({
  cards,
  className,
  scrollContainerRef,
}: {
  cards: ParallaxCard[];
  className?: string;
  scrollContainerRef?: RefObject<HTMLElement | null>;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsLargeScreen(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: gridRef,
    offset: ['start end', 'end start'],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -110]);

  const third = Math.ceil(cards.length / 3);

  const firstPart = cards.slice(0, third);
  const secondPart = cards.slice(third, 2 * third);
  const thirdPart = cards.slice(2 * third);

  const renderCard = (
    card: ParallaxCard,
    idx: number,
    offset: number,
    columnKey: string,
    translate: MotionValue<number>,
  ) => {
    const absoluteIndex = offset + idx;

    return (
      <motion.div
        style={{ y: translate }}
        key={`${columnKey}-${card.title}-${idx}`}
        onMouseEnter={() => setHovered(absoluteIndex)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          'group relative overflow-hidden rounded-xl',
          'h-64 sm:h-80 md:h-[34rem] w-full transition-all duration-300 ease-out',
          hovered !== null && hovered !== absoluteIndex && 'scale-[0.985] blur-[1px]',
        )}
      >
        <img
          src={card.src}
          className='absolute inset-0 h-full w-full object-cover'
          alt={card.title}
        />
        <div
          className={cn(
            'absolute inset-0 flex items-end bg-black/35 p-5 transition-opacity duration-300',
            hovered === absoluteIndex ? 'opacity-100' : 'opacity-0',
          )}
        >
          <p className='text-xl md:text-2xl font-medium text-white'>{card.title}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className={cn('items-start w-full', className)}>
      {!isLargeScreen ? (
        <div
          className='grid grid-cols-1 sm:grid-cols-2 items-start max-w-7xl mx-auto gap-5 sm:gap-6 md:gap-8 pt-8 md:pt-12 pb-24 md:pb-32 px-4 md:px-8'
          ref={gridRef}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={`grid-mobile-${card.title}-${idx}`}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                'group relative overflow-hidden rounded-xl',
                'h-64 sm:h-72 md:h-80 w-full transition-all duration-300 ease-out',
                hovered !== null && hovered !== idx && 'scale-[0.985] blur-[1px]',
              )}
            >
              <img
                src={card.src}
                className='absolute inset-0 h-full w-full object-cover'
                alt={card.title}
              />
              <div
                className={cn(
                  'absolute inset-0 flex items-end bg-black/35 p-5 transition-opacity duration-300',
                  hovered === idx ? 'opacity-100' : 'opacity-0',
                )}
              >
                <p className='text-xl md:text-2xl font-medium text-white'>
                  {card.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-8 md:gap-10 pt-8 md:pt-12 pb-32 md:pb-44 px-4 md:px-8 lg:px-10'
          ref={gridRef}
        >
          <div className='grid gap-10'>
            {firstPart.map((card, idx) =>
              renderCard(card, idx, 0, 'grid-1', translateFirst),
            )}
          </div>
          <div className='grid gap-10'>
            {secondPart.map((card, idx) =>
              renderCard(card, idx, firstPart.length, 'grid-2', translateSecond),
            )}
          </div>
          <div className='grid gap-10'>
            {thirdPart.map((card, idx) =>
              renderCard(
                card,
                idx,
                firstPart.length + secondPart.length,
                'grid-3',
                translateThird,
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
};
