"use client";


import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";

interface CustomTextareaFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  rows?: number;
}

export default function CustomTextareaField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  rows = 5,
}: CustomTextareaFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="text-left w-full mt-4">
          <FormLabel className="text-lg">{label}</FormLabel>

          <FormControl>
            <Textarea
              placeholder={placeholder || "Type your message..."}
              rows={rows}
              {...field}
              className="text-lg"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
