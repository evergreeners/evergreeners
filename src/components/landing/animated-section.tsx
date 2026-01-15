'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function AnimatedSection({ children, className, as = 'div' }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Comp = as;

  return (
    <Comp
      ref={ref}
      className={cn(className)}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      {children}
    </Comp>
  );
}
