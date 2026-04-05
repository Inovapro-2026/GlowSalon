import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export const Card = ({ children, className, hover = true, glow = false, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={cn(
        'glass rounded-3xl p-6 transition-all duration-300',
        glow && 'shadow-[0_0_30px_rgba(168,85,247,0.15)] border-primary/20',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
