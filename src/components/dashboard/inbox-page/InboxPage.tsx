// "use client";

// import { useForm, FormProvider, useWatch } from "react-hook-form";
// import { Search, SlidersHorizontal } from "lucide-react";

// import Container from "../../Container";
// import Heading from "../../Heading";
// import { Input } from "../../ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
// import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";

// type FormValues = {
//   search: string;
//   filter: string;
// };

// const InboxPage = () => {
//   const form = useForm<FormValues>({
//     defaultValues: {
//       search: "",
//       filter: "",
//     },
//   });

//   const searchValue = useWatch({
//     control: form.control,
//     name: "search",
//   });

//   const filterValue = useWatch({
//     control: form.control,
//     name: "filter",
//   });

//   console.log("Search Value:", searchValue);
//   console.log("Filter Value:", filterValue);



//   const demoData =[
//   {
//     "ticketId": "TKT-2025-01234",
//     "category": "Live chat",
//     "categoryIcon": "chat",
//     "reporter": "John Smith",
//     "reporterEmail": "john.smith@example.com",
//     "subcategory": "Harassment",
//     "description": "User sending inappropriate messages in live stream chat",
//     "dateCreated": "Nov 15, 2025 04:30 PM",
//     "validation": "Available",
//     "priority": "High",
//     "status": "Pending",
//     "priorityColor": "orange",
//     "statusColor": "yellow"
//   },
//   {
//     "ticketId": "TKT-2025-01233",
//     "category": "Content",
//     "categoryIcon": "content",
//     "reporter": "Sarah Johnson",
//     "reporterEmail": "sarahj@example.com",
//     "subcategory": "Spam",
//     "description": "Spam post with promotional links and affiliate spam",
//     "dateCreated": "Nov 14, 2025 08:22 PM",
//     "validation": "Available",
//     "priority": "Medium",
//     "status": "In Progress",
//     "priorityColor": "yellow",
//     "statusColor": "blue"
//   },
//   {
//     "ticketId": "TKT-2025-01232",
//     "category": "Live chat",
//     "categoryIcon": "chat",
//     "reporter": "Michael Brown",
//     "reporterEmail": "mbrown@example.com",
//     "subcategory": "Copyright Violation",
//     "description": "Live stream contains copyrighted music without license",
//     "dateCreated": "Nov 13, 2025 03:15 PM",
//     "validation": "Available",
//     "priority": "High",
//     "status": "Resolved",
//     "priorityColor": "orange",
//     "statusColor": "green"
//   },
//   {
//     "ticketId": "TKT-2025-01231",
//     "category": "Comment",
//     "categoryIcon": "comment",
//     "reporter": "Michael Brown",
//     "reporterEmail": "mbrown@example.com",
//     "subcategory": "Copyright Violation",
//     "description": "Repeated copyrighted content posted in comments",
//     "dateCreated": "Nov 13, 2025 03:15 PM",
//     "validation": "Available",
//     "priority": "High",
//     "status": "Resolved",
//     "priorityColor": "orange",
//     "statusColor": "green"
//   },
//   {
//     "ticketId": "TKT-2025-01230",
//     "category": "Wallet",
//     "categoryIcon": "wallet",
//     "reporter": "David Chen",
//     "reporterEmail": "dchen@example.com",
//     "subcategory": "Withdrawal Issue",
//     "description": "Cannot withdraw funds to linked bank account – error 0xA3F2",
//     "dateCreated": "Nov 16, 2025 02:20 PM",
//     "validation": "Available",
//     "priority": "High",
//     "status": "Pending",
//     "priorityColor": "orange",
//     "statusColor": "yellow"
//   },
//   {
//     "ticketId": "TKT-2025-01229",
//     "category": "Wallet",
//     "categoryIcon": "wallet",
//     "reporter": "David Chen",
//     "reporterEmail": "dchen@example.com",
//     "subcategory": "Suspicious Transaction",
//     "description": "Unauthorized transaction detected – $1,245.80 to unknown wallet",
//     "dateCreated": "Nov 15, 2025 08:45 PM",
//     "validation": "Available",
//     "priority": "Critical",
//     "status": "In Progress",
//     "priorityColor": "red",
//     "statusColor": "blue"
//   },
//   {
//     "ticketId": "TKT-2025-01228",
//     "category": "Marketplace",
//     "categoryIcon": "marketplace",
//     "reporter": "David Chen",
//     "reporterEmail": "dchen@example.com",
//     "subcategory": "Item Not Received",
//     "description": "Paid for item but never received delivery – seller unresponsive",
//     "dateCreated": "Nov 17, 2025 05:20 PM",
//     "validation": "Available",
//     "priority": "High",
//     "status": "Pending",
//     "priorityColor": "orange",
//     "statusColor": "yellow"
//   },
//   {
//     "ticketId": "SOS-2025-00012",
//     "category": "SOS",
//     "categoryIcon": "sos",
//     "reporter": "David Chen",
//     "reporterEmail": "dchen@example.com",
//     "subcategory": "Imminent Threat",
//     "description": "SOS Triggered: Verified physical threat detected in live stream",
//     "dateCreated": "Nov 16, 2025 10:10 PM",
//     "validation": "Available",
//     "priority": "Critical",
//     "status": "In Progress",
//     "priorityColor": "red",
//     "statusColor": "blue"
//   }
// ];



