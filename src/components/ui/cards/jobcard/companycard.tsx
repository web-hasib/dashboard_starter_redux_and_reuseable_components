import { Separator } from "@radix-ui/react-select";
import { Star } from "lucide-react";

interface Company {
  id: string;
  name: string;
  type: string;
  employees: number;
  rating: number;
  image: string;
}

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Company Image */}
      <div className="w-full h-32 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="text-4xl font-bold text-gray-400">
          {company.name.substring(0, 2).toUpperCase()}
        </div>
      </div>

      {/* Company Info */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm mb-1">{company.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{company.type}</p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{company.rating}</span>
        </div>
      </div>
      <Separator />
      <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-2 scrollbar-hide p-2">
        <p className="bg-neutral-200 rounded-full px-3 py-1 flex-shrink-0">
          Software
        </p>
        <p className="bg-neutral-200 rounded-full px-3 py-1 flex-shrink-0">
          Tech
        </p>
        <p className="bg-neutral-200 rounded-full px-3 py-1 flex-shrink-0">
          Software Company
        </p>
      </div>
    </div>
  );
}
