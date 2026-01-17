"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";

interface MyFormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
  type?: React.ComponentProps<typeof Input>["type"];
}

function CustomFormField<T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  type = "text",
}: MyFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="text-left w-full my-4">
          <FormLabel className=" text-[#000C2B] text-md font-bold">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              className="bg-[#F8F9FF] rounded-4xl"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default CustomFormField;