//   return (
//     <FormProvider {...form}>
//       <Container className="py-6">
//         <div className="mb-6">
//           <Heading as="h1" size="h2">
//             Reports & Dispute’s Inbox
//           </Heading>

//           <Heading as="h6" size="h6" className="mt-2 text-muted-foreground">
//             Manage moderation cases, disputes and safety reports
//           </Heading>
//         </div>

//         <div className="flex items-center justify-between gap-4">
//           <div className="relative w-full max-w-md">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />

//             <Input
//               {...form.register("search")}
//               placeholder="Search by user, ticket id, category, sub-category etc..."
//               className="pl-9 h-11 bg-card border-border"
//             />
//           </div>

          

//             <Select
//               value={filterValue}
//               onValueChange={(value) => form.setValue  ("filter", value)}
//             >
//               <SelectTrigger className="w-40 h-11  bg-card border-border">
//             <SlidersHorizontal className="size-6" />
//                 <SelectValue placeholder="Filter" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="category">Category</SelectItem>
//                 <SelectItem value="subCategory">Sub-Category</SelectItem>
//                 <SelectItem value="status">Status</SelectItem>
//               </SelectContent>
//             </Select>
     
//         </div>


//        <div className="mt-5">
//   <Table>
//     <TableHeader>
//       <TableRow>
//         <TableCell>Ticket ID</TableCell>
//         <TableCell>Category</TableCell>
//         <TableCell>Reporter</TableCell>
//         <TableCell>Sub-Category</TableCell>
//         <TableCell>Description</TableCell>
//         <TableCell>Date Created</TableCell>
//         <TableCell>Validation</TableCell>
//         <TableCell>Priority</TableCell>
//         <TableCell>Status</TableCell>
//       </TableRow>
//     </TableHeader>

//     <TableBody>
//       {demoData.map((item) => (
//         <TableRow key={item.ticketId}>
//           <TableCell>{item.ticketId}</TableCell>
//           <TableCell>{item.category}</TableCell>
//           <TableCell>{item.reporter}</TableCell>
//           <TableCell>{item.subcategory}</TableCell>
//           <TableCell className="max-w-xs truncate">
//             {item.description}
//           </TableCell>
//           <TableCell>{item.dateCreated}</TableCell>
//           <TableCell>{item.validation}</TableCell>
//           <TableCell>{item.priority}</TableCell>
//           <TableCell>{item.status}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// </div>
//       </Container>
//     </FormProvider>
//   );
// };

// export default InboxPage;



"use client";

import { useState } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Search, SlidersHorizontal, Eye, Settings, ClipboardList, MessageSquare, Wallet, MessageCircle, ShoppingBag, AlertTriangle } from "lucide-react";
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
import { cn } from "@/src/lib/utils";
import { Pagination } from "../../CustomPagination";

type FormValues = {
  search: string;
  filter: string;
};

interface Ticket {
  ticketId: string;
  category: string;
  categoryIcon: string;
  categoryColor?: string;
  reporter: string;
  reporterEmail: string;
  subcategory: string;
  description: string;
  dateCreated: string;
  validation: string;
  priority: string;
  status: string;
  priorityColor: string;
  statusColor: string;
}

const ITEMS_PER_PAGE = 5;


// category tab 

