'use client';
import { usePathname } from 'next/navigation';
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Home, Settings, Target } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import { mockUser } from '@/lib/mock-data';
import { Logo } from '../logo';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/goals', label: 'Goals', icon: Target },
  { href: '/profile', label: 'Profile', icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-primary">Evergreeners</h2>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname.startsWith(item.href)}
                  tooltip={{
                    children: item.label,
                  }}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Separator />
      <SidebarFooter>
        <div className="flex items-center gap-3 p-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
            <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <p className="truncate font-medium">{mockUser.name}</p>
            <p className="truncate text-sm text-muted-foreground">@{mockUser.username}</p>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
