// "use client";

// import type * as React from "react";
// import { BriefcaseBusiness, Grid, IdCard, Settings } from "lucide-react";
// import Image from "next/image";
// import { usePathname } from "next/navigation"; // <-- Next.js App Router

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
// import Link from "next/link";


// const navigationItems = [
//   { title: "Overview", icon: Grid, url: "/dashboard" },
//   {
//     title: "Job Posting",
//     icon: BriefcaseBusiness,
//     url: "/dashboard/employer/jobposting",
//   },

//   { title: "Candidates", icon: IdCard, url: "/dashboard/employer/candidates" },
//   { title: "Profile", icon: Settings, url: "/dashboard/employer/profile" },
// ];

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   const { isMobile, state, setOpen } = useSidebar();
//   const pathname = usePathname();

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
//     <Sidebar collapsible="icon" {...props}>
//       <Link href="/">
//         <Image
//           src="/logo.png"
//           alt="Logo Auth"
//           width={80}
//           height={80}
//           className="mx-4 w-16 sm:w-20 md:w-24 h-auto mt-4 mb-8"
//         />
//       </Link>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {navigationItems.map((item) => {
//                 const isActive = pathname === item.url;
//                 return (
//                   <SidebarMenuItem key={item.title}>
//                     <Link href={item.url}>
//                       <SidebarMenuButton
//                         size="lg"
//                         tooltip={item.title}
//                         className={`group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:!w-12 group-data-[collapsible=icon]:!h-12 group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:mx-auto ${
//                           isActive ? "bg-primary text-primary-foreground" : ""
//                         }`}
//                       >
//                         <item.icon
//                           className={`size-5 group-data-[collapsible=icon]:size-5 ${
//                             isActive ? "text-primary-foreground" : ""
//                           }`}
//                         />
//                         <span className="group-data-[collapsible=icon]:hidden text-base">
//                           {item.title}
//                         </span>
//                       </SidebarMenuButton>
//                     </Link>
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       <SidebarRail />
//     </Sidebar>
//   );
// }
