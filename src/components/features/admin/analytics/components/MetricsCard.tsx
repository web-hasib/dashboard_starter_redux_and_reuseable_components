import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type MetricsCardProps = {
  title: string;
  percentage: number;
  showChart?: boolean;
};

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  percentage,
  showChart = true,
}) => {
  const size = 160;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${
    (percentage / 100) * circumference
  } ${circumference}`;

  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-medium text-gray-700 leading-snug max-w-36 text-center">
        {title}
      </p>

      {showChart && (
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#E0F2FE"
              strokeWidth={strokeWidth}
            />
            {/* Progress Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#60A5FA"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-900">
              {percentage}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

type TimeRangeSelectorProps = {
  currentRange: string;
  onChange?: (range: string) => void;
};

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({
  currentRange,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="capitalize">{currentRange}</span>
      <ChevronDown size={14} />
    </button>
  );
};

type MetricItemProps = {
  label: string;
  value: number;
  isPositive: boolean;
};

const MetricItem: React.FC<MetricItemProps> = ({
  label,
  value,
  isPositive,
}) => (
  <div className="flex items-center justify-between">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <span
      className={`text-sm font-semibold px-2.5 py-1 rounded-full ${
        isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
      }`}
    >
      {isPositive ? "↑" : "↓"} {Math.abs(value).toFixed(2)}%
    </span>
  </div>
);

type DashboardData = {
  averageGrowth: number;
  movers: number;
  users: number;
};

export default function CustomerGrowthDashboard() {
  const data: DashboardData = {
    averageGrowth: 22,
    movers: 5.25,
    users: -5.25,
  };

  return (
    <div className="space-y-4">
      {/* Metrics Card */}
      <MetricsCard
        title="Average Customer Growth"
        percentage={data.averageGrowth}
        showChart
      />

      {/* Bottom Section */}
      <div className="bg-gray-50 rounded-xl p-4 space-y-3 flex gap-4 justify-between">
        <div className="flex items-center">
          <TimeRangeSelector currentRange="weekly" />
        </div>
        <div className="space-y-2.5">
          <MetricItem label="Movers" value={data.movers} isPositive={true} />
          <MetricItem label="Users" value={data.users} isPositive={false} />
        </div>
      </div>
    </div>
  );
}
