'use client';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '../theme-toggle';
import { usePathname } from 'next/navigation';
import { Home, Settings, Target, Shield } from 'lucide-react';

const pathToTitle: { [key: string]: { title: string, icon: React.ReactNode } } = {
  '/dashboard': { title: 'Dashboard', icon: <Home className="h-5 w-5" /> },
  '/goals': { title: 'Goals', icon: <Target className="h-5 w-5" /> },
  '/profile': { title: 'Profile', icon: <Settings className="h-5 w-5" /> },
  '/admin': { title: 'Admin', icon: <Shield className="h-5 w-5" /> },
};

export function Header() {
  const pathname = usePathname();
  const { title, icon } = pathToTitle[pathname] || { title: '', icon: null };
  
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <div className="hidden items-center gap-2 font-semibold md:flex">
          {icon}
          <span>{title}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
