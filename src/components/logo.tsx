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
      <defs>
        <linearGradient
          id="paint0_linear_1_2"
          x1="0"
          y1="0"
          x2="36"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" fill="url(#paint0_linear_1_2)" mask="url(#mask0_1_2)" />
      <mask id="mask0_1_2">
        <g fill="white">
          <rect x="0" y="0" width="5" height="5" />
          <rect x="6" y="0" width="5" height="5" />
          <rect x="12" y="0" width="5" height="5" />
          <rect x="18" y="0" width="5" height="5" />
          <rect x="24" y="0" width="5" height="5" />
          <rect x="30" y="0" width="5" height="5" />

          <rect x="0" y="6" width="5" height="5" />
          <rect x="6" y="6" width="5" height="5" />
          <rect x="12" y="6" width="5" height="5" />
          <rect x="18" y="6" width="5" height="5" />
          <rect x="24" y="6" width="5" height="5" />
          <rect x="30" y="6" width="5" height="5" />

          <rect x="0" y="12" width="5" height="5" />
          <rect x="6" y="12" width="5" height="5" />
          <rect x="12" y="12" width="5" height="5" />
          <rect x="18" y="12" width="5" height="5" />
          <rect x="24" y="12" width="5" height="5" />
          <rect x="30" y="12" width="5" height="5" />
          
          <rect x="0" y="18" width="5" height="5" />
          <rect x="6" y="18" width="5" height="5" />
          <rect x="12" y="18" width="5" height="5" />
          <rect x="18" y="18" width="5" height="5" />
          <rect x="24" y="18" width="5" height="5" />
          <rect x="30" y="18" width="5" height="5" />

          <rect x="0" y="24" width="5" height="5" />
          <rect x="6" y="24" width="5" height="5" />
          <rect x="12" y="24" width="5" height="5" />
          <rect x="18" y="24" width="5" height="5" />
          <rect x="24" y="24" width="5" height="5" />
          <rect x="30" y="24" width="5" height="5" />

          <rect x="0" y="30" width="5" height="5" />
          <rect x="6" y="30" width="5" height="5" />
          <rect x="12" y="30" width="5" height="5" />
          <rect x="18" y="30" width="5" height="5" />
          <rect x="24" y="30" width="5" height="5" />
          <rect x="30" y="30" width="5" height="5" />
        </g>
      </mask>
    </svg>
  );
}