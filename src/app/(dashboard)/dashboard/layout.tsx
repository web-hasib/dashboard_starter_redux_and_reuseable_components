"use client";

import {
  DashboardContainer,
  DashboardSidebar
} from "@/src/components/features/admin/dashboard/components";
import {
  DashboardMainContainer,
  DashboardSidebarContainer
} from "@/src/components/features/admin/dashboard/components/DashboardContainer";
import DashboardNavigation from "@/src/components/features/admin/dashboard/components/DashboardNavigation";
import SidebarProvider from "@/src/components/features/admin/dashboard/components/SidebarProvider";

import {
  Book,
  BookOpenCheck,
  ClipboardCheck,
  DollarSign,
  Inbox,
  LucideUser,
  Scroll
} from "lucide-react";
import { Suspense } from "react";

const navItems = [
  // {
  //   href: "/dashboard",
  //   name: "Overview",
  //   icon: <PanelsLeftBottom />,
  //   children: [],
  // },
  {
    href: "/dashboard",
    name: "Inbox",
    icon: <Inbox />,
    children: [],
  },
  {
    href: "/dashboard/payout",
    name: "Payout",
    icon: <DollarSign />,
    children: [],
  },
  {
    href: "/dashboard/audit-logs",
    name: "Audit Logs",
    icon: <Scroll />,
    children: [],
  },
  {
    href: "/dashboard/higher-sales-person",
    name: "Higher Sales Person",
    icon: <Book />,
    children: [],
  },
  
];

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    // <PrivateRoute>
    <SidebarProvider>
      <DashboardContainer>
        <DashboardSidebarContainer>
          <DashboardSidebar>

            <DashboardNavigation items={navItems} />
          </DashboardSidebar>
        </DashboardSidebarContainer>

        {/* <DashboardHeaderContainer>
          <DashboardHeader />
        </DashboardHeaderContainer> */}

        <DashboardMainContainer>
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <div className="p-4">{children}</div>
          </Suspense>
        </DashboardMainContainer>
      </DashboardContainer>
    {/* </PrivateRoute> */}
    </SidebarProvider>
  );
}
