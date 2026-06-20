import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => (
    <div>
      {label && (
        <label className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-1 block">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`w-full bg-surface border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-colors ${className}`}
        {...props}
      />
    </div>
  )
);

Input.displayName = 'Input';
export default Input;
