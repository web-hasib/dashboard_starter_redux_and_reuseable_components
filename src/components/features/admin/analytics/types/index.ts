export type TimeRange = "daily" | "weekly" | "monthly" | "yearly";

export type DayData = {
  day: string;
  serviceProvider: number;
  admin: number;
  date: string;
};

export type RevenueStats = {
  timeRange: TimeRange;
  data: DayData[];
  averageGrowth: number;
  movers: number;
  users: number;
};

export type FilterOption = {
  value: TimeRange;
  label: string;
};
