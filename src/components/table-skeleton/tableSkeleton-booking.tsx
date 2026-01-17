import React from "react";

import { ChevronUp, ChevronDown } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Skeleton } from "../ui/skeleton";

// Types
export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface TableSkeletonProps {
  columns?: Column[];
  rows?: number;
  headerClassName?: string;
}

export const tableColumns: Column[] = [
 { key: "bookingId", label: "Booking Id", sortable: false ,width: "12.5%" },
    { key: "client", label: "Client", sortable: true ,width: "12.5%"},
    { key: "provider", label: "Provider", sortable: true ,width: "12.5%"},
    { key: "serviceTitles", label: "Service", sortable: true  ,width: "12.5%"},
    { key: "date", label: "Date", sortable: true ,width: "12.5%"},
    { key: "status", label: "Status", sortable: true ,width: "12.5%"},
    { key: "amount", label: "Amount", sortable: true  ,width: "12.5%"},
    { key: "action", label: "Action", sortable: true ,width: "12.5%"},
];

// Table Skeleton Component
export function TableSkeleton({
  columns,
  rows = 5,
  headerClassName = "bg-white text-black",
}: TableSkeletonProps) {
  return (
    <div className="border rounded-md overflow-hidden mt-10">

    {/* <div className="my-15">
      <DashboardOverviewBookingSkeleton/>
    </div> */}
      <Table className="px-8 pt-12">
        <TableHeader className={headerClassName}>
          <TableRow>
            {columns?.map((column) => (
              <TableHead
                key={column.key}
                className="text-white font-medium text-[18px]"
                style={{ width: column.width }}
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <div className="flex flex-col gap-0.5">
                      <ChevronUp className="w-3 h-3 text-white/40" />
                      <ChevronDown className="w-3 h-3 text-white/40" />
                    </div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns?.map((column) => (
                <TableCell key={column.key} className="py-4">
                  <Skeleton className="h-5 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
