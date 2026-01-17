"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { TIME_RANGE_OPTIONS } from "../constants";
import { TimeRange } from "../types";

type TimeRangeSelectorProps = {
  currentRange: TimeRange;
  variant?: "default" | "compact";
  onRangeChange?: (range: TimeRange) => void;
};

export function TimeRangeSelector({
  currentRange,
  variant = "default",
  onRangeChange,
}: TimeRangeSelectorProps) {
  if (variant === "compact") {
    return (
      <Select defaultValue={currentRange} onValueChange={onRangeChange}>
        <SelectTrigger className="w-[120px] h-9 bg-primary-500 text-white border-0 hover:bg-primary-600 focus:ring-primary-500">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {TIME_RANGE_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <Select defaultValue={currentRange} onValueChange={onRangeChange}>
      <SelectTrigger className="w-[140px] border-gray-300">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {TIME_RANGE_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
