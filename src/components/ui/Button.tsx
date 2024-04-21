import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const buttonVariants = cva(
  'active:scale-95 inline-flex item-center justify-center rounded-md text-sm font-medium transition-color focuse:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-900',
        ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-11 px-8',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button: FC<ButtonProps> = ({ className, children, variant, isLoading, size, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} disabled={isLoading} {...props}>
      {isLoading ? <Loader2 className='mr-2 w-4 animate-spin' /> : children}
      {children}
    </button>
  );
};

export default Button;

