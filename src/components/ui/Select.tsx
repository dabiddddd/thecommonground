import { forwardRef } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, className = '', ...props }, ref) => (
    <div>
      {label && (
        <label className="text-xs font-medium text-ink-muted uppercase tracking-wider mb-1 block">
          {label}
        </label>
      )}
      <select
        ref={ref}
        className={`w-full bg-surface border border-ink/10 px-3 py-2 text-sm text-ink focus:outline-none focus:border-accent transition-colors cursor-pointer ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
);

Select.displayName = 'Select';
export default Select;
