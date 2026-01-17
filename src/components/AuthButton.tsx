"use client";

import Link from "next/link";
import Cookies from "js-cookie";

const AuthButton = () => {
  // Read cookie synchronously
  const isLoggedIn = Boolean(Cookies.get("token"));

  return (
    <Link
      href={isLoggedIn ? "/dashboard" : "/login"}
      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold transition"
    >
      {isLoggedIn ? "Dashboard" : "Login"}
    </Link>
  );
};

export default AuthButton;
