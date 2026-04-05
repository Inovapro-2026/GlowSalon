import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(124,58,237,0.3)]',
      secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)]',
      outline: 'border border-white/10 bg-transparent hover:bg-white/5 text-white',
      ghost: 'bg-transparent hover:bg-white/5 text-white/70 hover:text-white',
      neon: 'bg-accent text-black shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] font-bold',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2.5',
      lg: 'px-8 py-4 text-lg font-semibold',
      icon: 'p-2',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {isLoading ? (
          <div className={cn(
            "mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent",
            (variant === 'primary' || variant === 'secondary' || variant === 'neon') ? "border-white/30 border-t-white" : "border-primary/30 border-t-primary"
          )} />
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
