// "use client";

// import { useState } from "react";
// import { useForm, FormProvider, useWatch } from "react-hook-form";
// import {
//   Search,
//   SlidersHorizontal,
//   Eye,
//   Settings,
//   ClipboardList,
//   MessageSquare,
//   Wallet,
//   MessageCircle,
//   ShoppingBag,
//   AlertTriangle,
//   Download,
//   X,
//   Check,
// } from "lucide-react";
// import Container from "../../Container";
// import Heading from "../../Heading";
// import { Input } from "../../ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../ui/table";
// import { cn } from "@/src/lib/utils";
// import { Pagination } from "../../CustomPagination";
// import { Button } from "../../ui/button";

// type FormValues = {
//   search: string;
//   filter: string;
// };

// interface Ticket {
//   id: string;
//   user: string;
//   transictionId: string;
//   date: string;
//   amount: string;
//   status: string;
// }

// const ITEMS_PER_PAGE = 5;

// // category tab

// // Tab data (যেকোনো ক্যাটাগরি যোগ/বাদ দিতে পারো)
// const categories = [
//   {
//     id: "all",
//     label: "All Report",
//     icon: <ClipboardList className="h-4 w-4" />,
//     isAll: true,
//   },
//   {
//     id: "live-chat",
//     label: "Live chat",
//     icon: <MessageSquare className="h-4 w-4" />,
//   },
//   { id: "wallet", label: "Wallet", icon: <Wallet className="h-4 w-4" /> },
//   {
//     id: "comment",
//     label: "Comment",
//     icon: <MessageCircle className="h-4 w-4" />,
//   },
//   {
//     id: "marketplace",
//     label: "Marketplace",
//     icon: <ShoppingBag className="h-4 w-4" />,
//   },
//   { id: "sos", label: "SOS", icon: <AlertTriangle className="h-4 w-4" /> },
// ];

// const CategoryTabs = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   return (
//     <div className="flex flex-wrap items-center gap-2.5 overflow-x-auto pb-1 scrollbar-thin">
//       {categories.map((tab) => (
//         <button
//           key={tab.id}
//           onClick={() => setActiveTab(tab.id)}
//           className={cn(
//             "flex items-center gap-2 px-4 py-1.5 rounded-sm text-sm font-medium transition-all",
//             " hover:bg-muted/80",
//             activeTab === tab.id
//               ? "bg-blue-700 border border-border text-white hover:bg-blue-700"
//               : "",
//             tab.isAll && activeTab === tab.id && "bg-blue-800 border-blue-600",
//           )}
//         >
//           {tab.icon}
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// };

// const demoData: Ticket[] = [
//   {
//     id: "1",
//     user: "John Doe",
//     transictionId: "TKT-2025-01234",
//     date: "2024-10-01",
//     amount: "$150.00",
//     status: "Pending",
//   },
// ];

// const PayoutPage = () => {
//   const form = useForm<FormValues>({
//     defaultValues: { search: "", filter: "" },
//   });

//   const searchValue = useWatch({ control: form.control, name: "search" });
//   const filterValue = useWatch({ control: form.control, name: "filter" });

//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredData = demoData

//   const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE,
//   );

//   return (
//     <FormProvider {...form}>
//       <Container className="py-6  min-h-screen">
//         <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//           <div>
//             <Heading as="h2" size="h4">
//               Payout Approvals
//             </Heading>
//             <p className="mt-2 text-sm text-muted-foreground">
//               Review and approvals daily payout queue
//             </p>
//           </div>
//           <div className="flex items-end gap-4 mb-6">
//             <div className="relative w-full max-w-md">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 {...form.register("search")}
//                 placeholder="Search by user, ticket id, category, sub-category etc..."
//                 className="pl-9 h-10 bg-muted/50 border-border"
//               />
//             </div>

//             <Button variant="default" className="h-10">
//               <Download /> Download
//             </Button>

//             <Select
//               value={filterValue}
//               onValueChange={(value) => form.setValue("filter", value)}
//             >
//               <SelectTrigger className="w-full sm:w-44 h-10 bg-muted/50 border-border">
//                 <SlidersHorizontal className="mr-2 h-4 w-4" />
//                 <SelectValue placeholder="Filter" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="category">Category</SelectItem>
//                 <SelectItem value="subCategory">Sub-Category</SelectItem>
//                 <SelectItem value="status">Status</SelectItem>
//                 <SelectItem value="priority">Priority</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         <div className="mt-10">
          
//           <div className="bg-card overflow-hidden scrollbar-thin">
//             <Table>
//               <TableHeader className="
//               border-b-3 border-b-[#ffffff82]">
//                 <TableRow>
//                   <TableHead className="w-36 text-lg font-medium">ID</TableHead>
//                   <TableHead className="text-lg font-medium">User</TableHead>
//                   <TableHead className="text-lg font-medium">Transaction ID</TableHead>
//                   <TableHead className="text-lg font-medium">Date</TableHead>
//                   <TableHead className="text-lg font-medium">Amount</TableHead>
//                   <TableHead className="text-lg font-medium w-44">Status</TableHead>
//                   <TableHead className="text-lg font-medium w-16 text-right">
//                     Actions
//                   </TableHead>
//                 </TableRow>
//               </TableHeader>

//               <TableBody>
//                 {paginatedData.map((item) => (
//                   <TableRow key={item.id} className="hover:bg-muted/50">
//                     <TableCell className="font-medium">
//                       # {item.id}
//                     </TableCell>
//                     <TableCell className="font-medium text-[#173d90]">
//                       {item.user}
//                     </TableCell>

//                     <TableCell>
//                       {item.transictionId}
//                     </TableCell>

//                     <TableCell>
//                       {item.date}
//                     </TableCell>