// Tab data (যেকোনো ক্যাটাগরি যোগ/বাদ দিতে পারো)
const categories = [
  { id: "all", label: "All Report", icon: <ClipboardList className="h-4 w-4" />, isAll: true },
  { id: "live-chat", label: "Live chat", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "wallet", label: "Wallet", icon: <Wallet className="h-4 w-4" /> },
  { id: "comment", label: "Comment", icon: <MessageCircle className="h-4 w-4" /> },
  { id: "marketplace", label: "Marketplace", icon: <ShoppingBag className="h-4 w-4" /> },
  { id: "sos", label: "SOS", icon: <AlertTriangle className="h-4 w-4" /> },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-wrap items-center gap-2.5 overflow-x-auto pb-1 scrollbar-thin">
      {categories.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-1.5 rounded-sm text-sm font-medium transition-all",
            " hover:bg-muted/80",
            activeTab === tab.id
              ? "bg-blue-700 border border-border text-white hover:bg-blue-700"
              : "",
            tab.isAll && activeTab === tab.id && "bg-blue-800 border-blue-600"
          )}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const demoData: Ticket[] = [
  {
    ticketId: "TKT-2025-01234",
    category: "Live chat",
    categoryIcon: "💬",
    reporter: "John Smith",
    reporterEmail: "john.smith@example.com",
    subcategory: "Harassment",
    description: "User sending inappropriate messages in live stream chat",
    dateCreated: "Nov 15, 2025 04:30 PM",
    validation: "Available",
    priority: "High",
    status: "Pending",
    priorityColor: "bg-orange-600 text-white",
    statusColor: "bg-yellow-600 text-white",
  },
  {
    ticketId: "TKT-2025-01233",
    category: "Content",
    categoryIcon: "🎥",
    reporter: "Sarah Johnson",
    reporterEmail: "sarahj@example.com",
    subcategory: "Spam",
    description: "Spam post with promotional links and affiliate spam",
    dateCreated: "Nov 14, 2025 08:22 PM",
    validation: "Available",
    priority: "Medium",
    status: "In Progress",
    priorityColor: "bg-yellow-600 text-white",
    statusColor: "bg-blue-600 text-white",
  },
  {
    ticketId: "TKT-2025-01232",
    category: "Live chat",
    categoryIcon: "💬",
    reporter: "Michael Brown",
    reporterEmail: "mbrown@example.com",
    subcategory: "Copyright Violation",
    description: "Live stream contains copyrighted music without license",
    dateCreated: "Nov 13, 2025 03:15 PM",
    validation: "Available",
    priority: "High",
    status: "Resolved",
    priorityColor: "bg-orange-600 text-white",
    statusColor: "bg-green-600 text-white",
  },
  {
    ticketId: "TKT-2025-01231",
    category: "Comment",
    categoryIcon: "💬",
    reporter: "Michael Brown",
    reporterEmail: "mbrown@example.com",
    subcategory: "Copyright Violation",
    description: "Repeated copyrighted content posted in comments",
    dateCreated: "Nov 13, 2025 03:15 PM",
    validation: "Available",
    priority: "High",
    status: "Resolved",
    priorityColor: "bg-orange-600 text-white",
    statusColor: "bg-green-600 text-white",
  },
  {
    ticketId: "TKT-2025-01230",
    category: "Wallet",
    categoryIcon: "💰",
    reporter: "David Chen",
    reporterEmail: "dchen@example.com",
    subcategory: "Withdrawal Issue",
    description: "Cannot withdraw funds to linked bank account – error 0xA3F2",
    dateCreated: "Nov 16, 2025 02:20 PM",
    validation: "Available",
    priority: "High",
    status: "Pending",
    priorityColor: "bg-orange-600 text-white",
    statusColor: "bg-yellow-600 text-white",
  },
  {
    ticketId: "TKT-2025-01229",
    category: "Wallet",
    categoryIcon: "💰",
    reporter: "David Chen",
    reporterEmail: "dchen@example.com",
    subcategory: "Suspicious Transaction",
    description: "Unauthorized transaction detected – $1,245.80 to unknown wallet",
    dateCreated: "Nov 15, 2025 08:45 PM",
    validation: "Available",
    priority: "Critical",
    status: "In Progress",
    priorityColor: "bg-red-600 text-white",
    statusColor: "bg-blue-600 text-white",
  },
  {
    ticketId: "TKT-2025-01228",
    category: "Marketplace",
    categoryIcon: "🛒",
    reporter: "David Chen",
    reporterEmail: "dchen@example.com",
    subcategory: "Item Not Received",
    description: "Paid for item but never received delivery – seller unresponsive",
    dateCreated: "Nov 17, 2025 05:20 PM",
    validation: "Available",
    priority: "High",
    status: "Pending",
    priorityColor: "bg-orange-600 text-white",
    statusColor: "bg-yellow-600 text-white",
  },
  {
    ticketId: "SOS-2025-00012",
    category: "SOS",
    categoryIcon: "🚨",
    reporter: "David Chen",
    reporterEmail: "dchen@example.com",
    subcategory: "Imminent Threat",
    description: "SOS Triggered: Verified physical threat detected in live stream",
    dateCreated: "Nov 16, 2025 10:10 PM",
    validation: "Available",
    priority: "Critical",
    status: "In Progress",
    priorityColor: "bg-red-600 text-white",
    statusColor: "bg-blue-600 text-white",
  },
];

