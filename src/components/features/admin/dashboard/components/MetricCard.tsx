import React from "react";
import { TrendingDown, ArrowUpRight, TrendingUp } from "lucide-react";
import { cn } from "@/src/lib/utils";

type ChangeDirection = "up" | "down";

interface MetricCardProps {
  title: string;
  value: string | number;
  changeValue?: number;
  changeDirection?: ChangeDirection;
  changeText?: string;
  titleIcon?: React.ReactNode;
  isLoading?: boolean;
  tooltip?: string;
  className?: string;
  trendingValue?: string | number;
}

export function MetricCard({
  title,
  value = 0,
  changeText = "From last month",
  isLoading = false,
  tooltip,
  className = "",
  changeDirection: trendingDirection = "up",
  trendingValue = "0%",
}: MetricCardProps) {
  // Error handling: Ensure value is valid
  const safeValue = React.useMemo(() => {
    if (value === null || value === undefined) return "N/A";
    if (typeof value === "number" && isNaN(value)) return "N/A";
    return typeof value === "number" ? value.toLocaleString() : value;
  }, [value]);

  // Error handling: Ensure trendingValue is valid
  const safeTrendingValue = React.useMemo(() => {
    if (trendingValue === null || trendingValue === undefined) return "0%";
    if (typeof trendingValue === "number" && isNaN(trendingValue)) return "0%";
    return trendingValue;
  }, [trendingValue]);

  return (
    <div className="group cursor-pointer duration-400 hover:scale-105 transition-transform">
      <div
        className={cn(
          "p-4 rounded-lg shadow-sm bg-white border border-gray-200",
          "group-hover:bg-primary-500 group-hover:text-white",
          "hover:shadow min-h-40 flex flex-col justify-between",
          "transition-colors duration-400",
          className
        )}
        title={tooltip}
        role="article"
        aria-label={`${title}: ${safeValue}`}
      >
        <div className="flex justify-between items-center mb-2">
          <h1>{title || "Untitled"}</h1>
          <ArrowUpRight className="group-hover:scale-125 transition-transform duration-200 text-gray-500 group-hover:text-white size-4" />
        </div>

        <div>
          {isLoading ? (
            <div
              className="animate-pulse bg-gray-200 h-9 w-32 rounded"
              role="status"
              aria-label="Loading"
            />
          ) : (
            <div className="flex justify-between items-center">
              <strong className="text-lg font-bold">{safeValue}</strong>
              <div className="flex flex-col justify-end">
                <span
                  className={cn(
                    "self-end flex items-center gap-1 text-xs font-medium",
                    trendingDirection === "up" &&
                      "group-hover:text-white text-primary-500",
                    trendingDirection === "down" &&
                      "group-hover:text-white text-rose-500"
                  )}
                >
                  {trendingDirection === "up" && (
                    <TrendingUp size={16} aria-hidden="true" />
                  )}
                  {trendingDirection === "down" && (
                    <TrendingDown size={16} aria-hidden="true" />
                  )}
                  {safeTrendingValue}
                </span>
                <span className="text-xs text-gray-800 group-hover:text-white">
                  {changeText}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type MetricCardsProps = {
  data?: MetricCardProps[];
  isLoading?: boolean;
  error?: string | null;
};

const defaultData: MetricCardProps[] = [
  {
    title: "Visits",
    value: 5000,
    changeDirection: "up",
    changeValue: 1.5,
    changeText: "From last month",
    trendingValue: "1.5%",
  },
  {
    title: "Orders",
    value: 3200,
    changeDirection: "down",
    changeValue: -2.3,
    changeText: "From last month",
    trendingValue: "2.3%",
  },
  {
    title: "Revenue",
    value: 12500,
    changeDirection: "up",
    changeValue: 5.8,
    changeText: "From last month",
    trendingValue: "5.8%",
  },
  {
    title: "Conversions",
    value: 850,
    changeDirection: "up",
    changeValue: 3.2,
    changeText: "From last month",
    trendingValue: "3.2%",
  },
];

export default function MetricCards({
  data = defaultData,
  isLoading = false,
}: MetricCardsProps) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <MetricCard
              key={`skeleton-${index}`}
              title="Loading..."
              value={0}
              isLoading={true}
            />
          ))
        : data.map((item, index) => (
            <MetricCard
              key={item.title ? `${item.title}-${index}` : `card-${index}`}
              {...item}
            />
          ))}
    </div>
  );
}
