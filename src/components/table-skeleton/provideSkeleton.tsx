export function ProviderCardSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
        >
          {/* Header with profile and badge */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              {/* Profile image skeleton */}
              <div className="w-[60px] h-[60px] bg-gray-200 rounded-full animate-pulse mr-2"></div>
              
              <div className="space-y-2">
                {/* Name skeleton */}
                <div className="h-5 bg-gray-300 rounded animate-pulse w-32"></div>
                {/* Email skeleton */}
                <div className="h-4 bg-gray-200 rounded animate-pulse w-40"></div>
              </div>
            </div>

            {/* Badge skeleton */}
            <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20"></div>
          </div>

          {/* Service and Applied info */}
          <div className="mb-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
              <div className="h-5 bg-gray-300 rounded animate-pulse w-32"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
              <div className="h-5 bg-gray-300 rounded animate-pulse w-24"></div>
            </div>
          </div>

          {/* Portfolio section */}
          <div className="mb-4">
            <div className="h-5 bg-gray-200 rounded animate-pulse w-20 mb-2"></div>
            <div className="flex gap-2">
              {[1, 2, 3].map((imgIndex) => (
                <div
                  key={imgIndex}
                  className="w-16 h-16 bg-gray-200 rounded animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Action buttons skeleton */}
          <div className="flex gap-3">
            <div className="h-10 bg-gray-200 rounded animate-pulse flex-1"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse flex-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
}