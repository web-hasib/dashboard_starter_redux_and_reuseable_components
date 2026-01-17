import { TooltipProps } from "recharts";

export default function CustomTooltip({
  active,
  payload,
}: TooltipProps<number, string>) {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;

  return (
    <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium relative">
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      {data.serviceProvider.toLocaleString()}
      <div className="text-gray-400 text-[10px] mt-0.5">per week</div>
    </div>
  );
}
