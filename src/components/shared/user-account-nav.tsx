'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import type { Database } from '@/lib/types/supabase';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserAvatar } from '@/components/shared/user-avatar';

type User = Database['public']['Tables']['Users']['Row'];

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'name' | 'email'>;
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={{ name: user.name || null }} className='h-8 w-8' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && (
              <p className='w-[200px] truncate text-sm text-muted-foreground'>
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/dashboard/billing'>Billing</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/dashboard/settings'>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer'
          onSelect={(event) => {
            event.preventDefault();
            redirect('/signout');
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
