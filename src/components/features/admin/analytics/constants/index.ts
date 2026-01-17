import { FilterOption } from "../types";

export const TIME_RANGE_OPTIONS: FilterOption[] = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export const CHART_COLORS = {
  serviceProvider: "#3B82F6", // Blue
  admin: "#93C5FD", // Light Blue
} as const;
