"use client";

import { useGetMyProfileQuery } from "@/src/redux/api/userApi/useApi";
import Image from "next/image"

export default function AddImage() {
      const {data}=useGetMyProfileQuery();
  return (
    <div>
       <Image
              src={data?.data?.profileImage || "/next.svg"}
              height={40}
              width={40}
              alt="test test"
              className="rounded-full"
            />
    </div>
  )
}
