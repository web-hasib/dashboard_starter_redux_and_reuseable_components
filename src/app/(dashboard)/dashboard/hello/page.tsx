"use client";

import React from "react";
import { useForm } from "react-hook-form";

import CustomSelectField from "@/src/components/CustomSelect";
import CustomTextareaField from "@/src/components/CustomTextareaField";
import CustomFormField from "@/src/components/FormField";
import { Button } from "@/src/components/ui/button";
import { Form } from "@/src/components/ui/form";

import {
  DashboardMainContainer,
} from "@/src/components/features/admin/dashboard/components/DashboardContainer";

import DashboardOverviewBooking from "@/src/components/ui/cards/dashboardOverview-booking";
import LogoutModal from "@/src/components/ui/modals/logout";

/**
 * Form type
 */
type FormValues = {
  category: string;
  message: string;
  email: string;
};

const Page = () => {
  /**
   * Initialize react-hook-form
   */
  const form = useForm<FormValues>({
    defaultValues: {
      category: "",
      message: "",
      email: "",
    },
  });

  /**
   * Submit handler
   */
  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="space-y-10">
      {/* Dashboard cards */}
      <DashboardMainContainer>
        <DashboardOverviewBooking
          value={1500}
          title="Total Earnings"
          trend="+5% since last month"
        />

        <DashboardOverviewBooking
          value={1500}
          title="Active Bookings"
          trend="+5% since last month"
        />
      </DashboardMainContainer>

      {/* Form section */}
      <div className="max-w-xl mx-auto p-6 rounded-xl shadow">
        <h1 className="text-2xl font-semibold mb-6">Hello World</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <CustomSelectField<FormValues>
              control={form.control}
              name="category"
              label="Post Category"
              placeholder="Select a category"
              options={[
                { label: "Music", value: "MUSIC" },
                { label: "Poetry", value: "POETRY" },
                { label: "Story", value: "STORY" },
                { label: "Education", value: "EDUCATION" },
              ]}
            />

            <CustomTextareaField
              control={form.control}
              name="message"
              label="Message"
              placeholder="Type your message..."
              rows={5}
            />

            <CustomFormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
              type="email"
            />

            <Button type="submit" variant="secondary">
              Submit
            </Button>

            <LogoutModal />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
