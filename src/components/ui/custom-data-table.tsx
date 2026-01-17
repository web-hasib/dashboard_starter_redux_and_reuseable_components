// "use client";

// import type React from "react";

// import { useState, useMemo } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { ChevronUp, ChevronDown } from "lucide-react";

// export interface ColumnDef<T, K extends keyof T = keyof T> {
//   key: K;
//   label: string;
//   sortable?: boolean;
//   render?: (value: T[K], row?: T) => React.ReactNode; // value now typed correctly
//   width?: string;
// }

// interface DataTableProps<T> {
//   data: T[];
//   columns: ColumnDef<T>[];
//   rowsPerPage?: number;
//   searchableColumns?: (keyof T)[];
//   onRowClick?: (row: T) => void;
// }

// export function DataTable<T extends { id: string }>({
//   data,
//   columns,
//   rowsPerPage = 10,
//   searchableColumns = [],
//   onRowClick,
// }: DataTableProps<T>) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState<{
//     key: keyof T;
//     direction: "asc" | "desc";
//   } | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter data based on search term
//   const filteredData = useMemo(() => {
//     if (!searchTerm) return data;

//     return data.filter((row) =>
//       searchableColumns.some((col) => {
//         const value = row[col];
//         return String(value).toLowerCase().includes(searchTerm.toLowerCase());
//       })
//     );
//   }, [data, searchTerm, searchableColumns]);

//   // Sort data
//   const sortedData = useMemo(() => {
//     if (!sortConfig) return filteredData;

//     const sorted = [...filteredData].sort((a, b) => {
//       const aValue = a[sortConfig.key];
//       const bValue = b[sortConfig.key];

//       if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     return sorted;
//   }, [filteredData, sortConfig]);

//   // Paginate data
//   const totalPages = Math.ceil(sortedData.length / rowsPerPage);
//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

//   const handleSort = (key: keyof T) => {
//     setSortConfig((prev) => {
//       if (prev?.key === key) {
//         return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
//       }
//       return { key, direction: "asc" };
//     });
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(Math.max(1, Math.min(page, totalPages)));
//   };

//   return (
//     <div className="space-y-4">
//       {/* Search Bar */}

//       {/* Table */}
//       <div className="border rounded-md overflow-hidden">
//         <Table>
//           <TableHeader className="bg-emerald-600 hover:bg-emerald-600">
//             <TableRow className="hover:bg-emerald-600 border-0">
//               {columns.map((column) => (
//                 <TableHead
//                   key={String(column.key)}
//                   className="text-white font-semibold cursor-pointer hover:bg-emerald-700 transition-colors"
//                   onClick={() => column.sortable && handleSort(column.key)}
//                 >
//                   <div className="flex items-center gap-2">
//                     {column.label}
//                     {column.sortable && (
//                       <div className="flex flex-col gap-0.5">
//                         <ChevronUp
//                           className={`w-3 h-3 ${
//                             sortConfig?.key === column.key &&
//                             sortConfig.direction === "asc"
//                               ? "text-white"
//                               : "text-white/40"
//                           }`}
//                         />
//                         <ChevronDown
//                           className={`w-3 h-3 ${
//                             sortConfig?.key === column.key &&
//                             sortConfig.direction === "desc"
//                               ? "text-white"
//                               : "text-white/40"
//                           }`}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {paginatedData.length > 0 ? (
//               paginatedData.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   onClick={() => onRowClick?.(row)}
//                   className="hover:bg-muted/50 cursor-pointer transition-colors"
//                 >
//                   {columns.map((column) => (
//                     <TableCell key={String(column.key)} className="py-4">
//                       {column.render
//                         ? column.render(row[column.key], row)
//                         : String(row[column.key])}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="text-center py-8 text-muted-foreground"
//                 >
//                   No data found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex items-center justify-between   ">
//           <p className="text-sm text-muted-foreground w-full">
//             Showing {startIndex + 1} to{" "}
//             {Math.min(startIndex + rowsPerPage, sortedData.length)} of{" "}
//             {sortedData.length} results
//           </p>
//           <Pagination className="flex justify-end">
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   className={
//                     currentPage === 1
//                       ? "pointer-events-none opacity-50"
//                       : "cursor-pointer"
//                   }
//                 />
//               </PaginationItem>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (page) => {
//                   if (totalPages <= 5) {
//                     return (
//                       <PaginationItem key={page}>
//                         <PaginationLink
//                           onClick={() => handlePageChange(page)}
//                           isActive={page === currentPage}
//                           className="cursor-pointer"
//                         >
//                           {page}
//                         </PaginationLink>
//                       </PaginationItem>
//                     );
//                   }

//                   if (
//                     page === 1 ||
//                     page === totalPages ||
//                     (page >= currentPage - 1 && page <= currentPage + 1)
//                   ) {
//                     return (
//                       <PaginationItem key={page}>
//                         <PaginationLink
//                           onClick={() => handlePageChange(page)}
//                           isActive={page === currentPage}
//                           className="cursor-pointer"
//                         >
//                           {page}
//                         </PaginationLink>
//                       </PaginationItem>
//                     );
//                   }

//                   if (page === currentPage - 2 || page === currentPage + 2) {
//                     return (
//                       <PaginationItem key={page}>
//                         <PaginationEllipsis />
//                       </PaginationItem>
//                     );
//                   }

//                   return null;
//                 }
//               )}

//               <PaginationItem>
//                 <PaginationNext
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   className={
//                     currentPage === totalPages
//                       ? "pointer-events-none opacity-50"
//                       : "cursor-pointer"
//                   }
//                 />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </div>
//       )}
//     </div>
//   );
// }
