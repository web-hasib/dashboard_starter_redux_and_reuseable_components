"use client";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { closeLogoutModal } from "@/src/redux/features/logoutModalSlice";
import { persistor, RootState } from "@/src/redux/store"; // make sure you export your persistor from store
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function LogoutModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.logoutModal.isOpen); // ✅ use Redux state

  const handleLogout = async () => {
    // 1. Purge redux-persist
    await persistor.purge(); // ✅ wait for purge to finish

    // 2. Clear localStorage & sessionStorage
    localStorage.removeItem("persistedState");
    sessionStorage.clear();
    localStorage.removeItem("persist:root"); // usually the key redux-persist uses
    localStorage.removeItem("persist:auth"); // if you persisted only auth slice

    // 3. Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });

    // 4. Reload page / redirect
    window.location.href = "/";
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(closeLogoutModal())}>
      <DialogContent className="max-w-sm flex flex-col gap-6">
        <DialogHeader className="flex flex-col items-center gap-4">
          <Image
            src="/logout.png"
            height={150}
            width={150}
            alt="Log Out"
            className="mx-auto"
          />
          <DialogTitle className="text-xl font-semibold text-center">
            Are you sure
          </DialogTitle>
          <DialogTitle className="text-xl font-semibold text-center">
            Logout your Account?
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex gap-4 items-center justify-between mx-auto">
          <Button
            className="w-[150px] "
            onClick={() => dispatch(closeLogoutModal())}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="w-[150px] "
            onClick={handleLogout}
          >
            Log out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
