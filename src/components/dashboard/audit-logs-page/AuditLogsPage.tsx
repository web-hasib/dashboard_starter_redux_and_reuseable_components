"use client";

import { cn } from "@/src/lib/utils";
import {
  ChevronRight,
  Download,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useMemo, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import Container from "../../Container";
import { Pagination } from "../../CustomPagination"; // your existing pagination
import Heading from "../../Heading";
import { Button } from "../../ui/button";
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

type FormValues = {
  search: string;
  filter: string;
};

interface AuditLog {
  timestamp: string; // relative time e.g. "2 minutes ago"
  admin: {
    initial: string;
    name: string;
    username: string; // e.g. "admin_4422"
    color: string; // bg color for pill
  };
  actionType: string;
  actionColor: string; // bg-red-600 / bg-green-600 etc.
  object: string;
  changes: string;
  action: string; // usually "View"
}

const ITEMS_PER_PAGE = 5; // screenshot shows ~10 rows per page

const demoData: AuditLog[] = [
  {
    timestamp: "2 minutes ago",
    admin: {
      initial: "S",
      name: "Sarah Chen",
      username: "admin_4422",
      color: "bg-pink-300/90 text-black",
    },
    actionType: "User Ban",
    actionColor: "bg-red-400/30 border-red-400 rounded-sm p-2 text-red-400",
    object: "User @kenjii",
    changes: "status: active → banned",
    action: "View",
  },
  {
    timestamp: "6 minutes ago",
    admin: {
      initial: "M",
      name: "Marcus Thompson",
      username: "mod_7731",
      color: "bg-cyan-300/90 text-black",
    },
    actionType: "Report Closed",
    actionColor:
      "bg-green-400/30 border-green-400 rounded-sm p-2 text-green-400",
    object: "Report #8823",
    changes: "status: open → resolved",
    action: "View",
  },
  {
    timestamp: "18 minutes ago",
    admin: {
      initial: "L",
      name: "Lisa Park",
      username: "admin_9921",
      color: "bg-yellow-300/90 text-black",
    },
    actionType: "Payout Released",
    actionColor:
      "bg-green-400/30 border-green-400 rounded-sm p-2 text-green-400",
    object: "Stream #1142",
    changes: "payout: pending → released ($2,450)",
    action: "View",
  },
  {
    timestamp: "26 minutes ago",
    admin: {
      initial: "D",
      name: "David Rodriguez",
      username: "mod_3344",
      color: "bg-cyan-300/90 text-black",
    },
    actionType: "Post Removed",
    actionColor: "bg-red-400/30 border-red-400 rounded-sm p-2 text-red-400",
    object: "Post #5533",
    changes: "visibility: public → removed",
    action: "View",
  },
  {
    timestamp: "42 minutes ago",
    admin: {
      initial: "E",
      name: "Emily Watson",
      username: "admin_5566",
      color: "bg-purple-300/90 text-black",
    },
    actionType: "Dispute Closed",
    actionColor:
      "bg-yellow-400/30 border-yellow-400 rounded-sm p-2 text-yellow-400",
    object: "Dispute #22",
    changes: "status: investigating → closed",
    action: "View",
  },
  {
    timestamp: "53 minutes ago",
    admin: {
      initial: "S",
      name: "Sarah Chen",
      username: "admin_4422",
      color: "bg-pink-300/90 text-black",
    },
    actionType: "Stream Terminated",
    actionColor: "bg-red-400/30 border-red-400 rounded-sm p-2 text-red-400",
    object: "Stream #9977",
    changes: "status: live → terminated",
    action: "View",
  },
  // You can add more entries if needed
];

const handleOpenDetails = (id: string) =>{
    console.log(id);

}

const AuditLogsPage = () => {
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
        item.admin.name.toLowerCase().includes(q) ||
        item.admin.username.toLowerCase().includes(q) ||
        item.actionType.toLowerCase().includes(q) ||
        item.object.toLowerCase().includes(q) ||
        item.changes.toLowerCase().includes(q);

      if (!filterValue || filterValue === "all") return matchesSearch;
      // You can extend filtering logic here (e.g. by action type)
      return (
        matchesSearch &&
        item.actionType.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  }, [searchValue, filterValue]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <FormProvider {...form}>
      <Container className="">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Heading as="h1" size="h3" className="text-2xl font-bold">
              Audit Log
            </Heading>
            <p className="mt-1 text-sm text-muted-foreground">
              Full platform activity history
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full min-w-[240px] sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                {...form.register("search")}
                placeholder="Search logs..."
                className="pl-9 h-10 bg-muted/50 border-border"
              />
            </div>

            <Button variant="outline" className="h-10 gap-2">
              <Download className="h-4 w-4" />
              Export Logs
            </Button>

            <Select
              value={filterValue}
              onValueChange={(v) => form.setValue("filter", v)}
            >
              <SelectTrigger className="w-full sm:w-40 h-10 bg-muted/50 border-border">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="User Ban">User Ban</SelectItem>
                <SelectItem value="Report Closed">Report Closed</SelectItem>
                <SelectItem value="Payout Released">Payout Released</SelectItem>
                <SelectItem value="Post Removed">Post Removed</SelectItem>
                <SelectItem value="Dispute Closed">Dispute Closed</SelectItem>
                <SelectItem value="Stream Terminated">
                  Stream Terminated
                </SelectItem>
                {/* add others if needed */}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="scrollbar-thin bg-transparent overflow-hidden">
          <Table>
            <TableHeader className="border-b-3 border-b-[#ffffff82]">
              <TableRow>
                <TableHead className="w-44">TIMESTAMP</TableHead>
                <TableHead>ADMIN / MODERATOR</TableHead>
                <TableHead>ACTION TYPE</TableHead>
                <TableHead>OBJECT</TableHead>
                <TableHead>CHANGES</TableHead>
                <TableHead className="w-24 text-right">ACTION</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((log, idx) => (
                <TableRow key={idx} className="hover:bg-muted/50">
                  <TableCell className="text-sm text-muted-foreground font-medium">
                    {log.timestamp}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          `w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm $log.admin.color ${log.admin.color}`,
                        )}
                      >
                        {log.admin.initial}
                      </div>
                      <div>
                        <div className="font-medium">{log.admin.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {log.admin.username}
                        </div>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex px-2.5 py-1 rounded-full text-xs font-medium text-white",
                        log.actionColor,
                      )}
                    >
                      {log.actionType}
                    </span>
                  </TableCell>

                  <TableCell className="font-medium">{log.object}</TableCell>

                  <TableCell className="text-sm text-muted-foreground max-w-md truncate">
                    {log.changes}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      onClick={()=>handleOpenDetails(idx.toString())}
                      variant="outline"
                      //   size="sm"
                      className="h-8 px-3 text-xs"
                    >
                      View <ChevronRight className="h-4 w-4" />
                    </Button>
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
            className="mt-6"
          />
        )}
      </Container>
    </FormProvider>
  );
};

export default AuditLogsPage;
