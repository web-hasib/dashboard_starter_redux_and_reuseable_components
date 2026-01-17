"use client";


type CardProps = {
  value: string | number;
  title: string;
  icon?: React.ComponentType<{ className?: string }>; // <- Accept React icon component
  trend?:string | undefined;
};



export default function DashboardOverviewBooking({ value, title, icon: Icon ,trend }: CardProps) {

  const titleColorClass = {
    "Total Revenue of Month": "text-blue-500",
    "Platform Fees": "text-green-500",
    "Pending Payouts": "text-purple-500",
    "Avg. Transaction": "text-red-500",
  }[title] || "text-gray-500"; 

  return (
    <div className="bg-white shadow-sm mb-6 hover:shadow-md transition-all duration-300 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100">
      {/* Left: Stats */}
      <div className="flex flex-col">
      
        <p className={`text-xl font-medium mr-4 ${titleColorClass}`}>{title}</p>
        <div className="flex items-center ">
           <h1 className="text-h2 font-bold text-[#333333]">{value}</h1>
          <p className="text-[#10B981] text-[12px]">{trend}</p>
        </div>
      </div>

      {/* Right: Icon/Image */}
      <div className="flex ">
        <div>
          {Icon && <Icon className={`w-8 h-8 ${titleColorClass}`} />}
        </div>
      </div>
    </div>
  );
}
