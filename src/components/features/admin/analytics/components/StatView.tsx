import { useState } from "react";
import { ChevronDown } from "lucide-react";

function MetricsCard() {
  const [timeRange, setTimeRange] = useState("weekly");

  const data = {
    averageGrowth: 22,
    movers: 5.25,
    users: -5.25,
  };

  // Calculate SVG circle properties for donut chart
  const size = 140;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = data.averageGrowth;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg">
      <div className="space-y-6">
        {/* Donut Chart Section */}
        <div className="relative flex items-center justify-center">
          <div className="absolute left-0 text-sm font-medium text-gray-700 whitespace-nowrap">
            Average
            <br />
            Customer Growth
          </div>

          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle (light blue) */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#E0F2FE"
              strokeWidth={strokeWidth}
            />
            {/* Progress circle (blue) */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#3B82F6"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>

          {/* Percentage in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          {/* Time Range Selector */}
          <div className="flex items-center justify-between">
            <button
              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
              onClick={() =>
                setTimeRange(timeRange === "weekly" ? "monthly" : "weekly")
              }
            >
              <span className="capitalize">{timeRange}</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Metrics */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Movers</span>
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                ↑ {data.movers.toFixed(2)}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Users</span>
              <span className="text-sm font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                ↓ {Math.abs(data.users).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricsCard;
