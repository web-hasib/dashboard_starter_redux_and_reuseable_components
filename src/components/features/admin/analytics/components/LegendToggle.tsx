"use client";

type LegendToggleProps = {
  filters: {
    serviceProvider: boolean;
    admin: boolean;
  };
  onToggle: (key: "serviceProvider" | "admin") => void;
};

export function LegendToggle({ filters, onToggle }: LegendToggleProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => onToggle("serviceProvider")}
        className="flex items-center gap-2 group"
      >
        <div
          className={`w-3 h-3 rounded-full transition-opacity ${
            filters.serviceProvider ? "opacity-100" : "opacity-30"
          }`}
          style={{ backgroundColor: "#3B82F6" }}
        />
        <span
          className={`text-sm font-medium transition-opacity ${
            filters.serviceProvider
              ? "text-gray-700"
              : "text-gray-400 line-through"
          }`}
        >
          Service provider
        </span>
      </button>

      <button
        onClick={() => onToggle("admin")}
        className="flex items-center gap-2 group"
      >
        <div
          className={`w-3 h-3 rounded-full transition-opacity ${
            filters.admin ? "opacity-100" : "opacity-30"
          }`}
          style={{ backgroundColor: "#93C5FD" }}
        />
        <span
          className={`text-sm font-medium transition-opacity ${
            filters.admin ? "text-gray-700" : "text-gray-400 line-through"
          }`}
        >
          Admin
        </span>
      </button>
    </div>
  );
}
