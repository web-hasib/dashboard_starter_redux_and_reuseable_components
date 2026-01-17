import { RevenueChart } from "./RevenueChart";
import { getRevenueStats } from "../actions/get-revenue-stats";

export default async function DashboardStats() {
  const revenueData = await getRevenueStats();

  return <RevenueChart initialData={revenueData} />;
}
