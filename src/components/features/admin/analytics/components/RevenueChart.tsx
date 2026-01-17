"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { RevenueStats } from "../types";
import { TimeRangeSelector } from "./TimeRangeSelector";
import { LegendToggle } from "./LegendToggle";
import MetricsCard from "./MetricsCard";
import { CHART_COLORS } from "../constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import CustomTooltip from "./CustomTooltip";

type RevenueChartProps = {
  initialData: RevenueStats;
};

export function RevenueChart({ initialData }: RevenueChartProps) {
  const [data] = useState(initialData);
  const [activeFilters, setActiveFilters] = useState({
    serviceProvider: true,
    admin: true,
  });
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const toggleFilter = (key: "serviceProvider" | "admin") => {
    setActiveFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const formatYAxis = (value: number) => {
    if (value >= 100000) return `${(value / 1000).toFixed(0)}k`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
    return value.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-900">Revenue Stats</h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 text-white bg-primary-500 hover:bg-primary-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium text-gray-700 min-w-[60px] text-center">
              Weekly
            </span>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 text-white bg-primary-500 hover:bg-primary-600"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <TimeRangeSelector currentRange="weekly" />
        </div>

        <LegendToggle filters={activeFilters} onToggle={toggleFilter} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data.data}
              margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="day"
                tick={{ fill: "#6B7280", fontSize: 12 }}
                axisLine={{ stroke: "#E5E7EB" }}
              />
              <YAxis
                tick={{ fill: "#6B7280", fontSize: 12 }}
                axisLine={{ stroke: "#E5E7EB" }}
                tickFormatter={formatYAxis}
                domain={[0, 100000]}
                ticks={[0, 1000, 10000, 50000, 100000]}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />

              {activeFilters.serviceProvider && (
                <Bar
                  dataKey="serviceProvider"
                  fill={CHART_COLORS.serviceProvider}
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                  onMouseEnter={(data) => setHoveredBar(data.day)}
                >
                  {data.data.map((entry, index) => (
                    <Cell
                      key={`cell-sp-${index}`}
                      fill={
                        hoveredBar === entry.day
                          ? "#2563EB"
                          : CHART_COLORS.serviceProvider
                      }
                    />
                  ))}
                </Bar>
              )}

              {activeFilters.admin && (
                <Bar
                  dataKey="admin"
                  fill={CHART_COLORS.admin}
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                  onMouseEnter={(data) => setHoveredBar(data.day)}
                >
                  {data.data.map((entry, index) => (
                    <Cell
                      key={`cell-admin-${index}`}
                      fill={
                        hoveredBar === entry.day
                          ? "#60A5FA"
                          : CHART_COLORS.admin
                      }
                    />
                  ))}
                </Bar>
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Metrics Section */}
        <MetricsCard />
      </div>
    </div>
  );
}
