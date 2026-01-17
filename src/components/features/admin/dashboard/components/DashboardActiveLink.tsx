"use client";

import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarProvider";

type ActiveLinkProps = {
  exact?: boolean;
} & React.ComponentProps<"a">;

export default function DashboardActiveLink({
  href = "",
  className,
  children,
}: ActiveLinkProps) {
  const { isExpanded } = useSidebar();
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-y-2.5 rounded-xl whitespace-nowrap",
        isActive && isExpanded && "bg-accent-foreground/30 text-accent-foreground! border-l-4 border-accent-foreground!",
        isActive && !isExpanded && "bg-secondary-foreground/30 text-accent-foreground!",
        !isActive && isExpanded && "hover:bg-secondary-foreground/10 text-secondary hover:text-accent-foreground!",
        !isActive && !isExpanded && "hover:bg-secondary-foreground/10 hover:text-accent-foreground/50! text-accent-foreground/20!",
        className
      )}
    >
      {children}
    </Link>
  );
}
