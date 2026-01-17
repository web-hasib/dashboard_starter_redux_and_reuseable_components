import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'

export default function ChartSkeleton() {
  return (
    <Card className="col-span-1 lg:col-span-2 shadow-sm">
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
    {/* Title skeleton */}
    <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
    
    {/* Button skeleton */}
    <div className="h-9 w-28 bg-gray-200 rounded animate-pulse"></div>
  </CardHeader>
  
  <CardContent>
    <div className="w-full h-[300px] flex flex-col justify-between p-5 animate-pulse">
      {/* Legend skeleton */}
      <div className="flex gap-4 mb-4">
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
        <div className="h-4 w-28 bg-gray-200 rounded"></div>
      </div>
      
      {/* Chart lines skeleton */}
      <div className="flex-1 flex items-end justify-between gap-4">
        <div className="flex-1 flex flex-col justify-end gap-2">
          <div className="h-32 bg-gradient-to-t from-gray-200 to-gray-100 rounded"></div>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <div className="h-40 bg-gradient-to-t from-gray-200 to-gray-100 rounded"></div>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <div className="h-24 bg-gradient-to-t from-gray-200 to-gray-100 rounded"></div>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <div className="h-48 bg-gradient-to-t from-gray-200 to-gray-100 rounded"></div>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <div className="h-36 bg-gradient-to-t from-gray-200 to-gray-100 rounded"></div>
        </div>
      </div>
      
      {/* X-axis labels skeleton */}
      <div className="flex justify-between mt-4">
        <div className="h-3 w-8 bg-gray-200 rounded"></div>
        <div className="h-3 w-8 bg-gray-200 rounded"></div>
        <div className="h-3 w-8 bg-gray-200 rounded"></div>
        <div className="h-3 w-8 bg-gray-200 rounded"></div>
        <div className="h-3 w-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  </CardContent>
</Card>
  )
}
