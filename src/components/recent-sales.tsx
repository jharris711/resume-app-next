import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  const date = new Date().toLocaleDateString();

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="size-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            To: Lockheed-Martin
          </p>
          <p className="text-muted-foreground text-sm">Created: {date}</p>
        </div>
        <div className="ml-auto font-medium">Submitted</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex size-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">To: Enron</p>
          <p className="text-muted-foreground text-sm">Created: {date}</p>
        </div>
        <div className="ml-auto font-medium">Created</div>
      </div>
      <div className="flex items-center">
        <Avatar className="size-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">To: Roblox</p>
          <p className="text-muted-foreground text-sm">Created: {date}</p>
        </div>
        <div className="ml-auto font-medium">Updated</div>
      </div>
      <div className="flex items-center">
        <Avatar className="size-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">To: Enron</p>
          <p className="text-muted-foreground text-sm">Created: {date}</p>
        </div>
        <div className="ml-auto font-medium">Updated</div>
      </div>
      <div className="flex items-center">
        <Avatar className="size-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">To: Enron</p>
          <p className="text-muted-foreground text-sm">Created: {date}</p>
        </div>
        <div className="ml-auto font-medium">Submitted</div>
      </div>
    </div>
  );
}
