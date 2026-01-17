import { MapPin, Phone, Star, Bookmark } from "lucide-react";

import Link from "next/link";
import { Button } from "../../button";

interface Job {
  id: string;
  company: string;
  title: string;
  location: string;
  phone: string;
  experience: string;
  rating: number;
  reviews: number;
  skills: string[];
  salary: number;
  uploadedDaysAgo: number;
  employmentType: string;
  workArrangement: string;
  careerLevel: string;
  industry: string;
  flexibility: string;
  specialOpportunities: string;
  salaryRange: string;
}

export default function AppliedJobCard({ job }: { job: Job }) {
  return (
    <div className="px-4 py-2 rounded-lg border-2 border-neutral hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between  ">
        <div className="flex items-center justify-between w-full  ">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-h4">{job.company}</h3>{" "}
            <p className="text-xs text-muted-foreground">
              Uploaded {job.uploadedDaysAgo} days ago
            </p>
          </div>
          <div>
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
              {job.company.substring(0, 2).toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* Job Title */}
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-h5 mb-2">{job.title}</h4>
        <Button variant="ghost" size="sm" className="flex-shrink-0">
          <Bookmark className="w-5 h-5" /> <span>save</span>
        </Button>
      </div>
      {/* Job Details */}
      <div className="flex flex-wrap gap-4 mb-4  text-muted-foreground">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {job.location}
        </div>
        <div className="flex items-center gap-1">
          <Phone className="w-4 h-4" />
          {job.phone}
        </div>
        <div className="flex items-center gap-1">
          <span>{job.experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{job.rating}</span>
          <span>({job.reviews} Reviews)</span>
        </div>
      </div>

      {/* Skills */}
      <div className="  flex items-center ">
        <p className="  font-medium  ">Skill Needed:</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <p key={skill} className=" ">
              * {skill}
            </p>
          ))}
        </div>
      </div>

      {/* Salary and Action */}
      <div className="flex justify-between items-center pt-4 border-t border-border">
        <div className="flex items-end">
          <p className="text-h4 font-semibold text-teal-600">
            ${(job.salary / 1000).toFixed(1)}k
          </p>
          <p className="text-xs text-muted-foreground">/month</p>
        </div>
        <Button variant="link" className="text-secondary hover:text-teal-700">
          <Link href="/jobs/job-details/d">Applied Jobs </Link>
        </Button>
      </div>
    </div>
  );
}
