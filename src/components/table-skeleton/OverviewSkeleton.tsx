export function AdminDashboardSkeleton() {
  return (
    <div>
      <div className="h-9 bg-gray-200 rounded animate-pulse w-64 my-5"></div>

      {/* Dashboard Summary Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="bg-white shadow-sm mb-6 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100"
          >
            <div className="flex flex-col space-y-3">
              <div className="h-5 bg-gray-200 rounded animate-pulse w-28"></div>
              <div className="flex items-center space-x-2">
                <div className="h-8 bg-gray-300 rounded animate-pulse w-16"></div>
                <div className="h-3 bg-gray-200 rounded animate-pulse w-12"></div>
              </div>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Chart and New Users Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT SIDE — Chart Skeleton */}
        <div className="lg:col-span-2 w-full">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 h-[350px] lg:h-[520px]">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-40 mb-4"></div>
            <div className="h-[calc(100%-3rem)] bg-gray-100 rounded animate-pulse"></div>
          </div>
        </div>

        {/* RIGHT SIDE — New Users Skeleton */}
        <div className="rounded-2xl border border-gray-200 h-[350px] lg:h-[520px]">
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-48 mb-4"></div>

            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="flex items-center border-b pb-3 last:border-none"
                >
                  {/* Profile Image Skeleton */}
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse mr-3"></div>

                  {/* User Info Skeleton */}
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-300 rounded animate-pulse w-28"></div>
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-40"></div>
                  </div>

                  {/* Role Skeleton */}
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}