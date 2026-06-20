import { forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'dark' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-ink hover:bg-accent-strong hover:shadow-cta',
  secondary: 'border border-paper/20 text-paper hover:border-accent hover:text-accent',
  dark: 'bg-ink text-surface hover:bg-accent hover:text-ink',
  ghost: 'border border-ink/15 text-ink hover:border-accent hover:text-accent',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[10px]',
  md: 'px-8 py-3.5 text-xs',
  lg: 'px-10 py-4 text-xs',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'dark', size = 'md', className = '', children, ...props }, ref) => (
    <button
      ref={ref}
      className={`font-semibold uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';
export default Button;
