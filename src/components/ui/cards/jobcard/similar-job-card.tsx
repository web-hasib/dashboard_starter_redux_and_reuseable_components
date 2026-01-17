import { MapPin } from "lucide-react";
import Link from "next/link";

interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  salary: number;
}

export default function SimilarJobCard({ job }: { job: Job }) {
  return (
    <div className="mb-4 border border-gray-300 rounded-lg p-4 hover:border-teal-500 hover:shadow-md transition cursor-pointer bg-white">
      {/* Company Logo */}
      <div className="flex space-x-4 items-center">
        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold  ">
          {job.company.charAt(0)}
        </div>

        {/* Company Name */}
        <h3 className="font-bold text-gray-900 text-h5 mb-1">{job.company}</h3>
      </div>
      {/* Job Title */}
      <p className="text-h6 font-semibold text-gray-800 mt-2">{job.title}</p>

      {/* Location */}
      <p className="text-md    text-gray-600 mb-3 flex items-center gap-1">
        <MapPin size={12} />
        {job.location} (Onsite)
      </p>
      <div className="flex items-center justify-between">
        {/* Salary */}
        <p className="text-h5 font-bold text-gray-900 mb-3">
          ${job.salary} <span className="text-sm">/Month</span>
        </p>

        {/* View Details Link */}
        <Link
          href={`/job/${job.id}`}
          className="text-teal-500 text-sm font-semibold hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
