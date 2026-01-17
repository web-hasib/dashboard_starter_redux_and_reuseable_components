"use client";

import { ChevronsRight } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/src/lib/utils";
import { useSidebar } from "./SidebarProvider";
import DashboardLogoutButton from "./DashboardFooter";
import Image from "next/image";
import Link from "next/link";

type DashboardSidebarProps = {
  children: React.ReactNode;
};

export default function DashboardSidebar({ children }: DashboardSidebarProps) {
  const { isCollapsedSidebar } = useSidebar();

  return (
    <motion.nav
      className={cn(
        "h-full flex flex-col gap-2 z-50 sticky top-0 whitespace-nowrap px-4 shadow-xs  text-base bg-primary"
      )}
      style={{
        width: isCollapsedSidebar
          ? "var(--_sidebar-collapsed)"
          : "var(--_sidebar-expanded)",
      }}
      animate={{
        width: isCollapsedSidebar
          ? "var(--_sidebar-collapsed)"
          : "var(--_sidebar-expanded)",
      }}
    >
      <div className="absolute right-0 top-0 z-10">
        <SidebarToggleButton />
      </div>
      <SidebarHeader />

     <div className="flex-1 space-y-(--_sidebar-spacing) -mr-4 pr-4">
  {children}
</div>

<div className="border-t border-white/10 bg-white rounded-md pt-1 mt-2">
  <DashboardLogoutButton />
</div>

    </motion.nav>
  );
}

function SidebarHeader() {
  const { isExpanded } = useSidebar();
  return (
    <div className="py-16 px-5 -mx-5 flex items-center  justify-center h-16 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-2"
      >
        {!isExpanded && (
          <Link href={"/"}>
            <Image src="/Logo.svg" alt="logo" width={100} height={80} />
          </Link>
        )}

        {isExpanded && (
          <Link href={"/"} className="flex justify-center items-center">
            <Image src="/Logo.svg" alt="logo" width={180} height={150} />
          </Link>
        )}
      </motion.div>
    </div>
  );
}

export function SidebarToggleButton() {
  const { isExpanded, toggleSidebarCollapse } = useSidebar();
  return (
    <button className="p-1 cursor-pointer" onClick={toggleSidebarCollapse}>
      <ChevronsRight
        className={cn(
          "size-4 text-gray-500",
          isExpanded ? "-scale-100" : "scale-100"
        )}
      />
    </button>
  );
}
