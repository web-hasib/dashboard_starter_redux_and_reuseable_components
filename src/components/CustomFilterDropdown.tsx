"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { SlidersHorizontal, CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "../lib/utils";
import { Calendar } from "./calendar";

interface FilterFieldCheckbox {
  type: "checkbox";
  key: string;
  label: string;
  options: string[];
}

interface FilterFieldSelect {
  type: "select";
  key: string;
  label: string;
  options: string[];
  single?: boolean;
}

interface FilterFieldDateRange {
  type: "dateRange";
  key: string;
  label: string;
}

export type FilterField = FilterFieldCheckbox | FilterFieldSelect | FilterFieldDateRange;

interface FilterValueDateRange {
  start?: string;
  end?: string;
}

type FilterValue = FilterValueDateRange | string[] | undefined;

interface FiltersObject {
  [key: string]: FilterValue;
}

interface CustomFilterDropdownProps {
  name: string;
  fields: FilterField[];
}

export default function CustomFilterDropdown({
  name,
  fields,
}: CustomFilterDropdownProps) {
  const { watch, setValue } = useFormContext();
  const [open, setOpen] = useState(false);

  const filters = (watch(name) || {}) as FiltersObject;

  const updateFilter = (key: string, value: FilterValue): void => {
    setValue(name, { ...filters, [key]: value }, { shouldDirty: true });
  };

  const toggleCheckbox = (key: string, value: string): void => {
    const current = (filters[key] || []) as string[];
    updateFilter(
      key,
      current.includes(value)
        ? current.filter((v: string) => v !== value)
        : [...current, value]
    );
  };

  const handleDate = (
    key: string,
    type: "start" | "end",
    date?: Date
  ): void => {
    const currentValue = (filters[key] || {}) as FilterValueDateRange;
    updateFilter(key, {
      ...currentValue,
      [type]: date ? format(date, "yyyy-MM-dd") : undefined,
    });
  };

  const activeCount = Object.values(filters).reduce((acc: number, val: FilterValue) => {
    if (Array.isArray(val)) {
      return acc + val.length;
    }
    if (val && typeof val === "object" && ("start" in val || "end" in val)) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const clearAllFilters = (): void => {
    setValue(name, {} as FiltersObject);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "relative flex items-center gap-2",
            activeCount > 0 && "border-primary"
          )}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filter
          {activeCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80 space-y-6 p-4">
        {fields.map((field) => {
          if (field.type === "checkbox") {
            const checkboxField = field as FilterFieldCheckbox;
            const currentCheckboxValues = (filters[checkboxField.key] || []) as string[];
            
            return (
              <div key={checkboxField.key}>
                <h4 className="font-medium mb-2">{checkboxField.label}</h4>
                {checkboxField.options.map((opt) => (
                  <div key={opt} className="flex items-center gap-2">
                    <Checkbox
                      checked={currentCheckboxValues.includes(opt)}
                      onCheckedChange={() =>
                        toggleCheckbox(checkboxField.key, opt)
                      }
                    />
                    <span className="text-sm">{opt}</span>
                  </div>
                ))}
              </div>
            );
          }

          if (field.type === "select") {
            const selectField = field as FilterFieldSelect;
            const currentSelectValue = ((filters[selectField.key] || []) as string[])[0] || "";
            
            return (
              <div key={selectField.key}>
                <h4 className="font-medium mb-2">{selectField.label}</h4>
                <Select value={currentSelectValue} onValueChange={(v) => {
                  updateFilter(selectField.key, v ? [v] : []);
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${selectField.label}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {selectField.options.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            );
          }

          if (field.type === "dateRange") {
            const dateRangeField = field as FilterFieldDateRange;
            const currentDateValue = (filters[dateRangeField.key] || {}) as FilterValueDateRange;
            
            return (
              <div key={dateRangeField.key}>
                <h4 className="font-medium mb-2">{dateRangeField.label}</h4>
                {(["start", "end"] as const).map((t) => (
                  <div key={t} className="flex items-center gap-2 mb-2">
                    <CalendarIcon className="h-4 w-4" />
                    <Calendar
                      mode="single"
                      selected={
                        currentDateValue[t]
                          ? new Date(currentDateValue[t])
                          : undefined
                      }
                      onSelect={(d: Date | undefined) => {
                        if (d) {
                          handleDate(dateRangeField.key, t, d);
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            );
          }

          return null;
        })}

        <div className="flex justify-between border-t pt-4">
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear All
          </Button>
          <Button size="sm" onClick={() => setOpen(false)}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}