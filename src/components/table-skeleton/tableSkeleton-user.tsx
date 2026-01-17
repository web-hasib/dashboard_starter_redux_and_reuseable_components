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
  { key: "name", label: "Name", sortable: false, width: "20%" },
  { key: "type", label: "Type", sortable: true, width: "20%" },
  {
    key: "status",
    label: "Status",
    width: "20%",
  },
  { key: "joinDate", label: "Join Date", sortable: true, width: "20%" },
  {
    key: "action",
    label: "Action",
    width: "20%",
  },
];

// Table Skeleton Component
export function TableSkeleton({
  columns,
  rows = 5,
 headerClassName = "bg-white text-black",
}: TableSkeletonProps) {
  return (
    <div className="border rounded-md overflow-hidden mt-10">
      <Table className="px-4 mt-10">
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
