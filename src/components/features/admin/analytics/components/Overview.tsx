import React from "react";
import { ShoppingCart, DollarSign, Percent, Users } from "lucide-react";

// Types
type StatCardData = {
  id: string;
  label: string;
  value: string | number;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
};

type OverviewStatsProps = {
  data?: StatCardData[];
};

// Server Component (simulated with default export)
// In your actual Next.js app, this would be an async server component
export default function OverviewStats({ data }: OverviewStatsProps) {
  // This would come from your server action/database
  const statsData: StatCardData[] = data || [
    {
      id: "total-orders",
      label: "Total Orders",
      value: "1200",
      icon: <ShoppingCart className="w-5 h-5" />,
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: "total-order-value",
      label: "Total Order Value",
      value: "220000",
      icon: <DollarSign className="w-5 h-5" />,
      iconBgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: "total-commission",
      label: "Total Commission",
      value: "55000",
      icon: <Percent className="w-5 h-5" />,
      iconBgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: "service-providers",
      label: "Service Provider",
      value: "1000",
      icon: <Users className="w-5 h-5" />,
      iconBgColor: "bg-slate-50",
      iconColor: "text-slate-600",
    },
    {
      id: "total-commission-2",
      label: "Gross Income",
      value: "55000",
      icon: <Percent className="w-5 h-5" />,
      iconBgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: "service-providers-3",
      label: "Losses",
      value: "1000",
      icon: <Users className="w-5 h-5" />,
      iconBgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section className="w-full @container space-y-6">
      {/* Stats Grid - Container Query breakpoints */}
      <div className="grid grid-cols-1 @sm:grid-cols-2 @4xl:grid-cols-4 gap-3 @sm:gap-4 @lg:gap-5">
        {statsData.slice(0, 4).map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 @sm:grid-cols-2 gap-3 @lg:gap-5">
        {statsData.slice(4).map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}

// Client Component for individual stat card
type StatCardProps = {
  stat: StatCardData;
};

function StatCard({ stat }: StatCardProps) {
  return (
    <article
      className="bg-white rounded-lg @sm:rounded-xl px-4 py-5 @sm:px-5 @sm:py-6 @lg:px-6 @lg:py-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
      aria-label={`${stat.label}: ${stat.value}`}
    >
      <div className="flex items-start justify-between gap-3">
        {/* Value and Label */}
        <div className="flex-1 min-w-0">
          <p className="text-xl @sm:text-2xl @lg:text-3xl font-bold text-gray-900 mb-1 @sm:mb-2 truncate">
            {typeof stat.value === "number"
              ? stat.value.toLocaleString()
              : stat.value}
          </p>
          <p className="text-xs @sm:text-sm font-medium text-gray-600 line-clamp-2">
            {stat.label}
          </p>
        </div>

        {/* Icon */}
        <div
          className={`${stat.iconBgColor} ${stat.iconColor} p-2 @sm:p-2.5 @lg:p-3 rounded-lg shrink-0`}
          aria-hidden="true"
        >
          {stat.icon}
        </div>
      </div>
    </article>
  );
}

// Example usage with server action (for your Next.js app)
/*
// app/dashboard/page.tsx
import { getOverviewStats } from "@/lib/actions/stats";

export default async function DashboardPage() {
  const stats = await getOverviewStats();
  
  return (
    <div className="container mx-auto p-6">
      <OverviewStats data={stats} />
    </div>
  );
}

// lib/actions/stats.ts
"use server";

export async function getOverviewStats() {
  // Your database query here
  const data = await db.query.stats.findMany();
  
  return [
    {
      id: "total-orders",
      label: "Total Orders",
      value: data.totalOrders,
      icon: <ShoppingCart size={20} />,
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    // ... other stats
  ];
}
*/
