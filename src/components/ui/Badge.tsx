interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'dark' | 'outline';
}

const variants = {
  accent: 'bg-accent text-ink',
  dark: 'bg-ink text-surface',
  outline: 'border border-ink/10 text-ink-muted',
};

export default function Badge({ children, variant = 'accent' }: BadgeProps) {
  return (
    <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 ${variants[variant]}`}>
      {children}
    </span>
  );
}
