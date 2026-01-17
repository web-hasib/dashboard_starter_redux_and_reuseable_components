// "use client";

// import type * as React from "react";
// import {
//   BriefcaseBusiness,
//   House,
//   Users,
//   CalendarCheck2,
//   LogOut,
//   CreditCard,
//   ChevronRight,
//   ChevronsUpDown,
// } from "lucide-react";

// import { useState } from "react";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarRail,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarGroup,
//   SidebarGroupContent,
//   useSidebar,
// } from "@/components/ui/sidebar";

// import { useDispatch } from "react-redux";
// import { openLogoutModal } from "@/redux/features/logoutModalSlice";
// import { LogoutModal } from "./modals/logout";
// import { useGetMyProfileQuery } from "@/redux/api/userApi/useApi";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navigationItems = [
//   { title: "Dashboard", icon: House, url: "/admin-dashboard" },
//   {
//     title: "User Management",
//     icon: Users,
//     url: "/admin-dashboard/user-management",
//   },
//   {
//     title: "Provider Verification",
//     icon: BriefcaseBusiness,
//     url: "/admin-dashboard/provider-verfication",
//   },
//   {
//     title: "Booking & Activity Monitoring",
//     icon: CalendarCheck2,
//     url: "/admin-dashboard/booking-activity",
//   },
//   {
//     title: "Payments & Analytics",
//     icon: CreditCard,
//     url: "/admin-dashboard/payment-analytics",
//   },
// ];

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   const { isMobile, state, setOpen } = useSidebar();
//   const pathname = usePathname();
//   const dispatch = useDispatch();
//   const [openDropdown, setOpenDropdown] = useState(true);

//   const { data } = useGetMyProfileQuery();

//   const handleNavClick = (url: string) => {
//     if (state === "collapsed" && !isMobile) {
//       setOpen(true);
//       setTimeout(() => {
//         window.location.href = url;
//       }, 150);
//     } else {
//       window.location.href = url;
//     }
//   };

//   return (
//     <>
//       <Sidebar collapsible="icon" {...props} className="flex flex-col h-screen">
//         {/* Logo */}
//         <div className="flex items-center justify-between p-4 border border-b-gray-300">
//           {/* left side */}
//           <div className="flex items-center">
//             <Image
//               src={data?.data?.profileImage || "/icon.png"}
//               height={40}
//               width={40}
//               alt="Dashboard Profile Image"
//               className="rounded-full"
//             />

//             <div className="ml-3">
//               <h2 className="font-bold text-xl">{data?.data?.name}</h2>
//               <h2 className="font-bold text-lg">{data?.data?.role}</h2>
//             </div>
//           </div>
//           {/* right side */}
//           <button
//             className="cursor-pointer"
//             onClick={() => setOpenDropdown(!openDropdown)}
//           >
//             <ChevronsUpDown />
//           </button>
//         </div>
//         <h1 className="text-[#2f3a49b2] text-xl font-semibold ml-4 mt-8 mb-2">
//           {" "}
//           Platform
//         </h1>

//         {/* Navigation */}

//         {openDropdown && (
//           <SidebarContent className="flex-1 flex flex-col justify-between">
//             <div>
//               <SidebarGroup>
//                 <SidebarGroupContent>
//                   <SidebarMenu>
//                     {navigationItems.map((item) => {
//                       // Highlight logic
//                       const isActive =
//                         item.url === "/admin-dashboard"
//                           ? pathname === item.url // Exact match for Overview
//                           : pathname.startsWith(item.url); // Include sub-routes

//                       return (
//                         <SidebarMenuItem key={item.title}>
//                           <Link href={item.url}>
//                             <SidebarMenuButton
//                               size="lg"
//                               tooltip={item.title}
//                               className={`group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:w-12! group-data-[collapsible=icon]:h-12! group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:mx-auto ${
//                                 isActive
//                                   ? "bg-linear-to-r from-[#3E64CB] to-[#1F3265] text-white"
//                                   : ""
//                               }`}
//                             >
//                               <div className="w-full flex items-center justify-between">
//                                 <div className="flex items-center">
//                                   <item.icon
//                                     className={`size-5 group-data-[collapsible=icon]:size-5 ${
//                                       isActive ? "text-primary-foreground" : ""
//                                     }`}
//                                   />
//                                   <span className="ml-3 group-data-[collapsible=icon]:hidden text-base ">
//                                     {item.title}
//                                   </span>
//                                 </div>
//                                 <ChevronRight />
//                               </div>
//                             </SidebarMenuButton>
//                           </Link>
//                         </SidebarMenuItem>
//                       );
//                     })}
//                   </SidebarMenu>
//                 </SidebarGroupContent>
//               </SidebarGroup>
//             </div>

//             {/* Logout button at bottom */}
//             <div className="mb-6">
//               <SidebarMenu>
//                 <SidebarMenuItem>
//                   <SidebarMenuButton
//                     size="lg"
//                     tooltip="Logout"
//                     onClick={() => dispatch(openLogoutModal())}
//                     className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!w-12 group-data-[collapsible=icon]:!h-12 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:mx-auto text-neutral-700 hover:bg-red-50"
//                   >
//                     <div className="w-full flex items-center justify-between">
//                       <div className="flex items-center">
//                         <LogOut className="size-5 group-data-[collapsible=icon]:size-5 text-base text-neutral-700" />
//                         <span className="ml-3 group-data-[collapsible=icon]:hidden text-base text-neutral-700">
//                           Logout
//                         </span>
//                       </div>
//                       <ChevronRight />
//                     </div>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               </SidebarMenu>
//             </div>
//           </SidebarContent>
//         )}

//         <SidebarRail />
//       </Sidebar>

//       {/* Logout Modal */}
//       <LogoutModal />
//     </>
//   );
// }
