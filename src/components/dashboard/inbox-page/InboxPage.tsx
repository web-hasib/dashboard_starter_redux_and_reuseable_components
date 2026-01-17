"use client";

import { useForm, FormProvider, useWatch } from "react-hook-form";
import { Search, SlidersHorizontal } from "lucide-react";

import Container from "../../Container";
import Heading from "../../Heading";
import { Input } from "../../ui/input";

type FormValues = {
  search: string;
  filter: string;
};

const InboxPage = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      search: "",
      filter: "",
    },
  });

  /** 🔍 Watch values separately */
  const searchValue = useWatch({
    control: form.control,
    name: "search",
  });

  const filterValue = useWatch({
    control: form.control,
    name: "filter",
  });

  /** 🧠 Console logs (separate) */
  console.log("Search Value:", searchValue);
  console.log("Filter Value:", filterValue);

  return (
    <FormProvider {...form}>
      <Container className="py-6">
        {/* ================= HEADER ================= */}
        <div className="mb-6">
          <Heading as="h1" size="h2">
            Reports & Dispute’s Inbox
          </Heading>

          <Heading
            as="h6"
            size="h6"
            className="mt-2 text-muted-foreground"
          >
            Manage moderation cases, disputes and safety reports
          </Heading>
        </div>

        {/* ================= SEARCH + FILTER ================= */}
        <div className="flex items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />

            <Input
              {...form.register("search")}
              placeholder="Search by user, ticket id, category, sub-category etc..."
              className="pl-9 h-11 bg-card border-border"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 bg-primary p-2 rounded-2xl text-sm text-muted-foreground cursor-pointer">
            <SlidersHorizontal className="size-4" />
            <span>Filter</span>
                here add dropdown filter 
                options will be category, sub-category, status, priority
          
          </div>
        </div>
      </Container>
    </FormProvider>
  );
};

export default InboxPage;
