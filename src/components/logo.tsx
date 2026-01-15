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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H6V6H0V0ZM6 0H12V6H6V0ZM12 0H18V6H12V0ZM18 6V0H24V6H18ZM30 0H24V6H30V0ZM36 0H30V6H36V0ZM0 6H6V12H0V6ZM12 6H6V12H12V6ZM12 6H18V12H12V6ZM18 12V6H24V12H18ZM30 6H24V12H30V6ZM36 6H30V12H36V6ZM0 12H6V18H0V12ZM12 12H6V18H12V12ZM12 12H18V18H12V12ZM18 18V12H24V18H18ZM30 12H24V18H30V12ZM36 12H30V18H36V12ZM0 18H6V24H0V18ZM12 18H6V24H12V18ZM12 18H18V24H12V18ZM18 24V18H24V24H18ZM30 18H24V24H30V18ZM36 18H30V24H36V18ZM0 24H6V30H0V24ZM12 24H6V30H12V24ZM12 24H18V30H12V24ZM18 30V24H24V30H18ZM30 24H24V30H30V24ZM36 24H30V30H36V24ZM0 30H6V36H0V30ZM12 30H6V36H12V30ZM12 30H18V36H12V30ZM18 36V30H24V36H18ZM30 30H24V36H30V30ZM36 30H30V36H36V30Z"
        fill="url(#paint0_linear_1_2)"
      />
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
    </svg>
  );
}
