import React from "react";

export default function DashboardOverviewSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* first  */}
      <div className="bg-white shadow-sm mb-6 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100 animate-pulse">
        {/* Left: Stats Skeleton */}
        <div className="flex flex-col">
          {/* Value skeleton */}
          <div className="h-8 w-24 bg-gray-200 rounded mb-2"></div>

          <div className="flex items-center">
            {/* Title skeleton */}
            <div className="h-5 w-32 bg-gray-200 rounded mr-4"></div>
            {/* Trend skeleton */}
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Right: Icon Skeleton */}
        <div className="flex">
          <div className="h-12 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* second */}
      <div className="bg-white shadow-sm mb-6 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100 animate-pulse">
        {/* Left: Stats Skeleton */}
        <div className="flex flex-col">
          {/* Value skeleton */}
          <div className="h-8 w-24 bg-gray-200 rounded mb-2"></div>

          <div className="flex items-center">
            {/* Title skeleton */}
            <div className="h-5 w-32 bg-gray-200 rounded mr-4"></div>
            {/* Trend skeleton */}
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Right: Icon Skeleton */}
        <div className="flex">
          <div className="h-12 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* third */}
      <div className="bg-white shadow-sm mb-6 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100 animate-pulse">
        {/* Left: Stats Skeleton */}
        <div className="flex flex-col">
          {/* Value skeleton */}
          <div className="h-8 w-24 bg-gray-200 rounded mb-2"></div>

          <div className="flex items-center">
            {/* Title skeleton */}
            <div className="h-5 w-32 bg-gray-200 rounded mr-4"></div>
            {/* Trend skeleton */}
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Right: Icon Skeleton */}
        <div className="flex">
          <div className="h-12 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* fourth */}

      <div className="bg-white shadow-sm mb-6 rounded-2xl flex justify-between items-start px-6 py-4 border border-gray-100 animate-pulse">
        {/* Left: Stats Skeleton */}
        <div className="flex flex-col">
          {/* Value skeleton */}
          <div className="h-8 w-24 bg-gray-200 rounded mb-2"></div>

          <div className="flex items-center">
            {/* Title skeleton */}
            <div className="h-5 w-32 bg-gray-200 rounded mr-4"></div>
            {/* Trend skeleton */}
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Right: Icon Skeleton */}
        <div className="flex">
          <div className="h-12 w-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
