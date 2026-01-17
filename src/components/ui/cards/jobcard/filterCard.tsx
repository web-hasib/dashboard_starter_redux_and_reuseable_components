"use client";

import { useState } from "react";
import { Button } from "../../button";
import { Select, SelectContent, SelectItem } from "@radix-ui/react-select";
import { SelectTrigger, SelectValue } from "../../select";


interface FilterOption {
  label: string;
  options: { value: string; label: string }[];
}

interface FilterBarProps {
  filters: FilterOption[];
  onFilterChange?: (filterLabel: string, value: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
}) => {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const handleChange = (label: string, value: string) => {
    const updated = { ...selected, [label]: value };
    setSelected(updated);
    onFilterChange?.(label, value);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3 overflow-x-auto whitespace-nowrap p-2 border rounded-lg">
      {/* All Filter Button */}
      <Button
        variant="default"
        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex-shrink-0"
      >
        All Filter
      </Button>

      {/* Filter Selects */}
      {filters.map((filter) => (
        <Select
          key={filter.label}
          onValueChange={(value) => handleChange(filter.label, value)}
        >
          <SelectTrigger className="w-auto md:w-40 h-10 text-sm border-gray-300 bg-white">
            <SelectValue
              placeholder={filter.label}
              defaultValue={selected[filter.label]}
            />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {filter.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};
