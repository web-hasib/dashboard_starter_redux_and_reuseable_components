import { RevenueStats } from "../types";

export async function getRevenueStats(): Promise<RevenueStats> {
  // TODO: Replace with actual API call
  // const token = await getAccessToken();
  // const response = await fetch(`${process.env.API_BASE_URL}/stats/revenue`, {
  //   headers: { Authorization: `Bearer ${token}` },
  //   cache: 'no-store',
  // });
  // return response.json();

  // Dummy data matching the screenshot
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    timeRange: "weekly",
    data: [
      { day: "Fri", serviceProvider: 30000, admin: 8000, date: "2024-12-06" },
      { day: "Sat", serviceProvider: 55000, admin: 12000, date: "2024-12-07" },
      { day: "Sun", serviceProvider: 3000, admin: 5000, date: "2024-12-08" },
      { day: "Mon", serviceProvider: 40000, admin: 12785, date: "2024-12-09" },
      { day: "Tue", serviceProvider: 75000, admin: 45000, date: "2024-12-10" },
      { day: "Wed", serviceProvider: 5000, admin: 25429, date: "2024-12-11" },
      { day: "Thu", serviceProvider: 35000, admin: 8000, date: "2024-12-12" },
    ],
    averageGrowth: 22,
    movers: 5.25,
    users: -5.25,
  };
}
