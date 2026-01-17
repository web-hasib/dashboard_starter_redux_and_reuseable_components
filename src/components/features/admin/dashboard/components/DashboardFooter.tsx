// "use client";
// import { Button } from "@/src/components/ui/button";
// import LogoutModal from "@/src/components/ui/modals/logout";
// import { openLogoutModal } from "@/src/redux/features/logoutModalSlice";
// import { useAppDispatch } from "@/src/redux/hook";

// export default function DashboardFooter() {
//   const dispatch = useAppDispatch();
//   return (
//     <div className="py-12 flex flex-col gap-4 w-full">
//       {/* 🔴 OPEN MODAL BUTTON */}
//       <Button variant="destructive" onClick={() => dispatch(openLogoutModal())}>
//         Logout
//       </Button>

//       {/* 🧠 Modal always mounted */}
//       <LogoutModal />
//     </div>
//   );
// }



"use client";

import { LogOut } from "lucide-react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/src/redux/features/authSlices";

export default function DashboardLogoutButton() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // 1️⃣ Remove cookie
    Cookies.remove("accessToken");

    // 2️⃣ Clear redux auth
    dispatch(logout());

    // 3️⃣ Redirect
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-6 px-4 -ml-2 py-3 rounded-lg text-red-500  cursor-pointer transition text-sm font-medium"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}
