// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Logo from "@/public/logo.png"
// import { Eye, EyeOff } from "lucide-react";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import { SerializedError } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/src/redux/store";
// import { Spinner } from "@/src/components/ui/spinner";
// import { useLoginMutation } from "@/src/redux/api/auth/authApi";
// import Cookies from "js-cookie";
// import { toast } from "sonner";
// import { setCredentials } from "@/src/redux/features/authSlice";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [login, { isLoading }] = useLoginMutation();
//   const dispatch = useDispatch();

//   const [showPassword, setShowPassword] = useState(false);

//   // Get User Information from store
//   const { loggedUser } = useSelector((state: RootState) => state.auth);

//   // Set Error MSG
//   const [error, setError] = useState<
//     FetchBaseQueryError | SerializedError | null
//   >(null);

//   const handleLogin = async () => {
//     // if (email === "admin@gmail.com" && password === "admin@gmail") {

//     //   const authData = {
//     //     email: email,
//     //     token: "demo-token-123",
//     //     isAuthenticated: true,
//     //   };
//     //   localStorage.setItem("auth", JSON.stringify(authData));

//     //   setTimeout(() => {
//     //     router.push("/dashboard");
//     //   }, 100);
//     // } else {
//     //   setError("Invalid email or password");

//     const payload = {
//       email,
//       password,
//     };

//     try {
//       const res = await login(payload).unwrap();
//       console.log("res", res);

//       // If Success then redirect into verify OTP page
//       if (res?.data) {
//         console.log("Logged In", res?.data?.token);
//         // Token
//         const token = res?.data?.token;

//         // Set toekn
//         Cookies.set("accessToken", `Bearer ${token}`, { expires: 7 });

//         console.log(loggedUser?.role);

//         // Store Data Into Redux
//         dispatch(setCredentials(token));
//         router.push("/admin-dashboard");
//       }

//       // Set Error
//       if ("error" in res) {
//         setError(res?.error ?? null);
//       } else {
//         setError(null);
//       }
//     } catch (error) {
//       console.error("Unexpected error:", error);
//     }
//   };
//   if (error) {
//     console.log("Login Error", error);
//     toast.error("Login Failed! Please check your credentials.");
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="w-full max-w-md bg-card border rounded-2xl p-8 shadow-lg">
//         <div className="flex justify-center mb-4">
//           <Image src={Logo} alt="logo" width={100} height={80} />
//         </div>

//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold">Welcome Back</h1>
//           <p className="text-sm text-muted-foreground">Login to continue</p>
//         </div>

//         <div className="space-y-5">
//           <div>
//             <label className="text-sm">Email</label>
//             <input
//               type="email"
//               value={email}
//               placeholder="admin@gmail.com"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border rounded-lg px-4 py-3 text-sm"
//               defaultValue="admin@gmail.com"
//             />
//           </div>

//           <div>
//             <label className="text-sm">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 placeholder="admin@gmail"
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full border rounded-lg px-4 py-3 text-sm pr-10"
//                 defaultValue="admin@gmail"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//           </div>

//           <button
//             onClick={handleLogin}
//             disabled={isLoading}
//             className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold"
//           >
//             {isLoading ? <Spinner /> : ""}Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo.png";
import { Eye, EyeOff } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { setCredentials } from "@/src/redux/features/authSlice";

import { useLoginMutation } from "@/src/redux/api/auth/authApi";
import { Spinner } from "@/src/components/ui/spinner";

import Cookies from "js-cookie";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";


// ✅ Zod Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const { loggedUser } = useSelector((state: RootState) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<
    FetchBaseQueryError | SerializedError | null
  >(null);

  // ✅ React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ✅ Submit Handler
  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await login(data).unwrap();

      console.log(res);
      if (res?.data?.result?.accessToken) {
        const token = res?.data?.result?.accessToken;
        console.log(token);

        // Cookie
        Cookies.set("accessToken", `Bearer ${token}`, { expires: 7 });

        // Redux
        dispatch(setCredentials(token));

        toast.success("Login successful!");
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err as FetchBaseQueryError);
      toast.error("Login failed! Check credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border rounded-2xl p-8 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={Logo} alt="logo" width={100} height={80} />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="admin@gmail.com"
              {...register("email")}
              className="w-full border rounded-lg px-4 py-3 text-sm"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
                className="w-full border rounded-lg px-4 py-3 text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            {isLoading && <Spinner />}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
