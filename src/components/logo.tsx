import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-primary', className)}
    >
      <rect width="36" height="36" fill="currentColor" />
      <path
        d="M9 0V36M18 0V36M27 0V36M0 9H36M0 18H36M0 27H36"
        stroke="hsl(var(--background))"
        strokeWidth="2"
      />
    </svg>
  );
}
