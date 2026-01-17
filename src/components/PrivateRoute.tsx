// components/PrivateRoute.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check token only on client side
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    const protectedPaths = ["/dashboard", "/admin-dashboard"];

    const isProtected = protectedPaths.some((path) =>
      pathname.startsWith(path),
    );

    const isLoginPage = pathname === "/login";

    // If trying to access protected route without token → redirect to login
    if (isProtected && !token) {
      router.replace("/login");
      return;
    }

    // If already logged in and trying to access login → redirect to dashboard
    if (isLoginPage && token) {
      router.replace("/dashboard");
      return;
    }

    // All good → show content
    // setIsChecking(false);
  }, [pathname, router]);

  // Show nothing (or loader) while checking
  //   if (isChecking) {
  //     return (
  //       <div className="min-h-screen flex items-center justify-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  //       </div>
  //     );
  //   }

  return <>{children}</>;
}
