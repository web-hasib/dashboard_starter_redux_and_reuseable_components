"use client";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { useForm } from "react-hook-form";

import CustomFormField from "@/src/components/FormField";
import { Form } from "@/src/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import ErrorAlert from "@/src/components/ui/ErrorAlert";
import { Spinner } from "@/src/components/ui/spinner";
import { useLoginMutation } from "@/src/redux/api/adminAuth/adminAuthApi";
import { setCredentials } from "@/src/redux/features/authSlice";
import { RootState } from "@/src/redux/store";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Regester zod Schema
export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LogIn() {
  // Call Redux API
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  // Get User Information from store
  const { loggedUser } = useSelector((state: RootState) => state.auth);

  // Set Error MSG
  const [error, setError] = useState<
    FetchBaseQueryError | SerializedError | null
  >(null);

  // Get Router to send OTV verigy page
  const router = useRouter();

  // React Hook Form
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //   Submit Form
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await login(data).unwrap();
      console.log("res", res);

      // If Success then redirect into verify OTP page
      if (res?.data) {
        console.log("Logged In", res?.data?.result?.accessToken);
        // Token
        const token = res?.data?.result?.accessToken;

        // Set toekn
        Cookies.set("accessToken", `Bearer ${token}`, { expires: 7 });

        console.log(loggedUser?.role);

        // Store Data Into Redux
        dispatch(setCredentials(token));
        router.push("/dashboard");
      }

      // Set Error
      if ("error" in res) {
        setError(res?.error ?? null);
      } else {
        setError(null);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <div className="flex bg-white md:flex-row flex-col md:space-x-20 md:items-center md:justify-center min-h-screen ">
      {/* Left side Image */}
      <div className="md:mx-0 mx-2 md:my-0 my-2">
        <Image
          src="/auth/loginLogo.png"
          alt="Register Image"
          width={550}
          height={800}
          className="rounded-2xl  h-auto md:h-[800px]"
        />
      </div>

      {/* Right side */}

      <div className="mx-2 md:mx-10 md:my-0 my-2">
        {/* Heading */}
        <h1 className="text-[#CCA76A] text-6xl font-bold md:mb-10 mb-5 md:text-start text-center">
          Lavishly
        </h1>

        <div className="border border-gray-300 rounded-2xl md:w-[480px] md:p-8 p-4 ">
          {/* Content */}
          <div className="mt-8 mb-4">
            <h1 className="text-3xl font-bold text-[#1F3265] mb-4">
              Admin Sign In
            </h1>
            <p className="text-[#8E98FF] text-lg">Access your dashboard</p>
          </div>
          {/* sign Up Form  */}

          {/* SHow Error Msg */}
          <ErrorAlert error={error} />

          <div className="mt-10 ">
            <Form {...form}>
              <form
                className="text-title "
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* Email */}
                <CustomFormField
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="yourname@gmail.com"
                />
                {/* Passwords */}
                <div className="relative">
                  <CustomFormField
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-15 -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
                </div>
                {/* Forgot Pass */}
                <div className="flex justify-between items-center my-4">
                  <div className="flex items-center space-x-2 text-caption">
                    <Checkbox
                      id="checkBox"
                      className="border border-[#FA2C37]"
                    />
                    <label htmlFor="checkBox" className="text-[#FA2C37]">
                      Remember me
                    </label>
                  </div>
                  {/* <Link href="/" className="text-destructive ">
                  Forgot Password ?
                </Link> */}
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="my-4 w-full rounded-2xl bg-[#1F3265] text-white text-md font-semibold py-6"
                >
                  {isLoading && <Spinner className="mr-2 animate-spin" />}
                  Log In
                </Button>
              </form>
            </Form>
          </div>

          {/* Social Log In */}
          {/* <div>
          <div className="flex items-center gap-3 text-sm text-gray-500 my-4">
            <hr className="flex-1 h-px bg-neutral-300 border-0" />
            <span>or with</span>
            <hr className="flex-1 h-px bg-neutral-300 border-0" />
          </div>
      
          <Button
            variant="outline"
            className="my-4 w-full text-md font-semibold py-6 flex justify-center items-cener"
          >
            <Image
              src="/auth/google.png"
              height={20}
              width={20}
              alt=" Register Image "
            />
            <span>Log In with Google</span>
          </Button>
        
          <p className="text-caption text-lg">
            If you don’t have any account please{" "}
            <Link href="/auth/register" className="font-bold text-secondary">
              Sign Up
            </Link>
          </p>
        </div> */}
        </div>
      </div>
    </div>
  );
}
