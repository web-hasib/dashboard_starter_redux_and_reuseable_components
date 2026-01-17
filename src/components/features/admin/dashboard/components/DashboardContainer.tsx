"use client";
import { useSidebar } from "./SidebarProvider";
import { cn } from "@/src/lib/utils";

type DashboardContainerProps = {
  children: React.ReactNode;
};

type DashboardSidebarProps = {
  children: React.ReactNode;
};

type DashboardMainProps = {
  children: React.ReactNode;
};

export default function DashboardContainer({
  children,
}: DashboardContainerProps) {
  const { isCollapsedSidebar } = useSidebar();
  const sidebarWidth = isCollapsedSidebar
    ? "--_sidebar-collapsed"
    : "--_sidebar-expanded";
  return (
    <div
      style={
        {
          "--_sidebar-spacing": "1rem",
          "--_sidebar-collapsed": "4rem",
          "--_sidebar-expanded": "20rem",
          "--_sidebar-icon-container": "2rem",
          "--_sidebar-icon-sm": "1.5rem",
          "--_sidebar-icon-lg": "1.7rem",
          gridTemplateColumns: `var(${sidebarWidth}) 1fr`,
          gridTemplateRows: "auto 1fr",
          gridTemplateAreas: `
            'sidebar header'
            'sidebar main'
          `,
        } as React.CSSProperties
      }
      className={cn(
        `grid transition-[grid] duration-200 bg-black h-screen`
      )}
    >
      {children}
    </div>
  );
}

export function DashboardSidebarContainer({ children }: DashboardSidebarProps) {
  return (
    <div className="[grid-area:sidebar] print:hidden overflow-y-auto overflow-x-clip">
      {children}
    </div>
  );
}

export function DashboardHeaderContainer({ children }: DashboardSidebarProps) {
  return (
    <div className="[grid-area:header] bg-[#fafaff] shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
}

export function DashboardMainContainer({ children }: DashboardMainProps) {
  return (
    <div className="[grid-area:main] bg-[#1d1d1d] overflow-y-auto overflow-x-auto">
      {children}
    </div>
  );
}
