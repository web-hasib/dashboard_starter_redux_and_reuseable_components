

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  imageUrl: string;
}

interface NavbarProps {
  userProfile?: UserProfile;
  onSearch?: (query: string) => void;
}

const DashboardNavbar: React.FC<NavbarProps> = ({
  userProfile = {
    name: "Sarah Mitchell",
    email: "sarah.mitchell@gmail.com",
    imageUrl: "https://i.pravatar.cc/300?img=12",
  },
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleSearchClear = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="bg-yellow-500 px-6 py-3 flex items-center justify-between gap-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative flex items-center">
          <Search
            size={20}
            className="absolute left-4 text-gray-600"
          />
          <input
            type="text"
            placeholder="Search by Name, Reference ID, or SSN/Tax ID..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-4 py-3 bg-yellow-100 text-gray-800 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <h3 className="text-gray-900 font-semibold text-sm">
            {userProfile.name}
          </h3>
          <p className="text-gray-700 text-xs">
            {userProfile.email}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
          <Image
            src={userProfile.imageUrl}
            alt={userProfile.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;