//                     <TableCell>{item.amount}</TableCell>
//                     <TableCell className="max-w-md truncate text-muted-foreground">
//                       {item.status}
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <div className="flex justify-end gap-2">
//                        <Button variant="success" size="sm">
//                           <Check className="h-4 w-4" />
//                         </Button>
//                         <Button variant="error" size="sm">
//                           <X className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//         {totalPages > 1 && (
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             totalItems={filteredData.length}
//             pageSize={ITEMS_PER_PAGE}
//             onPageChange={setCurrentPage}
//             className="mt-4"
//           />
//         )}
//       </Container>
//     </FormProvider>
//   );
// };

// export default PayoutPage;

"use client";

import { useState, useMemo } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import {
  Search,
  SlidersHorizontal,
  Download,
  X,
  Check,
} from "lucide-react";

import Container from "../../Container";
import Heading from "../../Heading";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from "../../ui/button";
import { Pagination } from "../../CustomPagination";

type FormValues = {
  search: string;
  filter: string;
};

interface Ticket {
  id: string;
  user: string;
  transictionId: string;
  date: string;
  amount: string;
  status: string;
}

const ITEMS_PER_PAGE = 5;

/* -------------------- DUMMY DATA -------------------- */

const demoData: Ticket[] = [
  {
    id: "1",
    user: "John Doe",
    transictionId: "TKT-2025-0001",
    date: "2025-01-01",
    amount: "$120.00",
    status: "Pending",
  },
  {
    id: "2",
    user: "Sarah Khan",
    transictionId: "TKT-2025-0002",
    date: "2025-01-02",
    amount: "$90.00",
    status: "Approved",
  },
  {
    id: "3",
    user: "Alex Smith",
    transictionId: "TKT-2025-0003",
    date: "2025-01-03",
    amount: "$300.00",
    status: "Rejected",
  },
  {
    id: "4",
    user: "Rahim Uddin",
    transictionId: "TKT-2025-0004",
    date: "2025-01-04",
    amount: "$45.00",
    status: "Pending",
  },
  {
    id: "5",
    user: "Emily Stone",
    transictionId: "TKT-2025-0005",
    date: "2025-01-05",
    amount: "$210.00",
    status: "Approved",
  },
  {
    id: "6",
    user: "Hasan Ali",
    transictionId: "TKT-2025-0006",
    date: "2025-01-06",
    amount: "$75.00",
    status: "Pending",
  },
];

const PayoutPage = () => {
  const form = useForm<FormValues>({
    defaultValues: { search: "", filter: "" },
  });

  const searchValue = useWatch({ control: form.control, name: "search" });
  const filterValue = useWatch({ control: form.control, name: "filter" });

  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    return demoData.filter((item) => {
      const q = searchValue?.toLowerCase() || "";
      const matchesSearch =
        item.user.toLowerCase().includes(q) ||
        item.transictionId.toLowerCase().includes(q) ||
        item.status.toLowerCase().includes(q);

      if (!filterValue) return matchesSearch;

      return matchesSearch && item.status.toLowerCase() === filterValue.toLowerCase();
    });
  }, [searchValue, filterValue]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <FormProvider {...form}>
      <Container className="py-4 sm:py-6 min-h-screen px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-6">
          <div>
            <Heading as="h2" size="h4">
              Payout Approvals
            </Heading>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Review and approvals daily payout queue
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                {...form.register("search")}
                placeholder="Search by user, ticket id, category..."
                className="pl-9 h-10 bg-muted/50 border-border text-xs sm:text-sm w-full"
              />
            </div>

            <Button variant="default" className="h-10 w-full sm:w-auto shrink-0 text-xs sm:text-sm">
              <Download className="h-4 w-4" /> 
              <span className="hidden sm:inline">Download</span>
            </Button>

            <Select
              value={filterValue}
              onValueChange={(value) => form.setValue("filter", value)}
            >
              <SelectTrigger className="w-full sm:w-44 h-10 bg-muted/50 border-border text-xs sm:text-sm">
                <SlidersHorizontal className="mr-2 h-4 w-4 shrink-0" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 bg-card overflow-x-auto scrollbar-thin rounded-lg">
          <Table>
            <TableHeader className="border-b-3 border-b-[#ffffff82]">
              <TableRow>
                <TableHead className="text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap px-2 sm:px-4">ID</TableHead>
                <TableHead className="text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap px-2 sm:px-4">User</TableHead>
                <TableHead className="text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap px-2 sm:px-4">Transaction ID</TableHead>
                <TableHead className="text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap px-2 sm:px-4">Date</TableHead>
                <TableHead className="text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap px-2 sm:px-4">Amount</TableHead>
                <TableHead className="text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap px-2 sm:px-4">Status</TableHead>
                <TableHead className="text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap px-2 sm:px-4 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-xs sm:text-sm px-2 sm:px-4">#{item.id}</TableCell>
                  <TableCell className="font-medium text-[#173d90] text-xs sm:text-sm px-2 sm:px-4 truncate">
                    {item.user}
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm px-2 sm:px-4 truncate">{item.transictionId}</TableCell>
                  <TableCell className="text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.date}</TableCell>
                  <TableCell className="text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.amount}</TableCell>
                  <TableCell className="text-xs sm:text-sm text-muted-foreground px-2 sm:px-4 truncate">
                    {item.status}
                  </TableCell>
                  <TableCell className="text-right px-2 sm:px-4">
                    <div className="flex justify-end gap-1 sm:gap-2">
                      <Button variant="success" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-9">
                        <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Button>
                      <Button variant="error" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-9">
                        <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredData.length}
            pageSize={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
            className="mt-4 sm:mt-6"
          />
        )}
      </Container>
    </FormProvider>
  );
};

export default PayoutPage;