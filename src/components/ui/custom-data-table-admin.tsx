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
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { ChevronUp, ChevronDown } from "lucide-react";

// // Type for each column
// export interface ColumnDef<T, K extends keyof T = keyof T> {
//   key: K;
//   label: string;
//   sortable?: boolean;
//   render?: (value: T[K], row?: T) => React.ReactNode;
//   width?: string;
// }

// // Type for external pagination (API-based)
// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   totalItems: number;
//   onPageChange: (page: number) => void;
// }

// // Main props for DataTable
// interface DataTableProps<T> {
//   data: T[];
//   columns: ColumnDef<T>[];
//   rowsPerPage?: number;
//   searchableColumns?: (keyof T)[];
//   onRowClick?: (row: T) => void;
//   pagination?: PaginationProps; // API pagination
// }

// // Generic DataTable component
// export function DataTable<T extends { id: string }>({
//   data,
//   columns,
//   rowsPerPage = 10,
//   searchableColumns = [],
//   onRowClick,
//   pagination, // ✅ API pagination
// }: DataTableProps<T>) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortConfig, setSortConfig] = useState<{
//     key: keyof T;
//     direction: "asc" | "desc";
//   } | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // 🔍 Search filter
//   const filteredData = useMemo(() => {
//     if (!searchTerm) return data;
//     return data.filter((row) =>
//       searchableColumns.some((col) => {
//         const value = row[col];
//         return String(value).toLowerCase().includes(searchTerm.toLowerCase());
//       })
//     );
//   }, [data, searchTerm, searchableColumns]);

//   // 🔃 Sorting logic
//   const sortedData = useMemo(() => {
//     if (!sortConfig) return filteredData;
//     return [...filteredData].sort((a, b) => {
//       const aValue = a[sortConfig.key];
//       const bValue = b[sortConfig.key];
//       if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }, [filteredData, sortConfig]);

//   // Local fallback pagination
//   const totalPages =
//     pagination?.totalPages ?? Math.ceil(sortedData.length / rowsPerPage);

//   const startIndex = pagination ? 0 : (currentPage - 1) * rowsPerPage;

//   const paginatedData = pagination
//     ? sortedData // API already paginated
//     : sortedData.slice(startIndex, startIndex + rowsPerPage);

//   const effectivePage = pagination?.currentPage ?? currentPage;

//   // Handle sorting
//   const handleSort = (key: keyof T) => {
//     setSortConfig((prev) => {
//       if (prev?.key === key) {
//         return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
//       }
//       return { key, direction: "asc" };
//     });
//   };

//   // Handle local page change
//   const handlePageChange = (page: number) => {
//     setCurrentPage(Math.max(1, Math.min(page, totalPages)));
//   };

//   return (
//     <div className="space-y-4">
//       {/* Search bar */}
//       {searchableColumns.length > 0 && (
//         <div>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full md:w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
//           />
//         </div>
//       )}

//       {/* Table */}
//       <div className=" rounded-md overflow-hidden">
//         <Table className="px-8">
//           <TableHeader>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableHead
//                   key={String(column.key)}
//                    className="text-black font-medium text-[20px] cursor-pointer border-b border-gray-300"
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
//                   className="hover:bg-muted/50 text-black text-[16px] cursor-pointer transition-colors"
//                 >
//                   {columns.map((column) => (
//                     <TableCell key={String(column.key)} className="py-4">
//                       {column.render
//                         ? column.render(row[column.key], row)
//                         : String(row[column.key] ?? "")}
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
//         <div className="flex items-center justify-between">
//           <p className="text-sm text-gray-600  w-full">
//             {pagination
//               ? `Page ${pagination.currentPage} of ${pagination.totalPages}`
//               : `${startIndex + 1}-${Math.min(
//                   startIndex + rowsPerPage,
//                   sortedData.length
//                 )} of ${sortedData.length}`}
//           </p>

//           <Pagination className="flex justify-end">
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious
//                   onClick={() => {
//                     const newPage = Math.max(1, effectivePage - 1);
//                     pagination
//                       ? pagination.onPageChange(newPage)
//                       : handlePageChange(newPage);
//                   }}
//                   className={
//                     effectivePage === 1
//                       ? "pointer-events-none opacity-50"
//                       : "cursor-pointer"
//                   }
//                 />
//               </PaginationItem>

//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (pageNumber) => (
//                   <PaginationItem key={pageNumber}>
//                     <PaginationLink
//                       onClick={() => {
//                         pagination
//                           ? pagination.onPageChange(pageNumber)
//                           : handlePageChange(pageNumber);
//                       }}
//                       isActive={pageNumber === effectivePage}
//                       className={`cursor-pointer border-0 rounded-md px-3 py-6 transition-colors ${
//                         pageNumber === effectivePage
//                           ? "bg-[#10B981] text-white rounded-lg"
//                           : "hover:bg-emerald-100 hover:text-emerald-700"
//                       }`}
//                     >
//                       {pageNumber}
//                     </PaginationLink>
//                   </PaginationItem>
//                 )
//               )}

//               <PaginationItem>
//                 <PaginationNext
//                   onClick={() => {
//                     const newPage = Math.min(totalPages, effectivePage + 1);
//                     pagination
//                       ? pagination.onPageChange(newPage)
//                       : handlePageChange(newPage);
//                   }}
//                   className={
//                     effectivePage === totalPages
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
