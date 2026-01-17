export function DashboardOverviewBookingSkeleton() {
  return (
   <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-15">
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="bg-white shadow-sm mb-6 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100"
        >
          {/* Left: Stats */}
          <div className="flex flex-col space-y-3">
            {/* Title skeleton */}
            <div className="h-5 bg-gray-200 rounded animate-pulse w-28"></div>
            
            {/* Value and trend skeleton */}
            <div className="flex items-center space-x-2">
              <div className="h-8 bg-gray-300 rounded animate-pulse w-16"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-12"></div>
            </div>
          </div>

          {/* Right: Icon skeleton */}
          <div className="flex">
            <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}