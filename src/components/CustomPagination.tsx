// components/Pagination.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize?: number;           // optional, defaults to 10
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize = 10,
  onPageChange,
  className,
}: PaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  // Generate page numbers with ellipsis logic
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    // Always show first page
    pages.push(1);

    // Show ... if gap after 1
    if (currentPage > 4) {
      pages.push("...");
    }

    // Pages around current
    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(totalPages - 1, currentPage + 2);
      i++
    ) {
      pages.push(i);
    }

    // Show ... before last page
    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleGoInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = (e.target as HTMLInputElement).value;
      const page = parseInt(value, 10);
      if (!isNaN(page)) {
        goToPage(page);
      }
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Main pagination bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-4">
        {/* Left: Showing X-Y of Z */}
        <div className="text-sm text-muted-foreground">
          Showing {startItem}–{endItem} of {totalItems.toLocaleString()}
        </div>

        {/* Center: Page buttons */}
        <div className="flex items-center gap-1">
          {/* Back */}
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
            className="h-9 px-3 gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          {/* Page numbers */}
          {pages.map((page, idx) => (
            <Button
              key={idx}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              disabled={page === "..."}
              onClick={() => typeof page === "number" && goToPage(page)}
              className={cn(
                "h-9 w-9 p-0",
                page === currentPage &&
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                page === "..." && "cursor-default hover:bg-transparent"
              )}
            >
              {page}
            </Button>
          ))}

          {/* Next */}
          <Button
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
            className="h-9 px-3 gap-1"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Right: Jump to page */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Page
          </span>
          <Input
            type="number"
            min={1}
            max={totalPages}
            defaultValue={currentPage}
            onKeyDown={handleGoInput}
            className="h-9 w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const input = document.querySelector(
                "input[type=number]"
              ) as HTMLInputElement;
              if (input) {
                const page = parseInt(input.value, 10);
                if (!isNaN(page)) goToPage(page);
              }
            }}
            className="h-9 px-4"
          >
            Go
          </Button>
        </div>
      </div>
    </div>
  );
}