const InboxPage = () => {
  const form = useForm<FormValues>({
    defaultValues: { search: "", filter: "" },
  });

  const searchValue = useWatch({ control: form.control, name: "search" });
  const filterValue = useWatch({ control: form.control, name: "filter" });

  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = demoData.filter((item) =>
    [item.ticketId, item.reporter, item.subcategory, item.description]
      .some((val) => val.toLowerCase().includes(searchValue.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <FormProvider {...form}>
      <Container className="py-6 bg-background min-h-screen">
        <div className="mb-6">
          <Heading as="h1" size="h2">
            Reports & Disputes Inbox
          </Heading>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage moderation cases, disputes and safety reports
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              {...form.register("search")}
              placeholder="Search by user, ticket id, category, sub-category etc..."
              className="pl-9 h-10 bg-muted/50 border-border"
            />
          </div>

          <Select
            value={filterValue}
            onValueChange={(value) => form.setValue("filter", value)}
          >
            <SelectTrigger className="w-full sm:w-44 h-10 bg-muted/50 border-border">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="category">Category</SelectItem>
              <SelectItem value="subCategory">Sub-Category</SelectItem>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="priority">Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-5">
        <div className="py-4"><CategoryTabs/></div>
        <div className="bg-card overflow-hidden scrollbar-thin">
          <Table>
            <TableHeader className="bg-[#898989]">
              <TableRow>
                <TableHead className="w-36 text-black">Ticket ID</TableHead>
                <TableHead className="text-black">Category</TableHead>
                <TableHead className="text-black">Reporter</TableHead>
                <TableHead className="text-black">Sub-Category</TableHead>
                <TableHead className="text-black">Description</TableHead>
                <TableHead className="text-black w-44">Date Created</TableHead>
                <TableHead className="text-black w-28">Validation</TableHead>
                <TableHead className="text-black w-24">Priority</TableHead>
                <TableHead className="text-black w-28">Status</TableHead>
                <TableHead className="text-black w-16 text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedData.map((item) => (
                <TableRow key={item.ticketId} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-[#173d90]">
                    {item.ticketId}
                  </TableCell>

                  <TableCell>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-white">
                      <span>{item.categoryIcon}</span>
                      {item.category}
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 flex items-center justify-center font-bold text-[#173d90] rounded-full bg-[#173d905b]">
                        {item.reporter[0]}
                      </div>
                      <div>
                        <div className="font-medium">{item.reporter}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.reporterEmail}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>{item.subcategory}</TableCell>
                  <TableCell className="max-w-md truncate text-muted-foreground">
                    {item.description}
                  </TableCell>
                  <TableCell className="text-sm">{item.dateCreated}</TableCell>

                  <TableCell>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-green-800/40 text-green-400">
                      {item.validation}
                    </span>
                  </TableCell>

                  <TableCell>
                    <span className={cn("px-2.5 py-1 rounded-full text-xs", item.priorityColor)}>
                      {item.priority}
                    </span>
                  </TableCell>

                  <TableCell>
                    <span className={cn("px-2.5 py-1 rounded-full text-xs", item.statusColor)}>
                      {item.status}
                    </span>
                  </TableCell>

                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Eye className="h-4 w-4" />
                      <Settings className="h-4 w-4" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
              </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredData.length}
            pageSize={ITEMS_PER_PAGE}
            onPageChange={setCurrentPage}
            className="mt-4"
          />
        )}
      </Container>
    </FormProvider>
  );
};

export default InboxPage;
